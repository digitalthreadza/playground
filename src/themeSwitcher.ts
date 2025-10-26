import { themeStore } from './themeStore'

export function setupThemeSwitcher(element: HTMLButtonElement) {
  const updateTheme = () => {
    const currentTheme = themeStore.getState().theme
    // Apply theme to document root for CSS variables
    document.documentElement.setAttribute('data-theme', currentTheme)
    // Update button appearance
    element.textContent = currentTheme === 'light' ? '🌙' : '☀️'
    element.title = `Switch to ${currentTheme === 'light' ? 'dark' : 'light'} theme`
  }
  
  // Subscribe to theme changes
  const unsubscribe = themeStore.subscribe(() => {
    updateTheme()
  })
  
  element.addEventListener('click', () => {
    themeStore.getState().toggleTheme()
  })
  
  // Apply initial theme immediately (from localStorage)
  updateTheme()
  
  // Return cleanup function
  return () => {
    unsubscribe()
  }
}
