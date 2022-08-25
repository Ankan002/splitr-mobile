import { View, Text } from "react-native";
import React from "react";
import { lightStyles, darkStyles } from "./styles";
import { StatusBar } from "expo-status-bar";
import { useRecoilValue } from "recoil";
import { Theme } from "typings/theme";
import { themeAtom } from "atoms";

const Bill = () => {

  const currentTheme = useRecoilValue<Theme>(themeAtom);

  return (
    <View style={currentTheme === "dark" ? darkStyles.Container : lightStyles.Container}>
      <Text style={currentTheme === "dark" ? darkStyles.Text : lightStyles.Text}>Bill</Text>
    </View>
  );
};

export default Bill;
