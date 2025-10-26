import { counterStore } from './counterStore'

export function setupCounter(element: HTMLButtonElement) {
  const updateDisplay = () => {
    const currentCount = counterStore.getState().count
    element.innerHTML = `count is ${currentCount}`
  }
  
  // Subscribe to store changes
  const unsubscribe = counterStore.subscribe(() => {
    updateDisplay()
  })
  
  element.addEventListener('click', () => {
    counterStore.getState().increment()
  })
  
  // Initial display
  updateDisplay()
  
  // Return cleanup function
  return () => {
    unsubscribe()
  }
}
