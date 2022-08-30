import { StyleSheet, StatusBar, Platform } from "react-native";
import { Theme } from "typings/theme";
import { colors } from "constants/Colors";

const styles = (theme: Theme) => {
    return StyleSheet.create({
        Container: {
            flex: 1,
            backgroundColor: theme === "dark" ? colors.primaryDark : colors.primaryLight,
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
        },
        Text: {
            color: theme === "dark" ? colors.primaryLight : colors.primaryDark
        },
        BodyContainer: {
            flex: 1,
        },
        LogoutContainer: {
            paddingHorizontal: 15,
            paddingVertical: 10,
            justifyContent: "center",
            alignItems: "center"
        }
    });
};

export const lightStyles = styles("light");
export const darkStyles = styles("dark");