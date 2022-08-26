import { StyleSheet } from "react-native";
import { Theme } from "typings/theme";
import { colors } from "constants/Colors";

const styles = (theme: Theme) => {
    return StyleSheet.create({
        LoginBodyContainer: {
            paddingHorizontal: 10,
            alignItems: "center",
            justifyContent: "center",
            height: "60%"
        },
        ImageContainer: {
            marginVertical: 10,
            width: "90%",
            height: "60%"
        },
        Image: {
            height: "100%",
            width: "100%",
            resizeMode: "contain"
        },
        MainTagline: {
            color: colors.primaryOrange,
            fontSize: 19,
            fontFamily: "Manrope_500Medium",
            textAlign: "center",
            marginBottom: 3,
            fontWeight: "700",
            marginTop: 35,
            letterSpacing: 1
        },
        SubTagline: {
            color: colors.primaryOrange,
            fontSize: 17,
            fontFamily: "Manrope_500Medium",
            textAlign: "center",
            marginVertical: 3,
            fontStyle: "italic",
            fontWeight: "200",
            letterSpacing: 1
        }
    });
};

export const lightStyles = styles("light");
export const darkStyles = styles("dark");
