import {CardPacksType, GetParamsType, packsListAPI} from '../p3-dal/packsListAPI';
import {Dispatch} from 'redux';
import {AppRootStateType} from '../../../../n1-main/m2-bll/store';


type InitialStateType = {
    cardPacks: CardPacksType[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number,
    packName: string,
    min: number
    max: number
    sortPacks?: string | null
    user_id: string

}

const initialState: InitialStateType = {
    cardPacks: [],
    cardPacksTotalCount: 0,
    maxCardsCount: 0,
    minCardsCount: 0,
    page: 1,
    pageCount: 8,
    packName: '',
    min: 0,
    max: 100,
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
        case 'packsList/SET_MIN_MAX':
            return {...state, min: action.value[0], max: action.value[1]}
        case "SET_PAGE":
            return {...state, page: action.page}
        default:
            return state
    }
}

//Actions

type ActionsPacklistType = SetPacksListAcType
    | SetSearchAcType
    | SetPacksTotalCountType
    | SetCurrentPageType
    | setMinMaxType
    | setPageAcType

type SetPacksListAcType = ReturnType<typeof setPacksList>
type SetSearchAcType = ReturnType<typeof setSearchAC>
type SetPacksTotalCountType = ReturnType<typeof setPacksTotalCount>
type SetCurrentPageType = ReturnType<typeof setCurrentPage>
type setMinMaxType = ReturnType<typeof setMinMax>
type setPageAcType = ReturnType<typeof setPageAC>

export const setPacksList = (packsList: CardPacksType[]) => ({type: 'packsList/SET_PACKLIST', packsList}) as const
export const setSearchAC = (packName: string) => ({type: 'packsList/SET_SEARCH', packName}) as const
export const setPacksTotalCount = (totalPacks: number) => ({type: 'packsList/SET_TOTAL_PACKS', totalPacks}) as const
export const setCurrentPage = (currentPage: number) => ({type: 'packsList/SET_CURRENT_PAGE', currentPage}) as const
export const setMinMax = (value: number[]) => ({type: 'packsList/SET_MIN_MAX', value}) as const
export const setPageAC = (page: number) => ({type: "SET_PAGE", page}) as const

//Thunks

export const setPacksListTC = (params?: Partial<GetParamsType>) => (dispatch: Dispatch, getState: () => AppRootStateType) => {

    const allPacksList = getState().packs;
    const cardPacks = allPacksList.cardPacks;


    packsListAPI.getAllPacks({
        packName: (allPacksList.packName === '' ? params?.packName : allPacksList.packName),
        page: allPacksList.page,
        pageCount: allPacksList.pageCount,
        min: allPacksList.min,
        max: allPacksList.max,
        sortPacks: params?.sortPacks,
        user_id: params?.user_id,
    })
        .then(res => {
            dispatch(setPacksList(res.cardPacks))
            dispatch(setPacksTotalCount(res.cardPacksTotalCount))
            dispatch(setCurrentPage(res.page))
        })
}