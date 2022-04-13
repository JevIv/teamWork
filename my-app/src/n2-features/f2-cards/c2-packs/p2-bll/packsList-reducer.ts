import {CardPacksType, GetParamsType, packsListAPI} from '../p3-dal/packsListAPI';
import {Dispatch} from 'redux';
import {setIsLoading} from '../../../../n1-main/m2-bll/s1-reducer/app-reducer';
import {AppRootStateType, store} from '../../../../n1-main/m2-bll/store';

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
    sortPacks?: string | null
    user_id: string

}

const initialState: InitialStateType = {
    cardPacks: [],
    cardPacksTotalCount: 0,
    maxCardsCount: 0,
    minCardsCount: 0,
    page: 1,
    pageCount: 9,
    packName: ' ',
    min: 0,
    max: 0,
    sortPacks: null,
    user_id: '',


}

export const packsListReducer = (state: InitialStateType = initialState, action: ActionsPacklistType): InitialStateType => {
    switch (action.type) {
        case 'packsList/SET_PACKLIST':
            return {
                ...state, cardPacks: action.packsList
            }
        case 'packsList/SET_SEARCH':
            return {...state, packName: action.packName}
        case 'packsList/SET_TOTAL_PACKS':
            return {...state, cardPacksTotalCount: action.totalPacks}
        case 'packsList/SET_CURRENT_PAGE':
            return {...state, page: action.currentPage}
        default:
            return state
    }
}

//Actions

type ActionsPacklistType = SetPacksListAcType | SetSearchAcType | SetPacksTotalCountType | SetCurrentPageType

type SetPacksListAcType = ReturnType<typeof setPacksList>
type SetSearchAcType = ReturnType<typeof setSearchAC>
type SetPacksTotalCountType = ReturnType<typeof setPacksTotalCount>
type SetCurrentPageType = ReturnType<typeof setCurrentPage>

export const setPacksList = (packsList: CardPacksType[]) => ({type: 'packsList/SET_PACKLIST', packsList}) as const
export const setSearchAC = (packName: string) => ({type: 'packsList/SET_SEARCH', packName}) as const
export const setPacksTotalCount = (totalPacks: number) => ({type: 'packsList/SET_TOTAL_PACKS', totalPacks}) as const
export const setCurrentPage = (currentPage: number) => ({type: 'packsList/SET_CURRENT_PAGE', currentPage}) as const

//Thunks

export const setPacksListTC = (params?: Partial<GetParamsType>) => (dispatch: Dispatch, getState: () => AppRootStateType) => {

    const allPacksList = getState().packs;
    const cardPacks = allPacksList.cardPacks;


    packsListAPI.getAllPacks({
        page: allPacksList.page,
        pageCount: allPacksList.pageCount,
        min: params?.min,
        max: params?.max,
        sortPacks: params?.sortPacks,
        user_id: params?.user_id,
    })
        .then(res => {
            dispatch(setPacksList(res.cardPacks))
            dispatch(setPacksTotalCount(res.cardPacksTotalCount))
            dispatch(setCurrentPage(res.page))
        })
}