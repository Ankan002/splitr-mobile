import { View } from "react-native";
import React from "react";
import { lightStyles, darkStyles } from "./styles";
import { useRecoilValue } from "recoil";
import { themeAtom } from "atoms";
import { Theme } from "typings/theme";
import { FloatingCreateButton, MainScreenHeader } from "components/elements";

const Groups = () => {

  const currentTheme = useRecoilValue<Theme>(themeAtom);

  const onCreateGroupClick = () => {
    console.log("Create Btn...");
  }

  return (
    <View style={currentTheme === "dark" ? darkStyles.Container : lightStyles.Container}>
      <MainScreenHeader title="Groups" />
      <FloatingCreateButton onPress={onCreateGroupClick} />
    </View>
  );
};

export default Groups;
