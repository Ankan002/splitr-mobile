
import { StyleSheet } from "react-native";
import { colors } from "constants/Colors";
import { Theme } from "typings/theme";

const styles = (theme: Theme) => {
    return StyleSheet.create({
        CreateButton: {
            position: "absolute",
            width: 50,
            height: 50,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme === "dark" ? colors.primaryOrange : colors.primaryYellow,
            borderRadius: 15,
            right: "3%",
            bottom: "3%",
            borderWidth: 2,
            borderColor: theme === "dark" ? colors.primaryLight : colors.primaryDark,
        }
    });
};

export const lightStyles = styles("light");
export const darkStyles = styles("dark");