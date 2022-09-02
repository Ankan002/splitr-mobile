import { StyleSheet } from "react-native";
import { Theme } from "typings/theme";
import { colors } from "constants/Colors";

const styles = (theme: Theme) => {
    return StyleSheet.create({
        TextInputContainer: {
            width: "100%",
            marginTop: 10,
        },
        TitleText: {
            color: theme === "dark" ? colors.primaryLight : colors.primaryDark,
            fontSize: 16,
            fontFamily: "Manrope_400Regular",
            letterSpacing: 1
        },
        TextInput: {
            paddingHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 2,
            borderColor: theme === "dark" ? colors.primaryLight : colors.primaryDark,
            backgroundColor: theme === "dark" ? colors.secondaryDark : colors.secondaryLight,
            color: theme === "dark" ? colors.primaryLight : colors.primaryDark,
            marginTop: 5,
            fontFamily: "Manrope_400Regular",
            fontSize: 18,
            paddingVertical: 10,
            borderRadius: 10
        }
    });
};

export const lightStyles = styles("light");
export const darkStyles = styles("dark");