const STORAGE_KEY = 'color-mode';

function getStoredPreference(): 'light' | 'dark' | null {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return null;
}

function getSystemPreference(): 'light' | 'dark' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyMode(mode: 'light' | 'dark') {
  const html = document.documentElement;
  html.classList.remove('light', 'dark');
  html.classList.add(mode);
}

export default defineNuxtPlugin(() => {
  const stored = getStoredPreference();
  const resolved = stored ?? getSystemPreference();
  applyMode(resolved);
});
