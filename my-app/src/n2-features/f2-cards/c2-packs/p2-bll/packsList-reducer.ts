import {CardPacksType, GetParamsType, packsListAPI} from '../p3-dal/packsListAPI';
import {Dispatch} from 'redux';
import {AppRootStateType} from '../../../../n1-main/m2-bll/store';
import {setStatus} from '../../../../n1-main/m2-bll/s1-reducer/app-reducer';
import {ThunkAction} from 'redux-thunk';


type InitialStateType = {
    cardPacks: CardPacksType[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
    packName: string
    min: number
    max: number
    sortPacks: string | null
    user_id: string

}

const initialState: InitialStateType = {
    cardPacks: [],
    cardPacksTotalCount: 0,
    maxCardsCount: 0,
    minCardsCount: 0,
    page: 1,
    pageCount: 7,
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
        case 'SET_PAGE':
            return {...state, page: action.page}
        case 'SET_USER_ID':
            return {...state, user_id: action.userId}
        case 'SET_SORT':
            return {...state, sortPacks: action.sortOption}
        case 'SET_NEW_PACK_NAME':
            return {...state,
                cardPacks: state.cardPacks.map(cards => cards._id === action.packId ? {
                    ...cards,
                    name: action.newName
                } : cards)
            }
        default:
            return state
    }
}

//Actions

type ActionsPacklistType = SetPacksListAcType
    | SetSearchAcType
    | SetPacksTotalCountType
    | SetCurrentPageType
    | SetMinMaxType
    | SetPageAcType
    | SetUserIdType
    | SetSortType
    | SetNewPackNameType

type SetPacksListAcType = ReturnType<typeof setPacksList>
type SetSearchAcType = ReturnType<typeof setSearchAC>
type SetPacksTotalCountType = ReturnType<typeof setPacksTotalCount>
type SetCurrentPageType = ReturnType<typeof setCurrentPage>
type SetMinMaxType = ReturnType<typeof setMinMax>
type SetPageAcType = ReturnType<typeof setPageAC>
type SetUserIdType = ReturnType<typeof setUserId>
type SetSortType = ReturnType<typeof setSort>
type SetNewPackNameType = ReturnType<typeof setNewPackName>

export const setPacksList = (packsList: CardPacksType[]) => ({type: 'packsList/SET_PACKLIST', packsList}) as const
export const setSearchAC = (packName: string) => ({type: 'packsList/SET_SEARCH', packName}) as const
export const setPacksTotalCount = (totalPacks: number) => ({type: 'packsList/SET_TOTAL_PACKS', totalPacks}) as const
export const setCurrentPage = (currentPage: number) => ({type: 'packsList/SET_CURRENT_PAGE', currentPage}) as const
export const setMinMax = (value: number[]) => ({type: 'packsList/SET_MIN_MAX', value}) as const
export const setPageAC = (page: number) => ({type: 'SET_PAGE', page}) as const
export const setUserId = (userId: string) => ({type: 'SET_USER_ID', userId}) as const
export const setSort = (sortOption: string | null) => ({type: 'SET_SORT', sortOption}) as const
export const setNewPackName = (packId: string, newName: string) => ({
    type: 'SET_NEW_PACK_NAME',
    packId,
    newName
}) as const

//Thunks

export const setPacksListTC = (params?: Partial<GetParamsType>, location?: string) => (dispatch: Dispatch, getState: () => AppRootStateType) => {

    const allPacksList = getState().packs;

    dispatch(setStatus('loading'))

    packsListAPI.getAllPacks({

        packName: allPacksList.packName,
        page: allPacksList.page,
        pageCount: allPacksList.pageCount,
        min: allPacksList.min,
        max: allPacksList.max,
        sortPacks: allPacksList.sortPacks as string,
        user_id: location === 'profile' ? params?.user_id : allPacksList.user_id

    })
        .then(res => {
            dispatch(setPacksList(res.cardPacks))
            dispatch(setPacksTotalCount(res.cardPacksTotalCount))
            dispatch(setCurrentPage(res.page))
        })
        .catch(e => {
            console.log(e)
        })
        .finally(() => {
            dispatch(setStatus('idle'))
        })
}

export const deletePack = (packId: string, id: string, location?: string): ThunkAction<void, AppRootStateType, unknown, ActionsPacklistType> => async (dispatch) => {
    try {
        const res = await packsListAPI.deletePack(packId)
        dispatch(setPacksListTC({user_id: id}, location))
    } catch (e) {
        console.log(e)
    }
}

export const addNewPackTC = (name: string): ThunkAction<void, AppRootStateType, unknown, ActionsPacklistType> => async (dispatch) => {
    try {
        const res = await packsListAPI.addNewPack(name)
        dispatch(setPacksListTC())
    } catch (e) {
        console.log(e)
    }
}

export const editNewNameTC = (packId: string, newName: string): ThunkAction<void, AppRootStateType, unknown, ActionsPacklistType> => async (dispatch) => {
    try {
        const res = await packsListAPI.editPack(packId, newName)
        //???????? ???????????????? ?? ?????????? ????????
        // dispatch(setPacksListTC())
        dispatch(setNewPackName(res.data.updatedCardsPack._id, res.data.updatedCardsPack.name))

    } catch (e) {
        console.log(e)
    }
}
