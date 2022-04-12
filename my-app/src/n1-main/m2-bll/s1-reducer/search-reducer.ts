import {SearchQueryType} from "../../../API/SearchAPI/search-api";

type ActionsType = ReturnType<typeof setSearchAC>


type InitialStateType = SearchQueryType

const initialState: InitialStateType = {
    packName: " ",
    min: 0,
    max: 0,
    sortPacks: " ",
    page: 0,
    pageCount: 0,
    user_id: " ",
}

export const searchReducer = (state: SearchQueryType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET_SEARCH":
            return {...state, packName: action.packName}
        default:
            return state
    }
}

export const setSearchAC = (packName: string) => ({
    type: "SET_SEARCH",
    packName,
});

/*
export const searchTC = ({searchName}: string) => (dispatch: Dispatch) => {

    searchAPI.search(params)
        .then(data => {
            dispatch(setSearchAC(data))
        })
        .catch(e => {

        })
}*/
