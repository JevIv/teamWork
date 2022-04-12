import {CardPackType} from "../../../API/SearchAPI/search-api";

type ActionsType = ReturnType<typeof setSearchAC>


type InitialStateType = {
    cardPacks: CardPackType[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number,
    packName: string,
    min?: number
    max?: number
    sortPacks?: string
    user_id: string
}

const initialState: InitialStateType = {
    cardPacks: [],
    cardPacksTotalCount: 0,
    maxCardsCount: 0,
    minCardsCount: 0,
    page: 0,
    pageCount: 0,
    packName: " ",
    min: 0,
    max: 0,
    sortPacks: " ",
    user_id: "",

}

export const packListReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
/*        case "SET_PACKS_LIST":
            retun*/
        case "SET_SEARCH":
            return {...state, packName: action.packName}
        default:
            return state
    }
}

export const setPacksAC = (packName: string) => ({
    type: "SET_SEARCH",
    packName,
});

export const setSearchAC = (packName: string) => ({
    type: "SET_SEARCH",
    packName,
});