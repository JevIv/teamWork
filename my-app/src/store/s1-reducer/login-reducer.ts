import {authAPI, LoginParamsType} from '../../API/LoginAPI/login-api';
import {Dispatch} from 'redux';
import {ActionsProfileType, setProfile} from './profile-reducer';
import {ThunkDispatch} from 'redux-thunk';
import {AppRootStateType} from '../store';

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

export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch) => {
    authAPI.login(data)
        .then(res => {
            dispatch(setIsLoggedInAC(true))
        })
}
//=======================================================================================================

//санка для тестирования. Она логинет тестовый акк.
export const setProfileTC = (data: LoginParamsType) => (dispatch: any) => {
    authAPI.login(data)
        .then(res => {
            dispatch(setProfile(res.data))
        })
}

// санка для проверки авторизации

export const authMe = () => (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsType | ActionsProfileType>) => {
    dispatch(setAuth(false))
    authAPI.authMe()
        .then(data => {
            dispatch(setProfile(data))
            dispatch(setAuth(true))
        })
        .catch(e => {
            dispatch(setAuth(false))
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
            console.log('Error: ', {...e})
        })
    }
