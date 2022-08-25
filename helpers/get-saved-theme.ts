import AsyncStorage from "@react-native-async-storage/async-storage";
import { Appearance } from "react-native";
import { Theme } from "typings/theme";

export const getSavedTheme = async (): Promise<Theme> => {
    const savedTheme = await AsyncStorage.getItem("theme");

    if(!savedTheme) {
        const colorScheme = Appearance.getColorScheme();

        if(colorScheme !== "dark" && colorScheme !== "light") {
            await AsyncStorage.setItem("theme", "light");
            return "light";
        }

        await AsyncStorage.setItem("theme", colorScheme);
        return colorScheme;
    }

    return savedTheme as Theme;
}