import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    withCredentials: true,
})


export const searchAPI = {
    search(data: SearchQueryType){
        return instance.get<SearchResponseType>(`/cards/pack
        ?packName=${data.packName}
        &min=${data.min}
        &max=${data.max}
        &sortPacks=${data.sortPacks}
        &page=${data.page}
        &pageCount=${data.pageCount}
        &user_id=${data.user_id}`)
    }
}


export type SearchQueryType ={
    packName?: string
    min?: number
    max?: number
    sortPacks?: string
    page?: number
    pageCount?: number
    user_id: string
}

type SearchResponseType = {
    cardPacks: cardPacksType
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
}

type cardPacksType = cardPack[]

type cardPack = {
    _id: string
    user_id: string
    name: string
    cardsCount: number
    created: string
    updated: string
}