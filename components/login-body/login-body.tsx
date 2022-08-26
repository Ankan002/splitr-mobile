import { View, Text, Image } from "react-native";
import React from "react";
import { useRecoilValue } from "recoil";
import { Theme } from "typings/theme";
import { themeAtom } from "atoms";
import { lightStyles, darkStyles } from "./styles";
import { Manrope_500Medium, useFonts } from "@expo-google-fonts/manrope";

const LoginCoverImage = require("../../assets/images/bill-split.png");

const LoginBody = () => {

  const currentTheme = useRecoilValue<Theme>(themeAtom);
  
  const [fontsLoaded] = useFonts({
    Manrope_500Medium
  });

  return (
    <View style={currentTheme === "dark" ? darkStyles.LoginBodyContainer : lightStyles.LoginBodyContainer}>

      <View style={currentTheme === "dark" ? darkStyles.ImageContainer : lightStyles.ImageContainer}>
        <Image source={LoginCoverImage} style={currentTheme === "dark" ? darkStyles.Image : lightStyles.Image} />
      </View>

      {
        fontsLoaded && (
          <>
            <Text style={currentTheme === "dark" ? darkStyles.MainTagline : lightStyles.MainTagline}>
              Bill spliting made easy
            </Text>

            <Text style={currentTheme === "dark" ? darkStyles.SubTagline : lightStyles.SubTagline}>
              No more fighting... only sharing
            </Text>
          </>
        )
      }
    </View>
  );
};

export default LoginBody;
