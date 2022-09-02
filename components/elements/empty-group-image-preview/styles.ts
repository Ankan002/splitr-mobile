import { StyleSheet } from "react-native";
import { colors } from "constants/Colors";
import { Theme } from "typings/theme";

const styles = (theme: Theme) => {
    return StyleSheet.create({
        EmptyGroupImageContainer: {
            width: "100%",
            paddingHorizontal: 10,
            paddingVertical: 10,
            backgroundColor: theme === "dark" ? colors.secondaryDark : colors.secondaryLight,
            borderWidth: 2,
            borderRadius: 10,
            borderStyle: "dashed",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
            borderColor: theme === "dark" ? colors.primaryLight : colors.primaryDark
        },
        EmptyText: {
            marginTop: 10,
            fontFamily: "Manrope_400Regular",
            color: theme === "dark" ? colors.primaryLight : colors.primaryDark,
            fontSize: 16,
            textAlign: "center"
        }
    });
};

export const darkStyles = styles("dark");
export const lightStyles = styles("light");
