import {SearchResponseType} from "../../../API/SearchAPI/search-api";

type ActionsType = ReturnType<typeof setSearchAC>

const initialState: SearchResponseType = {
    cardPacks: [{
        _id: "",
        user_id: "",
        name: "",
        cardsCount: 0,
        created: "",
        updated: "",
    }
    ],
    cardPacksTotalCount: 0,
    maxCardsCount: 0,
    minCardsCount: 0,
    page: 0,
    pageCount: 0,
    searchValue: ""
}

export const searchReducer = (state: SearchResponseType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET_SEARCH":
            return {...state, searchValue: action.searchValue}
        default:
            return state
    }
}

export const setSearchAC = (searchValue: string) => ({
    type: "SET_SEARCH",
    searchValue,
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
