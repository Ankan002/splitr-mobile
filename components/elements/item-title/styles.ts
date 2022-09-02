import { StyleSheet } from "react-native";
import { Theme } from "typings/theme";
import { colors } from "constants/Colors";

const styles = (theme: Theme) => {
    return StyleSheet.create({
        TitleText: {
            color: theme === "dark" ? colors.primaryLight : colors.primaryDark,
            fontSize: 16,
            fontFamily: "Manrope_400Regular",
            letterSpacing: 1,
            width: "100%",
            marginTop: 20
        },
    });
};

export const darkStyles = styles("dark");
export const lightStyles = styles("light");
