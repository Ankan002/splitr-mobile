import { StyleSheet } from "react-native";
import { colors } from "constants/Colors";
import { Theme } from "typings/theme";

const styles = (theme: Theme) => {
    return StyleSheet.create({
        EmptyGroupImageContainer: {
            width: "100%",
            paddingHorizontal: 5,
            paddingVertical: 10,
            backgroundColor: theme === "dark" ? colors.secondaryDark : colors.secondaryLight,
            borderWidth: 2,
            borderRadius: 5,
            borderStyle: "dashed",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10
        },
        EmptyText: {
            marginTop: 10,
            fontFamily: "Manrope_400Regular",
            color: theme === "dark" ? colors.primaryLight : colors.primaryDark,
            fontSize: 18
        }
    });
};

export const darkStyles = styles("dark");
export const lightStyles = styles("light");
