import { View, Text } from "react-native";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { Theme } from "typings/theme";
import { themeAtom } from "atoms";
import { lightStyles, darkStyles } from "./styles";
import { NestedScreenHeader, SingleLineTextInput } from "components/elements";
import { useNavigation } from "@react-navigation/native";

const CreateGroup = () => {

  const currentTheme = useRecoilValue<Theme>(themeAtom);
  const [groupName, setGroupName] = useState<string>("");

  const navigate = useNavigation();

  const onGoBack = () => {
    navigate.goBack();
  }

  return (
    <View style={currentTheme === "dark" ? darkStyles.Container : lightStyles.Container}>
      <NestedScreenHeader title="Create Group" onBack={onGoBack} />
      <SingleLineTextInput title="Group Name" value={groupName} onChangeText={setGroupName} placeholder="Group Name" />
    </View>
  );
};

export default CreateGroup;
