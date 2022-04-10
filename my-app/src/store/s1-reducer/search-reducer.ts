import {Dispatch} from "redux";
import {searchAPI} from "../../API/SearchAPI/search-api";


type ActionsType = ReturnType<typeof setSearcAC>
type InitialStateType = {
    searchName: string
}

const initialState: InitialStateType = {
    searchName: "",
}

export const searchReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        default:
            return state
    }
}

export const setSearcAC = (searchName: string)=> ({
    type: "SET_SEARCH",
    searchName,
});

export const Search = () => (dispatch: Dispatch) => {

    searchAPI.search()
        .then(data => {
            dispatch(setSearcAC(data))
        })
        .catch(e => {


        })
}