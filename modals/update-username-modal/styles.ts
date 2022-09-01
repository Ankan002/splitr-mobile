import { StyleSheet } from "react-native";
import { Theme } from "typings/theme";
import { colors } from "constants/Colors";

const styles = (theme: Theme) => {
    return StyleSheet.create({
        ModalContainer: {
            backgroundColor: colors.semiTransparent,
            flex: 1,
            justifyContent: "flex-end"
        },
       UpdateUsernameContainer: {
            height: "90%",
            width: "100%",
            backgroundColor: theme === "dark" ? colors.primaryDark : colors.primaryLight,
            borderTopWidth: 2,
            borderLeftWidth: 2,
            borderRightWidth: 2,
            borderTopColor: theme === "dark" ? colors.primaryLight : colors.primaryDark,
            borderRightColor: theme === "dark" ? colors.primaryLight : colors.primaryDark,
            borderLeftColor: theme === "dark" ? colors.primaryLight : colors.primaryDark,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingVertical: 10
        },
        BodyContainer: {
            flex: 1,
        },
        ActionButtonContainer: {
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 10,
            paddingHorizontal: 15
        }
    });
};

export const lightStyles = styles("light");
export const darkStyles = styles("dark");