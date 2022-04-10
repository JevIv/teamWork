
type ActionsType = any
type InitialStateType = any


const initialState: InitialStateType = {}

export const registerReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {

        default:
            return state
    }
}
