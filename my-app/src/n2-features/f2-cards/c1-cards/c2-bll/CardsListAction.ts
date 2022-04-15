
import { InferActionType } from "../../../../n1-main/m2-bll/action"
import { CardType } from "../c3-dal/CardAPI"

export type CardsActionTypes = InferActionType<typeof cardsActions>

export const cardsActions = {
    setCards: (cards: CardType[]) => ({
        type: "cards/SET_CARDS",
        payload: {cards}
    } as const),
    setLoading: (loading: boolean) => ({
        type: "cards/SET_LOADING",
        payload: {loading}
    } as const),
    setError: (error: string) => ({
        type: "cards/SET_ERROR",
        payload:{error}
    } as const),
    setCardsCount: (cardsCount:number) => ({
        type: "cards/SET_CARDS_COUNT", 
        payload:{cardsCount}
    } as const),
    setCardsPageCount: (cardsPageCount: number) => ({
        type: "cards/SET_CARDS_PAGE_COUNT",
        payload:{cardsPageCount}
    } as const),
    setCurrentPage: (currentPage: number) => ({
        type: "cards/SET_CURRENT_PAGE",
        payload:{currentPage}
    }as const)
}