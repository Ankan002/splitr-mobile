import { View } from "react-native";
import React from "react";
import { lightStyles, darkStyles } from "./styles";
import { useRecoilValue } from "recoil";
import { themeAtom } from "atoms";
import { Theme } from "typings/theme";
import { FloatingCreateButton, MainScreenHeader } from "components/elements";
import { useNavigation } from "@react-navigation/native";

const Groups = () => {

  const currentTheme = useRecoilValue<Theme>(themeAtom);
  const navigation = useNavigation();

  const onCreateGroupClick = () => {
    navigation.navigate("CreateGroup");
  }

  return (
    <View style={currentTheme === "dark" ? darkStyles.Container : lightStyles.Container}>
      <MainScreenHeader title="Groups" />
      <FloatingCreateButton onPress={onCreateGroupClick} />
    </View>
  );
};

export default Groups;
