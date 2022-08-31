import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";

export const fetchLoggedInUser = async () => {
    try{
        const authToken = await AsyncStorage.getItem("authToken");

        const response = await fetch(`${Constants.manifest?.extra?.apiEndpoint}/user/self`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authToken": authToken ?? ""
            }
        });

        const data = await response.json();

        if(!data.success){

            await AsyncStorage.removeItem("authToken");

            return {
                success: data.success,
                error: data?.error
            };
        }

        return {
            success: data.success,
            user: data?.data?.user
        };
    }
    catch(error){
        if(error instanceof Error){
            return {
                success: false,
                error: error.message.toString()
            };
        }

        return {
            success: false,
            error: "Internal Server Erro!!"
        };
    }
};