import { View, Text } from "react-native";
import React from "react";
import { useRecoilValue } from "recoil";
import { themeAtom } from "atoms";
import { Theme } from "typings/theme";
import { lightStyles, darkStyles } from "./styles";
import { AuthHeader } from "components/elements";
import { LoginBody } from "components/login-body";
import { LoginSection } from "components/login-section";

const Login = () => {

  const currentTheme = useRecoilValue<Theme>(themeAtom);

  return (
    <View style={currentTheme === "dark" ? darkStyles.Container : lightStyles.Container}>
      <AuthHeader title="SPLITR" />
      <LoginBody />
      <LoginSection />
    </View>
  );
};

export default Login;
