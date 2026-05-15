<template>
  <div class="pass-gen my-6 w-full max-w-3xl rounded-lg bg-black p-6">
    <div class="flex flex-col gap-6 sm:flex-row">
      <div class="flex-1">
        <p
          id="password"
          class="mb-4 text-center font-mono text-2xl text-[#CCD6DD] sm:text-3xl"
        >
          {{ passwordDisplay }}
        </p>
        <div class="flex flex-wrap justify-center gap-2">
          <button
            v-for="len in lengths"
            :key="len"
            type="button"
            class="h-8 w-14 border border-white bg-black font-bold text-white transition-colors hover:bg-white hover:text-black"
            @click="generate(len)"
          >
            {{ len }}
          </button>
        </div>
      </div>
      <div class="max-h-48 flex-shrink-0 overflow-y-auto bg-[#111] px-4 py-3 text-[10px] text-white sm:w-48">
        <h2 class="mb-2 font-semibold">Password log:</h2>
        <p v-for="(p, i) in log" :key="i" class="font-mono">{{ p }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const allSymbols = '1234567890qQwWeErRtTyYuUiIoOpPaAsSdDfFgGhHjJkKlLzZxXcCvVbBnNmM'.split('');

const lengths = [6, 8, 10, 12];
const passwordDisplay = ref('How many chars?');
const log = ref<string[]>([]);

const maxLogEntries = 25;

function generatePassword(len: number): string {
  let pass = '';
  for (let n = 0; n < len; n++) {
    const idx = Math.floor(Math.random() * allSymbols.length);
    pass += allSymbols[idx];
  }
  return pass;
}

function generate(len: number): void {
  const pass = generatePassword(len);
  passwordDisplay.value = pass;

  if (log.value.length >= maxLogEntries) {
    log.value = [];
  }
  log.value.push(pass);
}
</script>
