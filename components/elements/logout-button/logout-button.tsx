import { Text, Pressable, GestureResponderEvent } from "react-native";
import React from "react";
import { Manrope_400Regular, useFonts } from "@expo-google-fonts/manrope";
import { useRecoilValue } from "recoil";
import { themeAtom } from "atoms/theme-atom";
import { lightStyles, darkStyles } from "./styles";
import { Theme } from "typings/theme";

interface Props {
  title: string;
  onPress: (e: GestureResponderEvent) => void;
}

const LogoutButton = (props: Props) => {
  const { title, onPress } = props;

  const currentTheme = useRecoilValue<Theme>(themeAtom);
  const [fontsLoaded] = useFonts({Manrope_400Regular});

  return (
    <Pressable style={currentTheme === "dark" ? darkStyles.Button : lightStyles.Button} onPress={onPress}>
      {
        fontsLoaded && (
            <Text style={currentTheme === "dark" ? darkStyles.ButtonText : lightStyles.ButtonText}>
                {title}
            </Text>
        )
      }
    </Pressable>
  );
};

export default LogoutButton;
