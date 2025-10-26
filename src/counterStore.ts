import { createStore } from 'zustand/vanilla'

export interface CounterState {
  count: number
  increment: () => void
  setCount: (count: number) => void
}

export const counterStore = createStore<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  setCount: (count: number) => set({ count }),
}))