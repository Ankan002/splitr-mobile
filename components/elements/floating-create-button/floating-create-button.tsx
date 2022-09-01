import { Pressable, GestureResponderEvent } from "react-native";
import React from "react";
import { Theme } from "typings/theme";
import { themeAtom } from "atoms";
import { useRecoilValue } from "recoil";
import { lightStyles, darkStyles } from "./styles";
import { Entypo } from "@expo/vector-icons";
import { colors } from "constants/Colors";

interface Props {
    onPress: (e: GestureResponderEvent) => void;
}

const FloatingCreateButton = (props: Props) => {

  const { onPress } = props;

  const currentTheme = useRecoilValue<Theme>(themeAtom);

  return (
    <Pressable style={currentTheme === "dark" ? darkStyles.CreateButton : lightStyles.CreateButton} onPress={onPress}>
      <Entypo name="plus" size={30} color={currentTheme === "dark" ? colors.primaryLight : colors.primaryDark} />
    </Pressable>
  );
};

export default FloatingCreateButton;
