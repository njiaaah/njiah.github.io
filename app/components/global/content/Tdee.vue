<template>
  <div
    class="tdee my-6 w-full max-w-3xl rounded-lg p-6"
    :class="isDark ? 'bg-gray-800 text-gray-200' : 'bg-gray-200 text-gray-800'"
    @keydown.enter="calculate"
  >
    <div class="mb-4 flex items-center justify-between">
      <h2 class="text-lg font-semibold">Total Daily Energy Expenditure Calculator</h2>
      <button
        type="button"
        class="cursor-pointer select-none text-xl"
        :class="isDark ? 'grayscale' : ''"
        title="Toggle theme"
        @click="isDark = !isDark"
      >
        💡
      </button>
    </div>

    <div class="mb-4">
      <h3 class="mb-2 font-medium">Gender</h3>
      <fieldset class="flex gap-4">
        <label class="flex cursor-pointer items-center gap-1">
          <input v-model="gender" type="radio" value="male" />
          <span>Male</span>
        </label>
        <label class="flex cursor-pointer items-center gap-1">
          <input v-model="gender" type="radio" value="female" />
          <span>Female</span>
        </label>
      </fieldset>
    </div>

    <div class="mb-4">
      <h3 class="mb-2 font-medium">Parameters</h3>
      <div class="space-y-2">
        <label class="inline-block w-28">Weight, kg</label>
        <input v-model.number="weight" type="number" class="w-20 rounded border px-1" />
      </div>
      <div class="space-y-2">
        <label class="inline-block w-28">Height, cm</label>
        <input v-model.number="height" type="number" class="w-20 rounded border px-1" />
      </div>
      <div class="space-y-2">
        <label class="inline-block w-28">Age, yrs</label>
        <input v-model.number="age" type="number" class="w-20 rounded border px-1" />
      </div>
    </div>

    <div class="mb-4">
      <h3 class="mb-2 font-medium">Daily Activity</h3>
      <fieldset class="grid grid-cols-1 gap-1">
        <label v-for="opt in activityOptions" :key="opt.value" class="flex cursor-pointer gap-2">
          <input v-model="activity" type="radio" :value="opt.value" />
          <span class="text-sm">{{ opt.label }}</span>
        </label>
      </fieldset>
    </div>

    <button
      type="button"
      class="mb-3 rounded bg-gray-500 px-3 py-1 text-white hover:bg-gray-600"
      @click="calculate"
    >
      Calculate
    </button>

    <div
      v-show="hasResult"
      class="w-60 rounded p-2"
      :class="hasError ? 'outline outline-1 outline-red-500' : ''"
    >
      <h3 class="mb-2 font-medium">Your TDEE:</h3>
      <p>
        maintaining weight – <strong :class="isDark ? 'text-gray-200' : 'text-gray-800'">{{ maintain }}</strong> kcal
      </p>
      <p>
        losing weight – <strong :class="isDark ? 'text-gray-200' : 'text-gray-800'">{{ lose }}</strong> kcal
      </p>
      <p>
        gaining weight – <strong :class="isDark ? 'text-gray-200' : 'text-gray-800'">{{ gain }}</strong> kcal
      </p>
      <p v-if="hasError" class="mt-2 text-sm text-red-500">check input values</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const activityOptions = [
  { value: 1.2, label: 'Sedentary (little to no exercise + desk job)' },
  { value: 1.375, label: 'Lightly Active (light exercise 1–3 days/week)' },
  { value: 1.55, label: 'Moderately Active (moderate exercise 3–5 days/week)' },
  { value: 1.725, label: 'Very Active (heavy exercise 6–7 days/week)' },
  { value: 1.9, label: 'Extremely Active (very heavy exercise, 2x/day training)' },
];

const gender = ref<'male' | 'female'>('male');
const weight = ref<number>(70);
const height = ref<number>(175);
const age = ref<number>(30);
const activity = ref(1.2);
const isDark = ref(false);

const maintain = ref<number | ''>('');
const lose = ref<number | ''>('');
const gain = ref<number | ''>('');
const hasResult = ref(false);
const hasError = ref(false);

function calculate(): void {
  const w = weight.value;
  const h = height.value;
  const a = age.value;

  let bmr: number;
  if (gender.value === 'male') {
    bmr = (66 + 13.7 * w + 5 * h - 6.8 * a) * activity.value;
  } else {
    bmr = (655 + 9.6 * w + 1.8 * h - 4.7 * a) * activity.value;
  }

  const tdee = Math.floor(bmr);
  maintain.value = tdee;
  lose.value = tdee - 500;
  gain.value = tdee + 500;
  hasResult.value = true;
  hasError.value = tdee < 1000 || tdee > 5000;
}
</script>
