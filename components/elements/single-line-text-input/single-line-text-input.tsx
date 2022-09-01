import { View, Text, TextInput } from "react-native";
import React from "react";
import { useRecoilValue } from "recoil";
import { Theme } from "typings/theme";
import { themeAtom } from "atoms/theme-atom";
import { lightStyles, darkStyles } from "./styles";
import { Manrope_400Regular, useFonts } from "@expo-google-fonts/manrope";
import { colors } from "constants/Colors";

interface Props {
  title: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}

const SingleLineTextInput = (props: Props) => {
  const { title, value, onChangeText, placeholder } = props;

  const currentTheme = useRecoilValue<Theme>(themeAtom);

  const [fontsLoaded] = useFonts({
    Manrope_400Regular
  });

  return (
    <View style={currentTheme === "dark" ? darkStyles.TextInputContainer : lightStyles.TextInputContainer}>
      {
        fontsLoaded && (
          <Text style={currentTheme === "dark" ? darkStyles.TitleText : lightStyles.TitleText}>
            {title}
          </Text>
        )
      }

      {
        fontsLoaded && (
          <TextInput 
            value={value}
            onChangeText={onChangeText}
            style={currentTheme === "dark" ? darkStyles.TextInput : lightStyles.TextInput}
            placeholder={placeholder}
            placeholderTextColor={colors.lightGrey}
          />
        )
      }
    </View>
  );
};

export default SingleLineTextInput;
