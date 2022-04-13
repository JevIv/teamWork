import {Dispatch} from 'redux';
import {ActionsProfileType, setProfile} from './profile-reducer';
import {ThunkDispatch} from 'redux-thunk';
import {AppRootStateType} from '../store';
import {authAPI, LoginParamsType} from '../../../API/LoginAPI/login-api';
import {ActionsAppType, setIsLoading} from './app-reducer';

type ActionsType = ReturnType<typeof setIsLoggedInAC> | ReturnType<typeof setAuth >
type InitialStateType = {
    isLoggedIn: boolean
    isAuth: boolean
}

const initialState: InitialStateType = {
    isLoggedIn: false,
    isAuth: false
}

export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "login/SET-IS-LOGGED-IN":
            return {...state, isLoggedIn: action.value};
        case 'login/SET-AUTH':
            return {...state, isAuth: action.value}
        default:
            return state
    }
}

export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'login/SET-IS-LOGGED-IN', value} as const)

//AC для изменения authMe
export const setAuth = (value: boolean) =>
    ({type: 'login/SET-AUTH', value} as const)

//========================================================================================================

export const loginTC = (data: LoginParamsType) => (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsType | ActionsProfileType | ActionsAppType>) => {
    dispatch(setIsLoading(true))
    authAPI.login(data)
        .then(res => {
            dispatch(setProfile(res.data))
            dispatch(setIsLoggedInAC(true))
            dispatch(setAuth(true))
        })
        .finally(()=> {
            dispatch(setIsLoading(false))
        })
}

//санка для выхода из профиля

export const logOut = ()=> (dispatch:Dispatch) => {
    dispatch(setIsLoading(true))
    authAPI.logOut()
        .then(res=> {
            dispatch(setIsLoggedInAC(false))
            dispatch(setAuth(false))
        })
        .catch(e=> {
            console.log(e)
        })
        .finally(()=>{
            dispatch(setIsLoading(false))
        })
}


// санка для проверки авторизации

export const authMe = () => (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsType | ActionsProfileType | ActionsAppType>) => {
    dispatch(setIsLoading(true))
    authAPI.authMe()
        .then(data => {
            dispatch(setProfile(data))
            dispatch(setAuth(true))
            dispatch(setIsLoggedInAC(true))
        })
        .catch(e => {
            dispatch(setAuth(false))
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
            console.log('Error: ', {...e})

        })
        .finally(()=> {
            dispatch(setIsLoading(false))
        })
}