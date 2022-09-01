import { Text, GestureResponderEvent, Pressable, ActivityIndicator } from "react-native";
import React from "react";
import { useRecoilValue } from "recoil";
import { Theme } from "typings/theme";
import { themeAtom } from "atoms";
import { lightStyles, darkStyles } from "./styles";
import { Manrope_400Regular, useFonts } from "@expo-google-fonts/manrope";
import { colors } from "constants/Colors";

interface Props {
    title: string;
    onPress: (e: GestureResponderEvent) => void;
    loading?: boolean; 
}

const ActionButton = (props: Props) => {

  const { title, onPress, loading } = props;

  const [fontsLoaded] = useFonts({
    Manrope_400Regular
  }); 

  const currentTheme = useRecoilValue<Theme>(themeAtom);

  return (
    <Pressable
      style={currentTheme === "dark" ? darkStyles.ActionButton : lightStyles.ActionButton}
      onPress={onPress}
    >
      {
        fontsLoaded && loading !== undefined ? (
            <>
            {
                loading ? (
                    <ActivityIndicator color={currentTheme === "dark" ? colors.primaryLight : colors.primaryDark} size="large" />
                ) : (
                    <Text style={currentTheme === "dark" ? darkStyles.ActionButtonText : lightStyles.ActionButtonText}>
                        {title}
                    </Text>
                )
            }
            </>
        ) : (
            <Text style={currentTheme === "dark" ? darkStyles.ActionButtonText : lightStyles.ActionButtonText}>
                {title}
            </Text> 
        )
      }
    </Pressable>
  );
};

export default ActionButton;
