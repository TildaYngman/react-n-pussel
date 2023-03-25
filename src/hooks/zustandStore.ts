import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface Store {
  tiles: number[];
  setTiles: (tiles: number[]) => void;
}

export const useStore = create<Store>()(
  devtools((set) => ({
    tiles: [],
    setTiles: (tiles: number[]) => set({ tiles }),
  }))
);
