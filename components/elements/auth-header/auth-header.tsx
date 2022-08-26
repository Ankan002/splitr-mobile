import { View, Text } from "react-native";
import React from "react";
import { useRecoilValue } from "recoil";
import { Theme } from "typings/theme";
import { themeAtom } from "atoms";
import { lightStyles, darkStyles } from "./styles";
import { Manrope_600SemiBold, useFonts } from "@expo-google-fonts/manrope";

interface Props {
  title: string;
}

const AuthHeader = (props: Props) => {

  const { title } = props;

  const currentTheme = useRecoilValue<Theme>(themeAtom);

  const [fontsLoaded] = useFonts({
    Manrope_600SemiBold,
  });

  return (
    <View style={currentTheme === "dark" ? darkStyles.HeaderContainer : lightStyles.HeaderContainer}>
      {
        fontsLoaded && (
          <Text style={currentTheme === "dark" ? darkStyles.HeaderText : lightStyles.HeaderText}>{title}</Text>
        )
      }
    </View>
  );
};

export default AuthHeader;
