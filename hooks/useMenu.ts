import { create } from "zustand";

type State = {
    isMenuOpen : boolean;
};

type Action = {
    setIsMenuOpen : (isMenuOpen : State["isMenuOpen"]) => void;
};

export const useIsMenuOpen = create<State & Action>((set) => ({
    isMenuOpen : false,
    setIsMenuOpen : (newValue)=>set(() => ({ isMenuOpen : newValue })),
}))