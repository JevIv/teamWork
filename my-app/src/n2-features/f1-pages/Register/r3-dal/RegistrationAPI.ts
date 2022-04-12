import { instance } from "../../../../n1-main/m3-dal/instance";

export type RegistrDataType = {
    error: string;
}

export const RegistrationAPI = {
    signUp: async (email: string, password:string) => {
        const response = await instance.post<RegistrDataType>("/auth/register",{email, password});
        return response.data;
    }
}