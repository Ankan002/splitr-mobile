import { StyleSheet } from "react-native";
import { Theme } from "typings/theme";
import { colors } from "constants/Colors";

const styles = (theme: Theme) => {
    return StyleSheet.create({
        Conatiner: {
            paddingHorizontal: 15,
            marginVertical: 15
        },
        TitleText: {
            fontFamily: "Manrope_500Medium",
            fontSize: 14,
            color: theme === "dark" ? colors.primaryLight : colors.primaryDark,
            marginBottom: 3,
            letterSpacing: 1
        },
        DiplayTextContainer: {
            width: "100%",
            paddingHorizontal: 10,
            paddingVertical: 5,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 2,
            borderRadius: 10,
            borderColor: theme === "dark" ? colors.primaryLight : colors.primaryDark,
            backgroundColor: theme === "dark" ? colors.secondaryDark : colors.secondaryLight,
            marginTop: 3
        },
        DiaplayText: {
            fontFamily: "Manrope_400Regular",
            color: theme === "dark" ? colors.primaryLight : colors.primaryDark,
            fontSize: 18
        }
    });
};

export const lightStyles = styles("light");
export const darkStyles = styles("dark");
