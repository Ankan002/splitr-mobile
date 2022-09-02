import { View, Text, Pressable, GestureResponderEvent } from "react-native";
import React from "react";
import { useRecoilValue } from "recoil";
import { Theme } from "typings/theme";
import { lightStyles, darkStyles } from "./styles";
import { themeAtom } from "atoms";
import { Feather } from "@expo/vector-icons";
import { Manrope_400Regular, useFonts } from "@expo-google-fonts/manrope";
import { colors } from "constants/Colors";

interface Props {
    onPress: (e: GestureResponderEvent) => void;
}

const EmptyGroupImagePreview = (props: Props) => {
  const { onPress } = props;   

  const [fontsLoaded] = useFonts({Manrope_400Regular});
  const currentTheme = useRecoilValue<Theme>(themeAtom);

  return (
    <Pressable style={currentTheme === "dark" ? darkStyles.EmptyGroupImageContainer : lightStyles.EmptyGroupImageContainer} onPress={onPress}>
      <Feather name="upload-cloud" size={40} color={currentTheme === "dark" ? colors.primaryLight : colors.primaryDark} />
      {
        fontsLoaded && (
            <Text style={currentTheme === "dark" ? darkStyles.EmptyText : lightStyles.EmptyText}>
                No images selected... Click here to select one.
            </Text>
        )
      }
    </Pressable>
  );
};

export default EmptyGroupImagePreview;
