
type InitialStateType = {
    profileInfo: UserType | null
}

const initialState: InitialStateType = {
       profileInfo: null
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsProfileType): InitialStateType => {
    switch (action.type) {
        case 'PROFILE/SET_PROFILE': {
            return {
                ...state,
                profileInfo: action.profile
            }
        }
        default:
            return state
    }
}

//Action creator
export type ActionsProfileType = ReturnType<typeof setProfile>

export const setProfile = (profile: UserType) => ({type: 'PROFILE/SET_PROFILE', profile}) as const


//Thuncks
//не забыть поправить св-во avatar
export const updateProfile = (updatedProfile: {name: string, avatar?: string}) => async (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsProfileType | ActionsAppType>) => {
    try {
        dispatch(setIsLoading(true))
        const res = await profileAPI.updateUser(updatedProfile)
        dispatch(setProfile(res.updatedUser))
        dispatch(setIsLoading(false))

    } catch(e) {

    }
}