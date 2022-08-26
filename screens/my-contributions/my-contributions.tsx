import { View, Text } from "react-native";
import React from "react";
import { useRecoilValue } from "recoil";
import { Theme } from "typings/theme";
import { lightStyles, darkStyles } from "./styles";
import { themeAtom } from "atoms";
import { MainScreenHeader } from "components/elements";

const MyContributions = () => {

  const currentTheme = useRecoilValue<Theme>(themeAtom);  

  return (
    <View style={currentTheme === "dark" ? darkStyles.Container : lightStyles.Container}>
      <MainScreenHeader title="My Contributions" />
    </View>
  );
};

export default MyContributions;
