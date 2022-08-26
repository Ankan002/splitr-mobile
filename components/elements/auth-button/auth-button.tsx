import {
  View,
  Text,
  Pressable,
  GestureResponderEvent,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { Manrope_500Medium, useFonts } from "@expo-google-fonts/manrope";
import { Theme } from "typings/theme";
import { colors } from "constants/Colors";
import { lightStyles, darkStyles } from "./styles";
import { useRecoilValue } from "recoil";
import { Ionicons } from "@expo/vector-icons";
import { themeAtom } from "atoms";

interface Props {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  isAuthenticating: boolean;
}

const AuthButton = (props: Props) => {
  const { title, onPress, isAuthenticating } = props;

  const currentTheme = useRecoilValue<Theme>(themeAtom);

  const [fontsLoaded] = useFonts({
    Manrope_500Medium,
  });

  return (
    <Pressable
      style={currentTheme === "dark" ? darkStyles.Button : lightStyles.Button}
      onPress={onPress}
    >
      {isAuthenticating ? (
        <ActivityIndicator
          size="large"
          color={
            currentTheme === "dark" ? colors.primaryLight : colors.primaryDark
          }
        />
      ) : (
        <>
          <Ionicons
            size={30}
            name="logo-google"
            color={
              currentTheme === "dark" ? colors.primaryLight : colors.primaryDark
            }
            style={{ marginRight: 10 }}
          />

          {fontsLoaded && (
            <Text
              style={
                currentTheme === "dark" ? darkStyles.Text : lightStyles.Text
              }
            >
              {title}
            </Text>
          )}
        </>
      )}
    </Pressable>
  );
};

export default AuthButton;
