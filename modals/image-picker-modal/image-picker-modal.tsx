import { View, Text, Modal, Pressable, Image } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { useRecoilValue } from "recoil";
import { Theme } from "typings/theme";
import { themeAtom } from "atoms";
import { lightStyles, darkStyles } from "./styles";
import { ModalHeader } from "components/modal-components";
import Toast from "react-native-toast-message";
import DocumentPicker, { DocumentPickerResponse } from "react-native-document-picker";
import { toastConfig } from "config/toast-config";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { Manrope_400Regular, useFonts } from "@expo-google-fonts/manrope";
import { colors } from "constants/Colors";

interface Props {
    isImagePickerModalActive: boolean;
    setIsImagePickerModalActive: Function;
    selectedImage: DocumentPickerResponse | null;
    setSelectedImage: Dispatch<SetStateAction<DocumentPickerResponse | null>>;
}

const ImagePickerModal = (props: Props) => {

  const { isImagePickerModalActive, setIsImagePickerModalActive, selectedImage, setSelectedImage } = props;

  const currentTheme = useRecoilValue<Theme>(themeAtom);
  const [fontsLoaded] = useFonts({Manrope_400Regular});

  const onCloseRequested = () => {
    if(isImagePickerModalActive) setIsImagePickerModalActive(false);
  }

  const onSelectImageClick = async() => {
    try{
        const response = await DocumentPicker.pick({
            type: DocumentPicker.types.images
        });

        if(response.length > 0){
            setSelectedImage(response[0]);
        }
    }
    catch(error){
        if(DocumentPicker.isCancel(error)) return;
    }
  }

  const onDeleteImageClick = () => {
    setSelectedImage(null);
  }

  return (
    <Modal
        visible={isImagePickerModalActive}
        onRequestClose={onCloseRequested}
        transparent={true}
        animationType="slide"
    >
        <View style={currentTheme === "dark" ? darkStyles.ModalContainer : lightStyles.ModalContainer}>
            <View style={currentTheme === "dark" ? darkStyles.ImagePickerContainer : lightStyles.ImagePickerContainer}>
                <ModalHeader title="Image Picker" onClosePressed={onCloseRequested} />

                <View style={currentTheme=== "dark" ? darkStyles.Body : lightStyles.Body}>
                    {
                        !selectedImage ? (
                            <Pressable style={currentTheme === "dark" ? darkStyles.EmptyImageConatiner : lightStyles.EmptyImageConatiner} onPress={onSelectImageClick}>
                                <Feather name="upload-cloud" size={120} color={currentTheme === "dark" ? colors.primaryLight : colors.primaryDark} />

                                {
                                    fontsLoaded && (
                                        <Text style={currentTheme === "dark" ? darkStyles.EmptyText : lightStyles.EmptyText}>
                                            Click here to select an image
                                        </Text>
                                    )
                                }

                            </Pressable>
                        ) : (
                            <View style={currentTheme === "dark" ? darkStyles.SelctedImagePrview : lightStyles.SelctedImagePrview}>
                                <Pressable style={currentTheme === "dark" ? darkStyles.ImageContainer : lightStyles.ImageContainer} onPress={onSelectImageClick}>
                                    <Image source={{uri: selectedImage.uri}} style={currentTheme === "dark" ? darkStyles.Image : lightStyles.Image} />
                                </Pressable>

                                {
                                    fontsLoaded && (
                                        <Text style={currentTheme === "dark" ? darkStyles.InfoText : lightStyles.InfoText}>
                                            To change the selected image click on the image or you can simply close the modal to confirm your selection.
                                        </Text>
                                    )
                                }
                            </View>
                        )
                    }

                    {
                        selectedImage && (
                            <View style={currentTheme === "dark" ? darkStyles.DeleteButtonContainer : lightStyles.DeleteButtonContainer}>
                                <Pressable style={currentTheme === "dark" ? darkStyles.DeleteButtonContainer : lightStyles.DeleteButtonContainer} onPress={onDeleteImageClick}>
                                    <MaterialIcons name="delete-outline" size={30} color={colors.primaryRed} />
                                </Pressable>
                            </View>
                        )
                    }

                </View>
            </View>
        </View>

        <Toast config={toastConfig} />
    </Modal>
  );
};

export default ImagePickerModal;
