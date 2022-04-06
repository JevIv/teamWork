import { ThunkDispatch } from 'redux-thunk';
import {profileAPI, UserType} from '../../API/ProfileAPI/profileAPI';
import {AppRootStateType} from '../store';

export type ActionsProfileType = ReturnType<typeof setProfile>
type InitialStateType = {
    profileInfo: UserType | null
}


const initialState: InitialStateType = {
       profileInfo: null
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsProfileType): InitialStateType => {
    switch (action.type) {
        case 'SET_PROFILE': {
            return {
                ...state,
                profileInfo: action.profile
            }
        }
        default:
            return state
    }
}

export const setProfile = (profile: UserType) => ({type: 'SET_PROFILE', profile}) as const


//не забыть поправить св-во avatar
export const updateProfile = (updatedProfile: {name: string, avatar?: string}) => async (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsProfileType>) => {
    try {
        const res = await profileAPI.updateUser(updatedProfile)
        dispatch(setProfile(res.updatedUser))

    } catch(e) {

    }
}