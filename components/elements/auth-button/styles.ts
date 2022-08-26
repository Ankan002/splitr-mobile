import { StyleSheet } from "react-native";
import { Theme } from "typings/theme";
import { colors } from "constants/Colors";

const styles = (theme: Theme) => {
    return StyleSheet.create({
        Button: {
            width: "75%",
            flexDirection: "row",
            paddingHorizontal: 15,
            paddingVertical: 10,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 2,
            borderColor: theme === "dark" ? colors.primaryLight : colors.primaryDark,
            borderRadius: 15,
            backgroundColor: theme === "dark" ? colors.primaryOrange : colors.primaryYellow,
        },
        Text: {
            fontFamily: "Manrope_500Medium",
            fontSize: 20,
            color: theme === "dark" ? colors.primaryLight : colors.primaryDark,
            letterSpacing: 1
        }
    });
};

export const darkStyles = styles("dark");
export const lightStyles = styles("light");