import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import { lightStyles, darkStyles } from "./styles";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { themeAtom, isAuthenticatedAtom, loggedInUserAtom, initialLoadingAtom } from "atoms";
import { Theme } from "typings/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LogoutButton, MainScreenHeader, SettingsOptions, ToggleSwitch } from "components/elements";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import Constants from "expo-constants";
import { LoggedInUser } from "typings/user";
import { showToast } from "helpers/toast";
import { Placeholder, PlaceholderLine, Fade } from "rn-placeholder";

const Settings = () => {

  const [currentTheme, setCurrentTheme] = useRecoilState<Theme>(themeAtom);
  const setAuthenticated = useSetRecoilState<boolean>(isAuthenticatedAtom);
  const setLoggedInUser = useSetRecoilState<LoggedInUser>(loggedInUserAtom);
  const initialLoading = useRecoilValue<boolean>(initialLoadingAtom);

  const [isUpdateUsernameModalActive, setIsUpdateUsernameModalActive] = useState<boolean>(false);

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
    if(initialLoading) {
      showToast({
        type: "error",
        heading: "Syncing...",
        body: "We are syncing your data... hold on!!!"
      });

      return;
    }
    await AsyncStorage.removeItem("authToken");
    await GoogleSignin.signOut();
    setLoggedInUser({});
    setAuthenticated(false);
  }

  const onUpdateUsernameOptionClick = () => {
    console.log("Update username option clicked");
  };

  return (
    <View style={currentTheme === "dark" ? darkStyles.Container : lightStyles.Container}>
      <MainScreenHeader title="Settings" />

      <View style={currentTheme === "dark"? darkStyles.BodyContainer : lightStyles.BodyContainer}>

        <ScrollView>

          <ToggleSwitch 
            title="Dark Theme" 
            value={currentTheme === "dark"} 
            onChange={changeTheme} 
          />

          {
            initialLoading ? (
              <Placeholder
                Animation={Fade}
                style={currentTheme === "dark" ? darkStyles.LoadingPlaceholder : lightStyles.LoadingPlaceholder}
              >
                {
                  [...Array(2)].map((item, index) => (
                    <PlaceholderLine height={20} width={100} style={currentTheme==="dark" ? darkStyles.LoadingPlaceholderLine : lightStyles.LoadingPlaceholder} key={index} />
                  ))
                }
              </Placeholder>
            ) : (
              <>
                <SettingsOptions title="Update Username" onPress={onUpdateUsernameOptionClick} />
              </>
            )
          }
          

        </ScrollView>
        
      </View>
      
      <View style={currentTheme === "dark" ? darkStyles.LogoutContainer : lightStyles.LogoutContainer}>
        <LogoutButton title="Logout" onPress={onLogoutClick} />
      </View>
      
    </View>
  );
};

export default Settings;
