import { RegistrationActionType } from "./RegistrationAction"

type RegistrationStateType = {
    statusLoading: boolean
    statusDone: boolean
    statusError:string
}

const RegistrationInitState: RegistrationStateType = {
    statusLoading: false,
    statusDone: false,
    statusError:""
}

export const registerReducer = (state: RegistrationStateType = RegistrationInitState, action: RegistrationActionType):RegistrationStateType => {
    switch (action.type) {
        case "register/SET_LOADING":{
            return {
                ...state,
                statusLoading: action.loading,
                statusDone: false,
                statusError: ""
            }
        }
        case "register/SET_SUCCESS":{
            return {
                ...state,
                statusLoading:false,
                statusDone: action.success,
                statusError: ""
            }
        }
        case "register/SET_ERROR":{
            return {
                ...state,
                statusLoading: false,
                statusDone: false,
                statusError: action.error
            }
        }
        default:
            return state
    }
}
