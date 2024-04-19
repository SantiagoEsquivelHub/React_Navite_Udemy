import { create } from "zustand";

export interface CounterState {
    currentValue: number;
    incrementBy: (value: number) => void;
}

export const useCounterStore = create<CounterState>()((set, get) => ({
    currentValue: 10,
    incrementBy: (value: number) => set(() => ({ currentValue: get().currentValue + value })),
}))
