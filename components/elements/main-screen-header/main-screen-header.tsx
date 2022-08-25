import { View, Text } from "react-native";
import React from "react";
import { lightStyles, darkStyles } from "./styles";
import { useRecoilValue } from "recoil";
import { themeAtom } from "atoms";
import { useFonts, Manrope_500Medium } from "@expo-google-fonts/manrope";
import { Theme } from "typings/theme";

interface Props {
  title: string;
}

const MainScreenHeader = (props: Props) => {

  const { title } = props;

  const [fontsLoaded] = useFonts({
    Manrope_500Medium,
  });

  const currentTheme = useRecoilValue<Theme>(themeAtom);

  return (
    <View
      style={
        currentTheme === "dark"
          ? darkStyles.TitleContainer
          : lightStyles.TitleContainer
      }
    >
      {fontsLoaded && (
        <Text
          style={
            currentTheme === "dark"
              ? darkStyles.TitleText
              : lightStyles.TitleText
          }
        >
          { title }
        </Text>
      )}
    </View>
  );
};

export default MainScreenHeader;
