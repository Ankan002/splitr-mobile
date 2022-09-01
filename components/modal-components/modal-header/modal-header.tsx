import { View, Text, GestureResponderEvent, Pressable } from "react-native";
import React from "react";
import { Manrope_500Medium, useFonts } from "@expo-google-fonts/manrope";
import { Theme } from "typings/theme";
import { useRecoilValue } from "recoil";
import { themeAtom } from "atoms";
import { Ionicons } from "@expo/vector-icons";
import { lightStyles, darkStyles } from "./styles";
import { colors } from "constants/Colors";

interface Props {
    title: string;
    onClosePressed: (e: GestureResponderEvent) => void;
}

const ModalHeader = (props: Props) => {

  const { title, onClosePressed } = props;
  const [fontsLoaded] = useFonts({
    Manrope_500Medium
  });

  const currentTheme = useRecoilValue<Theme>(themeAtom);

  return (
    <View style={currentTheme === "dark" ? darkStyles.HeaderContainer : lightStyles.HeaderContainer}>
      {
        fontsLoaded && (
            <Text style={currentTheme === "dark" ? darkStyles.HeadingText : lightStyles.HeadingText}>
                {title}
            </Text>
        )
      }

      <Pressable style={currentTheme === "dark" ? darkStyles.CloseButton : lightStyles.CloseButton} onPress={onClosePressed}>
        <Ionicons name="close" size={25} color={currentTheme === "dark" ? colors.primaryLight : colors.primaryDark} />
      </Pressable>
    </View>
  );
};

export default ModalHeader;
