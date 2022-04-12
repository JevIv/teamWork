import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    withCredentials: true,
})


export const searchAPI = {
    search(params: SearchQueryType){
        return instance.get<SearchResponseType>(`/cards/pack`, {params})
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

export type SearchResponseType = {
    cardPacks: CardPackType[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
}

export type CardPackType = {
    _id: string
    user_id: string
    name: string
    cardsCount: number
    created: string
    updated: string
}