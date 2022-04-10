import {Dispatch} from "redux";
import {CardPackType, searchAPI, SearchResponseType} from "../../API/SearchAPI/search-api";


type ActionsType = ReturnType<typeof setSearcAC>

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
}

export const searchReducer = (state: SearchResponseType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET_SEARCH":
            return action.cardPacks.map(packs => ({...packs}))
        default:
            return state
    }
}

export const setSearchAC = (cardPacks: CardPackType[]) => ({
    type: "SET_SEARCH",
    cardPacks,
});

export const searchTC = ({searchName}: string) => (dispatch: Dispatch) => {

    searchAPI.search(params)
        .then(data => {
            dispatch(setSearchAC(data))
        })
        .catch(e => {


        })
}