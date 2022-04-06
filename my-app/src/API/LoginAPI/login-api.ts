import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    withCredentials: true,
})


export const authAPI = {
    login(data: LoginParamsType){
        return instance.post<ResponseType>('auth/login', data)
    },
    authMe() {
        return instance.post('auth/me')
            .then(res => res.data)
    }
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
    token: string;
    avatar: string;
    publicCardPacksCount: number;
    //дату поменял на string
    created: string;
    updated: string;
    isAdmin: boolean;
    verified: boolean;
    rememberMe: boolean;
    error?: string;
}