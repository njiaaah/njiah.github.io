const STORAGE_KEY = 'color-mode';

function getStoredPreference(): 'light' | 'dark' | null {
  if (import.meta.server) return null;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return null;
}

function getSystemPreference(): 'light' | 'dark' {
  if (import.meta.server) return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyMode(mode: 'light' | 'dark') {
  if (import.meta.server) return;
  const html = document.documentElement;
  html.classList.remove('light', 'dark');
  html.classList.add(mode);
}

export function useColorMode() {
  const mode = useState<'light' | 'dark'>('color-mode', () => 'light');

  function init() {
    if (import.meta.server) return;
    const stored = getStoredPreference();
    const resolved = stored ?? getSystemPreference();
    mode.value = resolved;
    applyMode(resolved);
  }

  function toggle() {
    const next = mode.value === 'dark' ? 'light' : 'dark';
    mode.value = next;
    applyMode(next);
    localStorage.setItem(STORAGE_KEY, next);
  }

  return { mode, toggle, init };
}
