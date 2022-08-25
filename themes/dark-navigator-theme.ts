import { DefaultTheme } from "@react-navigation/native";
import { colors } from "constants/Colors";

export const DarkNavigatorTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        card: colors.secondaryDark,
        border: colors.primaryLight 
    }
};
