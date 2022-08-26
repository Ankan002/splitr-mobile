import { View, Text, Button } from "react-native";
import React from "react";
import { lightStyles, darkStyles } from "./styles";
import { useRecoilState } from "recoil";
import { themeAtom, isAuthenticatedAtom } from "atoms";
import { Theme } from "typings/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MainScreenHeader, ToggleSwitch } from "components/elements";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import Constants from "expo-constants";

const Settings = () => {

  const [currentTheme, setCurrentTheme] = useRecoilState<Theme>(themeAtom);
  const [isAuthenticated, setAuthenticated] = useRecoilState<boolean>(isAuthenticatedAtom);

  GoogleSignin.configure({
    webClientId: Constants.manifest?.extra?.webClientId
  });

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

  const onLogoutClick = async() => {
    await AsyncStorage.removeItem("authToken");
    await GoogleSignin.signOut();
    setAuthenticated(false);
  }

  return (
    <View style={currentTheme === "dark" ? darkStyles.Container : lightStyles.Container}>
      <MainScreenHeader title="Settings" />
      <ToggleSwitch 
        title="Dark Theme" 
        value={currentTheme === "dark"} 
        onChange={changeTheme} 
      />
      <Button
        title="Logout"
        onPress={onLogoutClick}
      />
    </View>
  );
};

export default Settings;
