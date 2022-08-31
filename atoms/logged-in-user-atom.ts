import { atom } from "recoil";
import { LoggedInUser } from "typings/user";

export const loggedInUserAtom = atom<LoggedInUser>({
    key: "loggedInUserAtom",
    default: {}
});
