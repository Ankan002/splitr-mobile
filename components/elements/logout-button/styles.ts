import { StyleSheet } from "react-native";
import { colors } from "constants/Colors";
import { Theme } from "typings/theme";

const styles = (theme: Theme) => {
    return StyleSheet.create({
        Button: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent:"center",
            backgroundColor: "transparent",
            paddingHorizontal: 4,
            paddingVertical: 2,
        },
        ButtonText: {
            fontFamily: "Manrope_400Regular",
            fontSize: 17,
            color: colors.primaryRed,
            letterSpacing: 1
        }
    });
};

export const lightStyles = styles("light");
export const darkStyles = styles("dark");
