import { CardsType } from "../c3-dal/CardAPI"
import { CardsActionTypes} from "./CardsListAction"

export type ParamsCardsType = {
        cardsPack_id: string,
        cardsAnswer: string,
        cardsQuestion: string,
        cardsGrade: number,
        cardsShot: number,
        page: number,
        pageCount: number,
        minCards: number,
        maxCards: number
}

const cardsInitState = {
    cards: [] as CardsType[],
    packName: '',
    params: {
        cardsPack_id:'',
        cardsAnswer: '',
        cardsQuestion: '',
        cardsGrade: 5,
        cardsShot: 5,
        page: 1,
        pageCount: 10,
        minCards: 4,
        maxCards: 60
    } as ParamsCardsType,
    cardPacksTotalCount:50,
    error: '',
}
export type CardsInitStateType = typeof cardsInitState

export const cardsListReducer = (state: CardsInitStateType=cardsInitState, action: CardsActionTypes): CardsInitStateType => {
    switch(action.type){
        case 'cards/SET_CARDS': {
            return {
                ...state,
                ...action.payload.cards
            }
        }
        default:{
            return state
        }
    }
}

