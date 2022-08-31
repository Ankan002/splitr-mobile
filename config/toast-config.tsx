import {
  SuccessToast,
  ErrorToast,
  ToastProps,
} from "react-native-toast-message";
import { useRecoilValue } from "recoil";
import { Theme } from "typings/theme";
import { themeAtom } from "atoms";
import {
  useFonts,
  Manrope_400Regular,
  Manrope_500Medium,
} from "@expo-google-fonts/manrope";
import { colors } from "constants/Colors";

export const toastConfig = {
  success: (props: ToastProps) => {
    const [fontsLoaded] = useFonts({
      Manrope_400Regular,
      Manrope_500Medium,
    });
    const currentTheme = useRecoilValue<Theme>(themeAtom);

    return (
      <>
        {fontsLoaded && (
          <ErrorToast
            {...props}
            style={{
              backgroundColor:
                currentTheme === "dark"
                  ? colors.secondaryDark
                  : colors.secondaryLight,
              borderColor: colors.primaryGreen,
              borderWidth: 1,
              borderRadius: 10,
            }}
            contentContainerStyle={{
              paddingHorizontal: 15,
            }}
            text1Style={{
              fontSize: 16,
              fontWeight: "500",
              fontFamily: "Manrope_500Medium",
              color: colors.primaryGreen,
            }}
            text2Style={{
              fontSize: 14,
              fontWeight: "500",
              fontFamily: "Manrope_400Regular",
              color:
                currentTheme === "dark"
                  ? colors.primaryLight
                  : colors.primaryDark,
            }}
          />
        )}
      </>
    );
  },
  error: (props: ToastProps) => {
    const [fontsLoaded] = useFonts({
      Manrope_400Regular,
      Manrope_500Medium,
    });
    const currentTheme = useRecoilValue<Theme>(themeAtom);

    return (
      <>
        {fontsLoaded && (
          <SuccessToast
            {...props}
            style={{
              backgroundColor:
                currentTheme === "dark"
                  ? colors.secondaryDark
                  : colors.secondaryLight,
              borderColor: colors.primaryRed,
              borderWidth: 1,
              borderRadius: 10,
            }}
            contentContainerStyle={{
              paddingHorizontal: 15,
            }}
            text1Style={{
              fontSize: 16,
              fontWeight: "500",
              fontFamily: "Manrope_500Medium",
              color: colors.primaryRed,
            }}
            text2Style={{
              fontSize: 14,
              fontWeight: "500",
              fontFamily: "Manrope_400Regular",
              color:
                currentTheme === "dark"
                  ? colors.primaryLight
                  : colors.primaryDark,
            }}
          />
        )}
      </>
    );
  },
};
