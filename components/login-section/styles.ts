import { StyleSheet } from "react-native";
import { Theme } from "typings/theme";

const styles = (theme: Theme) => {
    return StyleSheet.create({
        LoginButtonContainer: {
            flex: 1,
            width: "100%",
            padding: 15,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
        }
    });
};

export const darkStyles = styles("dark");
export const lightStyles = styles("light");
