import { atom } from "recoil";
import { Theme } from "typings/theme";

export const themeAtom = atom<Theme>({
    key: "themeAtom",
    default: "light"
});
