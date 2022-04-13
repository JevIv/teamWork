import {CardPacksType, GetParamsType, packsListAPI} from '../p3-dal/packsListAPI';
import {Dispatch} from 'redux';
import {setIsLoading} from '../../../../n1-main/m2-bll/s1-reducer/app-reducer';
import {store} from '../../../../n1-main/m2-bll/store';

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
    cardPacksTotalCount: 4,
    maxCardsCount: 0,
    minCardsCount: 0,
    page: 1,
    pageCount: 2,
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
        case "packsList/SET_SEARCH":
            return {...state, packName: action.packName}
        default:
            return state
    }
}

//Actions creators

type ActionsPacklistType = SetPacksListAcType | SetSearchAcType

type SetPacksListAcType = ReturnType<typeof setPacksList>
type SetSearchAcType = ReturnType<typeof setSearchAC>

export const setPacksList = (packsList:CardPacksType[])=> ({type: 'packsList/SET_PACKLIST', packsList}) as const
export const setSearchAC = (packName: string) => ({type: "packsList/SET_SEARCH", packName}) as const

//Thunks

export const setPacksListTC = (params?:Partial<GetParamsType>)=> (dispatch: Dispatch)=>{
    packsListAPI.getAllPacks()
        .then(res => {
            dispatch(setPacksList(res))
        })
}