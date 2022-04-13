import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true,
})


export const authAPI = {
    login(data: LoginParamsType){
        return instance.post<ResponseType>('auth/login', data)
    },
    authMe() {
        return instance.post<ResponseType>('auth/me')
            .then(res => res.data)
    },
    logOut(){
        return instance.delete('/auth/me')
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
    rememberMe: boolean;
    isAdmin: boolean;
    name: string;
    token: string;
    avatar: string;
    publicCardPacksCount: number;
    //дату поменял на string
    created: string;
    updated: string;
    verified: boolean;
    error?: string;
    tokenDeathTime: number;
}