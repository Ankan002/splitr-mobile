import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const updateUsername = async (username: string) => {
    if(username.trim().length < 3 || username.trim().length > 50){
        return {
            success: false,
            error: "Username should be at least 3 characters long and at most 50 characters long"
        };
    }

    if(username.trim().split("_")[username.trim().split("_").length-1] === "gal" || username.trim().split(" ").length > 1){
        return {
            success: false,
            error: "Username must not contain _gal at the end or empty spaces"
        }
    }

    try{
        const authToken = await AsyncStorage.getItem("authToken");

        const response = await fetch(`${Constants.manifest?.extra?.apiEndpoint}/user/username/update`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "authToken": authToken ?? ""
            },
            body: JSON.stringify({
                username: username.trim()
            })
        });

        const data = await response.json();

        if(!data.success){
            return {
                success: data.success,
                error: `${data.error}`
            }
        }

        return {
            success: data.success,
            username: data.data.username
        }
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
            error: "Internal Server Error!!"
        };
    }
}