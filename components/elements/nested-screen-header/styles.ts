import { StyleSheet } from "react-native";
import { Theme } from "typings/theme";
import { colors } from "constants/Colors";

const styles = (theme: Theme) => {
    return StyleSheet.create({
        HeaderContainer: {
            width: "100%",
            paddingHorizontal: 15,
            marginVertical: 15,
            flexDirection: "row",
            alignItems: "center"
        },
        BackButton: {
            width: 40,
            height: 40,
            borderRadius: 15,
            borderWidth: 2,
            borderColor: theme === "dark" ? colors.primaryLight : colors.primaryDark,
            backgroundColor: theme === "dark" ? colors.primaryOrange : colors.primaryYellow,
            padding: 2,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
        },
        TitleContainer: {
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 10
        },
        TitleText: {
            fontFamily: "Manrope_500Medium",
            fontSize: 20,
            color: theme === "dark" ? colors.primaryLight : colors.primaryDark
        }
    });
};

export const lightStyles = styles("light");
export const darkStyles = styles("dark");
