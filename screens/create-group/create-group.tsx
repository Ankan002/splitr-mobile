import { View, Text } from "react-native";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { Theme } from "typings/theme";
import { themeAtom } from "atoms";
import { lightStyles, darkStyles } from "./styles";
import { EmptyGroupImagePreview, ItemTitle, NestedScreenHeader, SingleLineTextInput } from "components/elements";
import { useNavigation } from "@react-navigation/native";
import { DocumentPickerResponse } from "react-native-document-picker";
import { ImagePickerModal } from "modals";

const CreateGroup = () => {

  const currentTheme = useRecoilValue<Theme>(themeAtom);
  const [groupName, setGroupName] = useState<string>("");

  const [selectedImage, setSelectedImage] = useState<DocumentPickerResponse | null>(null);
  const [isImagePickerModalVisible, setImagePickerModalVisible] = useState<boolean>(false);

  const navigate = useNavigation();

  const onGoBack = () => {
    navigate.goBack();
  }

  const onGroupImagePreviewClick = () => {
    setImagePickerModalVisible(true);
  }

  return (
    <View style={currentTheme === "dark" ? darkStyles.Container : lightStyles.Container}>
      <NestedScreenHeader title="Create Group" onBack={onGoBack} />

      <View style={currentTheme==="dark" ? darkStyles.Body : lightStyles.Body}>

        <SingleLineTextInput title="Group Name" value={groupName} onChangeText={setGroupName} placeholder="Group Name" />

        <ItemTitle title="Selected Members" />

        <ItemTitle title="Group Image Preview" />

        {
          !selectedImage && (
            <EmptyGroupImagePreview onPress={onGroupImagePreviewClick} />
          )
        }

      </View>

      <ImagePickerModal isImagePickerModalActive={isImagePickerModalVisible} setIsImagePickerModalActive={setImagePickerModalVisible} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
    </View>
  );
};

export default CreateGroup;
