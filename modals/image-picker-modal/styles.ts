import { StyleSheet } from "react-native";
import { colors } from "constants/Colors";
import { Theme } from "typings/theme";

const styles = (theme: Theme) => {
    return StyleSheet.create({
        ModalContainer: {
            flex: 1,
            backgroundColor: colors.semiTransparent,
            justifyContent: "flex-end"
        },
        ImagePickerContainer: {
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
        EmptyImageConatiner: {
            width: "100%",
            height: "50%",
            borderWidth: 2,
            borderRadius: 10,
            borderColor: theme === "dark" ? colors.primaryLight : colors.primaryDark,
            backgroundColor: theme === "dark" ? colors.secondaryDark : colors.secondaryLight,
            borderStyle: "dashed",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 25
        },
        Body: {
            paddingHorizontal: 15,
            flex: 1
        },
        EmptyText: {
            fontFamily: "Manrope_400Regular",
            fontSize: 18,
            color: theme === "dark" ? colors.primaryLight : colors.primaryDark,
            marginTop: 15,
            textAlign: "center"
        },
        SelctedImagePrview: {
            width: "100%",
            borderWidth: 2,
            borderRadius: 10,
            borderColor: theme === "dark" ? colors.primaryLight : colors.primaryDark,
            backgroundColor: theme === "dark" ? colors.secondaryDark : colors.secondaryLight,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 25,
            padding: 20,
        },
        ImageContainer: {
            height: 200,
            width: 200,
            borderRadius: 100
        },
        Image: {
            height: "100%",
            width: "100%",
            resizeMode: "cover",
            borderRadius: 100
        },
        InfoText: {
            fontFamily: "Manrope_400Regular",
            fontSize: 16,
            color: theme === "dark" ? colors.primaryLight : colors.primaryDark,
            marginTop: 15,
            textAlign: "center"
        },
        DeleteButtonContainer: {
            marginTop: 10,
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end"
        }
    });
};

export const darkStyles = styles("dark");
export const lightStyles = styles("light");
