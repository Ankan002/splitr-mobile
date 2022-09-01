import { StyleSheet } from "react-native";
import { Theme } from "typings/theme";
import { colors } from "constants/Colors";

const styles= (theme: Theme) => {
    return StyleSheet.create({
        HeaderContainer: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 15
        },
        HeadingText: {
            fontFamily: "Manrope_500Medium",
            color: theme === "dark" ? colors.primaryLight : colors.primaryDark,
            flexShrink: 1,
            fontSize: 20,
            letterSpacing: 1
        },
        CloseButton: {
            width: 40,
            height: 40,
            borderRadius: 15,
            borderWidth: 2,
            borderColor: theme === "dark" ? colors.primaryLight: colors.primaryDark,
            backgroundColor: theme === "dark"? colors.primaryOrange : colors.primaryYellow,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: 3
        }
    });
};

export const lightStyles = styles("light");
export const darkStyles = styles("dark");
