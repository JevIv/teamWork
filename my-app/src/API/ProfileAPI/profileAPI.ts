import axios from 'axios';

export const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    withCredentials: true,
})

export const profileAPI = {
    updateUser(data:UpdateUserType){
        return instance.put<ResponseType>('auth/me', data)
    }
}

type UpdateUserType = {
    name: string
    avatar: string
}

export type UserType = {
    _id: string,
    email: string,
    rememberMe: boolean,
    isAdmin: boolean,
    name: string,
    verified: boolean,
    publicCardPacksCount: number,
    created: string,
    updated: string,
    __v: number,
    token: string,
    tokenDeathTime: number,
    avatar: string
}

type ResponseType={
    updatedUser: UserType
    token: string,
    tokenDeathTime: number
}