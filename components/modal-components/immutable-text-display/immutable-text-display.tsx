import { View, Text } from "react-native";
import React from "react";
import { Manrope_500Medium, Manrope_400Regular, useFonts } from "@expo-google-fonts/manrope";
import { useRecoilValue } from "recoil";
import { Theme } from "typings/theme";
import { lightStyles, darkStyles } from "./styles";
import { themeAtom } from "atoms";

interface Props {
  title: string;
  displayText: string;
}

const ImmutableTextDisplay = (props: Props) => {

  const { title, displayText } = props;

  const currentTheme = useRecoilValue<Theme>(themeAtom);

  const [fontsLoaded] = useFonts({
    Manrope_500Medium,
    Manrope_400Regular
  });

  return (
    <View style={currentTheme === "dark" ? darkStyles.Conatiner : lightStyles.Conatiner}>
      {
        fontsLoaded && (
          <Text style={currentTheme === "dark" ? darkStyles.TitleText : lightStyles.TitleText}>
            {title}
          </Text>
        )
      }
      
      <View style={currentTheme === "dark" ? darkStyles.DiplayTextContainer : lightStyles.DiplayTextContainer}>
        {
          fontsLoaded && (
            <Text style={currentTheme === "dark" ? darkStyles.DiaplayText : lightStyles.DiaplayText}>
              {displayText}
            </Text>
          )
        }
      </View>
    </View>
  );
};

export default ImmutableTextDisplay;
