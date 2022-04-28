type InitialStateType = typeof initialState
export type StatusType ='idle' | 'loading' | 'succeeded'

const initialState = {
    isLoading: true,
    status: 'idle' as StatusType,
    isActivateModal: false,
}

export const AppReducer = (state: InitialStateType = initialState, action: ActionsAppType): InitialStateType => {
    switch (action.type) {
        case 'app/SET-IS-LOADING':
            return {...state, isLoading: action.value}
        case 'app/SET-STATUS':
            return {...state, status: action.status}
        case 'app/SET-ACTIVATE-MODAL':
            return {...state, isActivateModal: action.value}
        default:
            return state
    }
}

export type ActionsAppType = ReturnType<typeof setIsLoading> |
    ReturnType<typeof setStatus> | ReturnType<typeof setActivateModal>

export const setIsLoading = (value: boolean) =>
    ({type: 'app/SET-IS-LOADING', value} as const)

export const setStatus = (status: StatusType) =>
    ({type: 'app/SET-STATUS', status} as const)

export const setActivateModal = (value: boolean) =>
    ({type: 'app/SET-ACTIVATE-MODAL', value} as const)