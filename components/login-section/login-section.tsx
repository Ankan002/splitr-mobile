import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Theme } from "typings/theme";
import { themeAtom, isAuthenticatedAtom } from "atoms";
import { lightStyles, darkStyles } from "./styles";
import { AuthButton } from "components/elements";
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";
import Constants from "expo-constants";
import { login } from "helpers";
import { showToast } from "helpers/toast";

const LoginSection = () => {

  const currentTheme = useRecoilValue<Theme>(themeAtom);
  const [isLoggingIn, setIsLogginIn] = useState<boolean>(false);
  const setIsAuthenticated = useSetRecoilState<boolean>(isAuthenticatedAtom);

  GoogleSignin.configure({
    webClientId: Constants.manifest?.extra?.webClientId
  });

  const onLoginClick = async() => {
    if(isLoggingIn) {
      showToast({
        type: "error",
        heading: "Logging In...",
        body: "We are loggin you in..."
      });

      return;
    }

    setIsLogginIn(true);
    try{
      const user = await GoogleSignin.signIn();
    
      if(!user.idToken) {
        Alert.alert("No id received!!");
        setIsLogginIn(false);
        return;
      }
      const response = await login(user.idToken);

      setIsLogginIn(false);

      if(!response.success) {
        showToast({
          type: "error",
          heading: "Login Error",
          body: `${response.error}`
        });

        return;
      }

      showToast({
        type: "success",
        heading: "Login Successful",
        body: "Successfully logged in..."
      });

      setIsAuthenticated(true);
    }
    catch(error: any){
      if(error.code === statusCodes.SIGN_IN_CANCELLED || error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE){
        setIsLogginIn(false);
        return;
      }
    }
    
  };

  return (
    <View style={currentTheme === "dark" ? darkStyles.LoginButtonContainer : lightStyles.LoginButtonContainer}>
      <AuthButton title="Login with Google" onPress={onLoginClick} isAuthenticating={isLoggingIn} />
    </View>
  );
};

export default LoginSection;
