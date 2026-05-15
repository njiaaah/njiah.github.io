<template>
  <div class="wordle my-6 flex justify-center">
    <div
      class="wordle-phone flex max-h-[min(700px,90vh)] w-[min(360px,100%)] flex-col rounded-2xl bg-[#e4e4e4] shadow-xl"
      style="aspect-ratio: 9 / 16; touch-action: manipulation"
    >
      <div class="relative flex flex-1 flex-col overflow-hidden p-2">
        <div class="mb-1 flex justify-end">
          <button
            type="button"
            class="rounded px-2 py-1 text-sm font-medium text-gray-600 hover:bg-gray-300"
            @click="showHelp = !showHelp"
          >
            ?
          </button>
        </div>

        <div
          v-if="showHelp"
          class="absolute left-2 right-2 top-12 z-20 rounded-lg bg-[#d8d8d8] p-3 text-left text-sm shadow-lg"
        >
          <p class="mb-2 font-semibold">Помощь</p>
          <p class="mb-2">Угадайте слово из 5 букв за 6 попыток.</p>
          <div class="mb-2 flex gap-1">
            <span class="flex h-8 w-8 items-center justify-center rounded bg-yellow-400 text-xs">Х</span>
            <span class="ml-1">— буква в слове, но не на месте</span>
          </div>
          <div class="mb-2 flex gap-1">
            <span class="flex h-8 w-8 items-center justify-center rounded bg-green-500 text-xs text-white">У</span>
            <span class="ml-1">— буква на правильном месте</span>
          </div>
          <div class="mb-2 flex gap-1">
            <span class="flex h-8 w-8 items-center justify-center rounded bg-gray-500 text-xs text-white opacity-50">Й</span>
            <span class="ml-1">— буквы нет в слове</span>
          </div>
        </div>

        <div class="relative flex flex-1 flex-col justify-center gap-0.5">
          <div
            v-for="(row, ri) in grid"
            :key="ri"
            class="flex justify-center gap-0.5"
          >
            <div
              v-for="(cell, ci) in row"
              :key="ci"
              class="flex aspect-square min-w-0 flex-1 items-center justify-center rounded border border-gray-500 text-lg font-medium"
              :class="[
                !cell.status && 'max-w-[52px] bg-[#d8d8d8] text-[#313131]',
                cell.status === 'green' && 'bg-green-500 text-white',
                cell.status === 'yellow' && 'bg-yellow-400 text-[#313131]',
                cell.status === 'gray' && 'bg-gray-500 text-white opacity-50',
                cell.pop && 'animate-pop',
                errorRow === ri && 'animate-shake'
              ]"
            >
              {{ cell.letter }}
            </div>
          </div>
        </div>

        <div v-if="errorMsg" class="mb-1 text-center text-sm text-red-600">
          {{ errorMsg }}
        </div>

        <div class="mt-2 grid gap-0.5 px-1">
          <div class="flex justify-center gap-0.5">
            <button
              v-for="k in row1"
              :key="k"
              type="button"
              class="min-w-0 flex-1 rounded py-1.5 text-xs font-semibold"
              :class="keyStyle(k)"
              @click="typeKey(k)"
            >
              {{ k }}
            </button>
          </div>
          <div class="flex justify-center gap-0.5">
            <button
              v-for="k in row2"
              :key="k"
              type="button"
              class="min-w-0 flex-1 rounded py-1.5 text-xs font-semibold"
              :class="keyStyle(k)"
              @click="typeKey(k)"
            >
              {{ k }}
            </button>
          </div>
          <div class="flex justify-center gap-0.5">
            <button type="button" class="rounded py-1.5 px-2 text-xs font-semibold" :class="keyStyle('')" @click="backspace">
              ←
            </button>
            <button
              type="button"
              class="rounded py-1.5 px-2 text-xs font-semibold"
              :class="keyStyle('')"
              @click="showHelp = !showHelp"
            >
              ?
            </button>
            <button
              v-for="k in row3"
              :key="k"
              type="button"
              class="min-w-0 flex-1 rounded py-1.5 text-xs font-semibold"
              :class="keyStyle(k)"
              @click="typeKey(k)"
            >
              {{ k }}
            </button>
            <button
              type="button"
              class="rounded py-1.5 px-2 text-xs font-semibold"
              :class="keyStyle('')"
              @click="submit"
            >
              ↵
            </button>
          </div>
        </div>
      </div>

      <div
        v-if="gameOver"
        class="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 rounded-2xl bg-black/40 backdrop-blur-sm"
      >
        <p class="text-center text-xl font-bold text-white">
          {{ won ? 'Победа!' : 'Игра окончена' }}
        </p>
        <p v-if="!won" class="text-white">Слово: {{ secretWord }}</p>
        <button
          type="button"
          class="rounded-lg border-2 border-green-500 bg-white px-6 py-3 font-semibold text-gray-800 shadow-lg hover:scale-105"
          @click="restart"
        >
          Новое слово
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { WORDLE_WORDS } from '~/data/wordle-words';

const row1 = 'ЙЦУКЕНГШЩЗХЪ'.split('');
const row2 = 'ФЫВАПРОЛДЖЭ'.split('');
const row3 = 'ЯЧСМИТЬБЮ'.split('');

const N = 5;
const ROWS = 6;

type CellStatus = 'green' | 'yellow' | 'gray' | null;

interface Cell {
  letter: string;
  status: CellStatus | null;
  pop?: boolean;
}

