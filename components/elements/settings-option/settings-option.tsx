import { View, Text, Pressable, GestureResponderEvent } from "react-native";
import React from "react";
import { useRecoilValue } from "recoil";
import { themeAtom } from "atoms";
import { Manrope_400Regular, useFonts } from "@expo-google-fonts/manrope";
import { lightStyles, darkStyles } from "./styles";
import { Entypo } from "@expo/vector-icons";
import { Theme } from "typings/theme";
import { colors } from "constants/Colors";

interface Props {
  title: string;
  onPress: (e: GestureResponderEvent) => void;
}

const SettingsOption = (props: Props) => {

  const { title, onPress } = props;

  const currentTheme = useRecoilValue<Theme>(themeAtom);

  const [fontsLoaded] = useFonts({Manrope_400Regular});

  return (
    <View style={currentTheme === "dark" ? darkStyles.OptionContainer : lightStyles.OptionContainer}>
      <Pressable style={currentTheme === "dark" ? darkStyles.TextContainer : lightStyles.TextContainer} onPress={onPress}>
        {
          fontsLoaded && (
            <Text style={currentTheme === "dark"? darkStyles.OptionText : lightStyles.OptionText}>
                {title}
            </Text>
          )  
        }
      </Pressable>
      <Pressable onPress={onPress}>
        <Entypo name="chevron-right" size={24} color={currentTheme === "dark" ? colors.primaryLight : colors.primaryDark} />
      </Pressable>
    </View>
  );
};

export default SettingsOption;
