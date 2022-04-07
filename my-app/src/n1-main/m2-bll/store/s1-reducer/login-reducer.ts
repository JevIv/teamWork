
type ActionsType = any
type InitialStateType = any


const initialState: InitialStateType = {}

export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {

        default:
            return state
    }
}