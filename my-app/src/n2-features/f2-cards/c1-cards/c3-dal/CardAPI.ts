import { AxiosResponse } from "axios";
import { instance } from "../../../../n1-main/m3-dal/instance"
// тоже ругается на импорт
// import { ParamsCardsType } from "../c2-bll/CardsListReducer";

export type CardType = {
    _id: string;
    cardsPack_id: string;
    user_id:string;

    answer: string;
    question: string;
    grade:number;
    shots:number;

    create: string;
    updated: string;

    //Почему в ТЗ помечены оранжевым??
    type: string;
    rating:number;
    __v:0;
}

export type CardsType = {
    cards: CardType[];
    cardsTotalCount: number;
    maxGrade: number;
    minGrade: number;
    page:number;
    pageCount:number;
    packUserId: string;
}


export type GetCardsPackType = {
    cards: CardType[];
    error:string;
}

export const CardsListAPI = {
    getCards: async (id:string) => {
        const response = await instance.get<CardType>(`/cards/card?cardsPack_id=${id}`+ "&pageCount=30")
        return response.data;
    }

    // getCards(params: ParamsCardsType){
    //     return instance.get<any,AxiosResponse<CardsType>, ParamsCardsType>('cards/card', {params}).then(res=> res.data.cards)
    // }
} 


