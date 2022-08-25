import { View } from "react-native";
import React from "react";
import { lightStyles, darkStyles } from "./styles";
import { useRecoilValue } from "recoil";
import { themeAtom } from "atoms";
import { Theme } from "typings/theme";
import { MainScreenHeader } from "components/elements";

const Groups = () => {

  const currentTheme = useRecoilValue<Theme>(themeAtom);

  return (
    <View style={currentTheme === "dark" ? darkStyles.Container : lightStyles.Container}>
      <MainScreenHeader title="Groups" />
    </View>
  );
};

export default Groups;
