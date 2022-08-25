import { DefaultTheme } from "@react-navigation/native";
import { colors } from "constants/Colors";

export const LightNavigatorTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        card: colors.secondaryLight,
        border: colors.primaryDark 
    }
};
