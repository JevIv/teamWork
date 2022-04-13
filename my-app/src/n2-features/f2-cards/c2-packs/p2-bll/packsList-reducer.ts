import {CardPacksType, packsListAPI} from '../p3-dal/packsListAPI';
import {Dispatch} from 'redux';
//import {setIsLoading} from '../../../../n1-main/m2-bll/s1-reducer/app-reducer';

// type InitialStateType = {
//     packsList: CardPacksType[]
// }
//
// const initialState: InitialStateType = {
//     packsList: []
// }

type InitialStateType = {
    cardPacks: CardPacksType[]
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

export const packsListReducer = (state: InitialStateType = initialState, action: ActionsPacklistType): InitialStateType => {
    switch (action.type) {
        case 'packsList/SET_PACKLIST':
            return {
                ...state, cardPacks: action.packsList
            }
        case "SET_SEARCH":
            return {...state, packName: action.packName}
        case "SET_PAGE":
            return {...state, page: action.page}
        default:
            return state
    }
}

//Actions creators

type ActionsPacklistType = SetPacksListAcType
    | SetSearchAcType
    | setPageAcType

type SetPacksListAcType = ReturnType<typeof setPacksList>
type SetSearchAcType = ReturnType<typeof setSearchAC>
type setPageAcType = ReturnType<typeof setPageAC>

export const setPacksList = (packsList:CardPacksType[])=> ({type: 'packsList/SET_PACKLIST', packsList}) as const
export const setSearchAC = (packName: string) => ({type: "SET_SEARCH", packName}) as const
export const setPageAC = (page: number) => ({type: "SET_PAGE", page}) as const
//export const setSearchAC = (packName: string) => ({type: "SET_SEARCH", packName}) as const
//export const setSearchAC = (packName: string) => ({type: "SET_SEARCH", packName}) as const
//export const setSearchAC = (packName: string) => ({type: "SET_SEARCH", packName}) as const

//Thunks

export const setPacksListTC = ()=> (dispatch: Dispatch)=>{
    packsListAPI.getAllPacks({user_id: '624b04b587b7af66e40a1112'})
        .then(res => {
            dispatch(setPacksList(res))
        })
}