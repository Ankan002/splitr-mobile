import axios, { AxiosError } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Contants from "expo-constants";

export const login = async (jwtProfileToken: string) => {
    try{
        const response = await axios.post(`${Contants.manifest?.extra?.apiEndpoint}/auth/login`, {
            jwtProfileToken
        });

        if(!response.data.success) {
            return {
                success: response.data.success,
                error: response.data.error
            };
        }

        await AsyncStorage.setItem("authToken", response.headers.authtoken);

        return {
            success: response.data.success
        };
    }
    catch(error) {
        if(error instanceof AxiosError){
            return {
                success: false,
                error: error.response?.data.error
            };
        }

        return {
            success: false,
            error: "Internal Server Error!!",
        };
    }
}
