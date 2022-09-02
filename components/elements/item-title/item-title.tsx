import { View, Text } from "react-native";
import React from "react";
import { useRecoilValue } from "recoil";
import { Theme } from "typings/theme";
import { themeAtom } from "atoms";
import { Manrope_400Regular, useFonts } from "@expo-google-fonts/manrope";
import { lightStyles, darkStyles } from "./styles";

interface Props {
    title: string;
}

const ItemTitle = (props: Props) => {

  const { title } = props;

  const currentTheme = useRecoilValue<Theme>(themeAtom);
  const [fontsLoaded] = useFonts({
    Manrope_400Regular
  });

  return (
    <>
        {
            fontsLoaded && (
                <Text style={currentTheme === "dark" ? darkStyles.TitleText : lightStyles.TitleText}>
                    {title}
                </Text>
            )
        }
    </>
  );
};

export default ItemTitle;
