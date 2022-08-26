import AsyncStorage from "@react-native-async-storage/async-storage"

export const verifyLoggedIn = async () => {
    const authToken = await AsyncStorage.getItem("authToken");

    if (!authToken) return false;

    return true;
}