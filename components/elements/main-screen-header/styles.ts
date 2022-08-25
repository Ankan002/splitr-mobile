import { StyleSheet } from "react-native";
import { colors } from "constants/Colors";
import { Theme } from "typings/theme";

const styles = (theme: Theme) => {
    return StyleSheet.create({
        TitleContainer: {
            width: "100%",
            paddingHorizontal: 15,
            marginVertical: 15,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
        },
        TitleText: {
            fontSize: 20,
            fontFamily: "Manrope_500Medium",
            color: theme === "dark" ? colors.primaryLight : colors.primaryDark
        }
    });
};

export const darkStyles = styles("dark");
export const lightStyles = styles("light");
