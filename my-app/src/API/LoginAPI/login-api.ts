import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    withCredentials: true,
})


export const authAPI = {
    login(data: LoginParamsType){
        return instance.post<ResponseType>('auth/login', data)
    },
}

export type LoginParamsType ={
    email: string
    password: string
    rememberMe: boolean
}

type ResponseType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number;
    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean;
    rememberMe: boolean;
    error?: string;
}