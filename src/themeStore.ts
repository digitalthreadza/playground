import { createStore } from 'zustand/vanilla'

export type Theme = 'light' | 'dark'

const THEME_STORAGE_KEY = 'app-theme'

// Helper functions for localStorage
const getStoredTheme = (): Theme => {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    return stored === 'light' || stored === 'dark' ? stored : 'dark'
  } catch {
    return 'dark' // Fallback to dark theme if localStorage fails
  }
}

const saveTheme = (theme: Theme): void => {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    // Silently fail if localStorage is not available
  }
}

export interface ThemeState {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

export const themeStore = createStore<ThemeState>((set) => ({
  theme: getStoredTheme(), // Initialize from localStorage
  toggleTheme: () => set((state) => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light'
    saveTheme(newTheme) // Save to localStorage
    return { theme: newTheme }
  }),
  setTheme: (theme: Theme) => {
    saveTheme(theme) // Save to localStorage
    set({ theme })
  },
}))
