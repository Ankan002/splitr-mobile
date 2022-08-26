import { View, Text } from "react-native";
import React from "react";
import { useRecoilValue } from "recoil";
import { Theme } from "typings/theme";
import { themeAtom } from "atoms";
import { lightStyles, darkStyles } from "./styles";
import { AuthButton } from "components/elements";

const LoginSection = () => {

  const currentTheme = useRecoilValue<Theme>(themeAtom);

  const onLoginClick = async() => {
    console.log("Login Clicked....");
  }

  return (
    <View style={currentTheme === "dark" ? darkStyles.LoginButtonContainer : lightStyles.LoginButtonContainer}>
      <AuthButton type="login" title="Login with Google" onPress={onLoginClick} />
    </View>
  );
};

export default LoginSection;
