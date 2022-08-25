import { View, Text, Button } from "react-native";
import React from "react";
import { lightStyles, darkStyles } from "./styles";
import { useRecoilState } from "recoil";
import { themeAtom } from "atoms";
import { Theme } from "typings/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MainScreenHeader, ToggleSwitch } from "components/elements";

const Settings = () => {

  const [currentTheme, setCurrentTheme] = useRecoilState<Theme>(themeAtom);

  const changeTheme = async () => {
    if(currentTheme === "dark") {
      await AsyncStorage.setItem("theme", "light");
      setCurrentTheme("light");
    }
    else {
      await AsyncStorage.setItem("theme", "dark");
      setCurrentTheme("dark");
    }
  }

  return (
    <View style={currentTheme === "dark" ? darkStyles.Container : lightStyles.Container}>
      <MainScreenHeader title="Settings" />
      <ToggleSwitch 
        title="Dark Theme" 
        value={currentTheme === "dark"} 
        onChange={changeTheme} 
      />
    </View>
  );
};

export default Settings;
