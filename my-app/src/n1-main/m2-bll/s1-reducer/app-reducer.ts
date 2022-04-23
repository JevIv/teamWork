type InitialStateType = typeof initialState
export type StatusType ='idle' | 'loading' | 'succeeded'

const initialState = {
    isLoading: true,
    status: 'idle' as StatusType
}

export const AppReducer = (state: InitialStateType = initialState, action: ActionsAppType): InitialStateType => {
    switch (action.type) {
        case 'app/SET-IS-LOADING':
            return {...state, isLoading: action.value}
        case 'app/SET-STATUS':
            return {...state, status: action.status}
        default:
            return state
    }
}

export type ActionsAppType = ReturnType<typeof setIsLoading> |
    ReturnType<typeof setStatus>

export const setIsLoading = (value: boolean) =>
    ({type: 'app/SET-IS-LOADING', value} as const)

export const setStatus = (status: StatusType) =>
    ({type: 'app/SET-STATUS', status} as const)