const grid = ref<Cell[][]>([]);
const currentRow = ref(0);
const inputBuffer = ref('');
const secretWord = ref('');
const bannedChars = ref<Set<string>>(new Set());
const correctChars = ref<Set<string>>(new Set());
const correctCharsPos = ref<Set<string>>(new Set());
const guessedWords = ref<Set<string>>(new Set());
const gameOver = ref(false);
const won = ref(false);
const showHelp = ref(false);
const errorMsg = ref('');
const errorRow = ref(-1);

const validWords = new Set(WORDLE_WORDS.map((w) => w.toLowerCase()));

function pickWord(): string {
  const words = WORDLE_WORDS;
  const idx = Math.floor(Math.random() * words.length);
  const w = words[idx] ?? words[0] ?? 'слово';
  return w.toLowerCase();
}

function initGrid(): void {
  grid.value = Array.from({ length: ROWS }, () =>
    Array.from({ length: N }, () => ({ letter: '', status: null }))
  );
}

function initGame(): void {
  secretWord.value = pickWord();
  currentRow.value = 0;
  inputBuffer.value = '';
  bannedChars.value = new Set();
  correctChars.value = new Set();
  correctCharsPos.value = new Set();
  guessedWords.value = new Set();
  gameOver.value = false;
  won.value = false;
  errorMsg.value = '';
  errorRow.value = -1;
  initGrid();
}

function keyStyle(key: string): string {
  if (!key) return 'bg-[#313131] text-[#d8d8d8]';
  const k = key.toLowerCase();
  if (correctCharsPos.value.has(k)) return 'bg-green-500 text-white';
  if (correctChars.value.has(k)) return 'bg-yellow-400 text-[#313131]';
  if (bannedChars.value.has(k)) return 'bg-gray-500 text-white opacity-25';
  return 'bg-[#d8d8d8] text-[#313131] hover:bg-gray-300';
}

function typeKey(key: string): void {
  if (gameOver.value) return;
  if (inputBuffer.value.length < N) {
    inputBuffer.value += key.toLowerCase();
    updateGrid();
  }
}

function backspace(): void {
  if (inputBuffer.value.length > 0) {
    inputBuffer.value = inputBuffer.value.slice(0, -1);
    updateGrid();
  }
}

function updateGrid(): void {
  const row = grid.value[currentRow.value];
  if (!row) return;
  for (let i = 0; i < N; i++) {
    const cell = row[i];
    if (cell) {
      cell.letter = inputBuffer.value[i]?.toUpperCase() ?? '';
      cell.pop = i === inputBuffer.value.length - 1;
    }
  }
}

function submit(): void {
  if (gameOver.value) return;

  const word = inputBuffer.value.toLowerCase();
  errorMsg.value = '';
  errorRow.value = -1;

  if (word.length < N) {
    errorMsg.value = 'В слове менее 5 букв';
    errorRow.value = currentRow.value;
    return;
  }

  const cyrillicRe = /^[а-яё]+$/i;
  if (!cyrillicRe.test(word)) {
    errorMsg.value = 'Используйте только кириллицу';
    errorRow.value = currentRow.value;
    return;
  }

  if (!validWords.has(word)) {
    errorMsg.value = 'Слово не найдено в словаре';
    errorRow.value = currentRow.value;
    return;
  }

  if (guessedWords.value.has(word)) {
    errorMsg.value = 'Вы уже пробовали это слово';
    errorRow.value = currentRow.value;
    return;
  }

  for (let i = 0; i < N; i++) {
    const c = word[i] ?? '';
    if (bannedChars.value.has(c)) {
      errorMsg.value = 'Используйте подсказки: эти буквы уже отмечены';
      errorRow.value = currentRow.value;
      return;
    }
  }

  guessedWords.value.add(word);
  const row = grid.value[currentRow.value];
  if (!row) return;

  for (let i = 0; i < N; i++) {
    const c = word[i] ?? '';
    const cell = row[i];
    if (!cell) continue;
    if (secretWord.value[i] === c) {
      cell.status = 'green';
      correctCharsPos.value.add(c);
      correctChars.value.add(c);
    } else if (secretWord.value.includes(c)) {
      cell.status = 'yellow';
      correctChars.value.add(c);
    } else {
      cell.status = 'gray';
      bannedChars.value.add(c);
    }
  }

  if (word === secretWord.value) {
    won.value = true;
    gameOver.value = true;
    return;
  }

  currentRow.value++;
  inputBuffer.value = '';
  updateGrid();

  if (currentRow.value >= ROWS) {
    gameOver.value = true;
  }
}

function restart(): void {
  initGame();
}

function handleKeydown(e: KeyboardEvent): void {
  const key = e.key;
  if (gameOver.value && key !== 'Enter') return;
  if (showHelp.value && key === 'Escape') {
    showHelp.value = false;
    return;
  }

  if (key === 'Enter') {
    e.preventDefault();
    submit();
    return;
  }
  if (key === 'Backspace') {
    e.preventDefault();
    backspace();
    return;
  }
  const keyUpper = key.toUpperCase();
  if (keyUpper.length === 1 && 'ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ'.includes(keyUpper)) {
    e.preventDefault();
    typeKey(keyUpper);
  }
}

onMounted(() => {
  initGame();
  if (import.meta.client) {
    window.addEventListener('keydown', handleKeydown);
  }
});

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('keydown', handleKeydown);
  }
});
</script>

<style scoped>
@keyframes pop {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  75% { transform: translateX(4px); }
}
.animate-pop {
  animation: pop 0.2s ease;
}
.animate-shake {
  animation: shake 0.3s ease;
}
</style>
