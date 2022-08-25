import { View, Text } from "react-native";
import React from "react";
import { lightStyles, darkStyles } from "./styles";
import { useRecoilValue } from "recoil";
import { themeAtom } from "atoms";
import { Theme } from "typings/theme";

const Groups = () => {

  const currentTheme = useRecoilValue<Theme>(themeAtom);

  return (
    <View style={currentTheme === "dark" ? darkStyles.Container : lightStyles.Container}>
      <Text style={currentTheme === "dark" ? darkStyles.Text : lightStyles.Text}>Groups</Text>
    </View>
  );
};

export default Groups;
