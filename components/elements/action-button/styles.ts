import { StyleSheet } from "react-native";
import { Theme } from "typings/theme";
import { colors } from "constants/Colors";

const styles = (theme: Theme) => {
    return StyleSheet.create({
        ActionButton: {
            width: "100%",
            height: 50,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme === "dark" ? colors.primaryOrange : colors.primaryYellow,
            borderWidth: 2,
            borderRadius: 15,
            borderColor: theme === "dark" ? colors.primaryLight : colors.primaryDark
        },
        ActionButtonText: {
            fontFamily: "Manrope_500Medium",
            color: theme === "dark" ? colors.primaryLight : colors.primaryDark,
            fontSize: 20
        }
    });
};

export const lightStyles = styles("light");
export const darkStyles = styles("dark");