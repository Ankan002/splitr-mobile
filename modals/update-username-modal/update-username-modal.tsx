import { View, Modal, Keyboard } from "react-native";
import React, { useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { themeAtom, loggedInUserAtom } from "atoms";
import { LoggedInUser } from "typings/user";
import { Theme } from "typings/theme";
import { lightStyles, darkStyles } from "./styles";
import { toastConfig } from "config/toast-config";
import Toast from "react-native-toast-message";
import { showToast } from "helpers/toast";
import { ImmutableTextDisplay, ModalHeader } from "components/modal-components";
import { ActionButton, SingleLineTextInput } from "components/elements";
import { updateUsername } from "helpers/user";

interface Props {
    isUpdateUsernameModalActive: boolean;
    setIsUpdateUsernameModalActive: Function;
}

const UpdateUsernameModal = (props: Props) => {

  const { isUpdateUsernameModalActive, setIsUpdateUsernameModalActive } = props;

  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const currentTheme = useRecoilValue<Theme>(themeAtom);
  const [loggedInUser, setLoggedInUser] = useRecoilState<LoggedInUser>(loggedInUserAtom);
  const [newUsername, setNewUsername] = useState<string>("");

  const onCloseRequested = () => {
    if(isUpdating) {
        showToast({
            type: "error",
            heading: "Updating...",
            body: "Hold on while we update the username"
        });

        return;
    }

    if(isUpdateUsernameModalActive) setIsUpdateUsernameModalActive(false);
  };

  const onUpdateUsernameClick = async() => {
    if(isUpdating) {
        showToast({
            type: "error",
            heading: "Updating...",
            body: "Hold on while we update the username"
        });

        return;
    }

    setIsUpdating(true);

    Keyboard.dismiss();

    const response = await updateUsername(newUsername.trim());

    setNewUsername("");
    setIsUpdating(false);

    if(!response.success){
        showToast({
            type: "error",
            heading: "Oh no...",
            body: response.error
        });

        return;
    }

    setLoggedInUser({
        ...loggedInUser,
        username: response.username
    });

    if(isUpdateUsernameModalActive) setIsUpdateUsernameModalActive(false);

    showToast({
        type: "success",
        heading: "Yeah...",
        body: "Successfully updated username"
    });
  }

  return (
    <Modal
        visible={isUpdateUsernameModalActive}
        onRequestClose={onCloseRequested}
        animationType="slide"
        transparent={true}
    >
        <View
            style={currentTheme === "dark" ? darkStyles.ModalContainer : lightStyles.ModalContainer}
        >

            <View
                style={currentTheme === "dark" ? darkStyles.UpdateUsernameContainer : lightStyles.UpdateUsernameContainer}
            >
                <ModalHeader title="Update Username" onClosePressed={onCloseRequested} />

                <View style={currentTheme === "dark" ? darkStyles.BodyContainer : lightStyles.BodyContainer}>
                    <ImmutableTextDisplay title="Old Username" displayText={loggedInUser.username ?? ""} />
                    <SingleLineTextInput onChangeText={setNewUsername} value={newUsername} placeholder="New username" title="New Username" />
                </View>

                <View style={currentTheme === "dark" ? darkStyles.ActionButtonContainer : lightStyles.ActionButtonContainer}>
                    <ActionButton title="Update Username" onPress={onUpdateUsernameClick} loading={isUpdating} />
                </View>
            </View>

        </View>

        <Toast config={toastConfig} />
    </Modal>
  );
};

export default UpdateUsernameModal;
