import { View, Text, Pressable, GestureResponderEvent } from "react-native";
import React from "react";
import { Manrope_500Medium, useFonts } from "@expo-google-fonts/manrope";
import { useRecoilValue } from "recoil";
import { Theme } from "typings/theme";
import { themeAtom } from "atoms";
import { lightStyles, darkStyles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "constants/Colors";

interface Props {
    title: string;
    onBack: (e: GestureResponderEvent) => void;
}

const NestedScreenHeader = (props: Props) => {
  const { title, onBack } = props;

  const [fontsLoaded] = useFonts({
    Manrope_500Medium
  });

  const currentTheme = useRecoilValue<Theme>(themeAtom);

  return (
    <View style={currentTheme === "dark" ? darkStyles.HeaderContainer : lightStyles.HeaderContainer}>
      <Pressable style={currentTheme ==="dark" ? darkStyles.BackButton : lightStyles.BackButton} onPress={onBack}>
        <Ionicons
          name="arrow-back-outline"
          size={24}
          color={
            currentTheme === "dark" ? colors.primaryLight : colors.primaryDark
          }
        />
      </Pressable>

      <View style={currentTheme === "dark" ? darkStyles.TitleContainer : lightStyles.TitleContainer}>
        {
            fontsLoaded && (
                <Text style={currentTheme === "dark" ? darkStyles.TitleText : lightStyles.TitleText}>
                    {title}
                </Text>
            )
        }
      </View>
    </View>
  );
};

export default NestedScreenHeader;
