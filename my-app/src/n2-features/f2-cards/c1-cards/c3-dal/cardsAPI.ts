import { instance } from "../../../../n1-main/m3-dal/instance"

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

export const cardsListAPI = {
    getCards(getCardsPack_id: Partial<CardType>){
        return instance.get<GetCardsPackType>(`cards/card?cardsPack_id=${getCardsPack_id}` + '&pageCount=10')
        .then(res=> res.data.cards)
    }
} 


