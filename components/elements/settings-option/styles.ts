import { StyleSheet } from "react-native";
import { Theme } from "typings/theme";
import { colors } from "constants/Colors";

const styles = (theme: Theme) => {
    return StyleSheet.create({
        OptionContainer: {
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 15,
            justifyContent: "space-between",
            marginVertical: 10,
        },
        TextContainer: {
            flexShrink: 1
        },
        OptionText: {
            fontSize: 17,
            color: theme ==="dark" ? colors.primaryLight : colors.primaryDark,
            fontFamily: "Manrope_400Regular",
        }
    });
};

export const lightStyles = styles("light");
export const darkStyles = styles("dark");
