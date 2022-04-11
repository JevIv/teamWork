
export type ActionsAppType = ReturnType<typeof setIsLoading>

type InitialStateType = {
    isLoading: boolean
}

const initialState: InitialStateType = {
    isLoading: false
}

export const AppReducer = (state: InitialStateType = initialState, action: ActionsAppType): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOADING':
            return {...state, isLoading: action.value}
        default:
            return state
    }
}

export const setIsLoading = (value: boolean) =>
    ({type: 'login/SET-IS-LOADING', value} as const)