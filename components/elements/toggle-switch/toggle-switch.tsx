import { View, Text } from "react-native";
import React from "react";
import { lightStyles, darkStyles } from "./styles";
import { useRecoilValue } from "recoil";
import { themeAtom } from "atoms";
import { useFonts, Manrope_400Regular } from "@expo-google-fonts/manrope";
import { colors } from "constants/Colors";
import { Switch } from "react-native-switch";
import { Theme } from "typings/theme";

interface Props {
  title: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

const ToggleSwitch = (props: Props) => {
  const { title, value, onChange } = props;

  const [fontsLoaded] = useFonts({
    Manrope_400Regular,
  });

  const currentTheme = useRecoilValue<Theme>(themeAtom);

  return (
    <View
      style={
        currentTheme === "dark"
          ? darkStyles.ToggleSwitchContainer
          : lightStyles.ToggleSwitchContainer
      }
    >
      {fontsLoaded && (
        <Text
          style={currentTheme === "dark" ? darkStyles.Title : lightStyles.Title}
        >
          {title}
        </Text>
      )}

      <Switch
        value={value}
        onValueChange={onChange}
        renderActiveText={false}
        renderInActiveText={false}
        innerCircleStyle={
          currentTheme === "dark"
            ? darkStyles.SwicthButton
            : lightStyles.SwicthButton
        }
        circleActiveColor={colors.primaryLight}
        circleInActiveColor={colors.primaryLight}
        barHeight={20}
        circleSize={20}
        switchRightPx={1.5}
        backgroundActive={colors.primaryOrange}
        backgroundInactive={colors.primaryYellow}
        containerStyle={
          currentTheme === "dark" ? darkStyles.Switch : lightStyles.Switch
        }
      />
    </View>
  );
};

export default ToggleSwitch;
