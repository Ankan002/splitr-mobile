import { View, Text, Modal } from "react-native";
import React, { useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { themeAtom, loggedInUserAtom } from "atoms";
import { LoggedInUser } from "typings/user";
import { Theme } from "typings/theme";
import { lightStyles, darkStyles } from "./styles";
import { toastConfig } from "config/toast-config";
import Toast from "react-native-toast-message";
import { showToast } from "helpers/toast";
import { ModalHeader } from "components/modal-components";

interface Props {
    isUpdateUsernameModalActive: boolean;
    setIsUpdateUsernameModalActive: Function;
}

const UpdateUsernameModal = (props: Props) => {

  const { isUpdateUsernameModalActive, setIsUpdateUsernameModalActive } = props;

  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const currentTheme = useRecoilValue<Theme>(themeAtom);
  const [loggedInUser, setLoggedInUser] = useRecoilState<LoggedInUser>(loggedInUserAtom);

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

                <View>
                    
                </View>

                <View>

                </View>
            </View>

        </View>

        <Toast config={toastConfig} />
    </Modal>
  );
};

export default UpdateUsernameModal;
