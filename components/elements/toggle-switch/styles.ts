import { StyleSheet } from "react-native";
import { Theme } from "typings/theme";
import { colors } from "constants/Colors";

const styles = (theme: Theme) => {
    return StyleSheet.create({
        ToggleSwitchContainer: {
            width: "100%",
            paddingHorizontal: 15,
            marginVertical: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
        },
        Title: {
            fontSize: 17,
            color: theme ==="dark" ? colors.primaryLight : colors.primaryDark,
            fontFamily: "Manrope_400Regular",
        },
        SwicthButton: {
            borderWidth: 2,
            borderColor: colors.primaryDark
        },
        Switch: {
            borderWidth: 2,
            color: theme === "dark" ? colors.secondaryLight : colors.secondaryDark
        }
    });
};

export const lightStyles = styles("light");
export const darkStyles = styles("dark");
