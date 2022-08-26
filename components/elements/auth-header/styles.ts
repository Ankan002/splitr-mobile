import { StyleSheet } from "react-native";
import { Theme } from "typings/theme";
import { colors } from "constants/Colors";

const styles = (theme: Theme) => {
    return StyleSheet.create({
        HeaderContainer: {
            width: "100%",
            marginVertical: 15,
            paddingHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
        },
        HeaderText: {
            fontFamily: "Manrope_600SemiBold",
            fontSize: 19,
            color: colors.primaryRed,
            fontWeight: "bold",
            letterSpacing: 10
        }
    });
};

export const darkStyles = styles("dark");
export const lightStyles = styles("light");
