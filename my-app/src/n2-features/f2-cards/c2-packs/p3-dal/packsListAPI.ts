import { instance } from "../../../../n1-main/m3-dal/instance"


export const packsListAPI = {
    getAllPacks(params?: Partial<GetParamsType>) {
        return instance.get<PacksListResponseType>('/cards/pack', {params})
            .then(res=> res.data.cardPacks)
    }
}

export type GetParamsType = {
    min: number
    max: number
    sortPacks: string
    page: number
    pageCount: number
    user_id: string
}

export type PacksListResponseType = {
    cardPacks: CardPacksType[],
    page: number,
    pageCount: number
    cardPacksTotalCount: number,
    minCardsCount: number,
    maxCardsCount: number,
    token: string,
    tokenDeathTime: number
}

export type CardPacksType = {
    _id: string,
    user_id: string,
    user_name: string,
    private: boolean,
    name: string,
    path: string,
    grade: number,
    shots: number,
    cardsCount: number,
    type: string,
    rating: number,
    created: string,
    updated: string,
    more_id: string,
    __v: number
}
