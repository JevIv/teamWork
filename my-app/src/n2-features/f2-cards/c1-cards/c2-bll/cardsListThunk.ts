import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AppRootStateType } from "../../../../n1-main/m2-bll/store";
import { ExtraArgumentNya, ReturnVoid, tryCatch } from "../../../../n1-main/m2-bll/thunk";
import { CardsListAPI } from "../c3-dal/CardAPI";
import { cardsActions, CardsActionTypes } from "./CardsListAction";

export const getCardsTC = (id:string): ThunkAction<ReturnVoid, AppRootStateType, ExtraArgumentNya
, CardsActionTypes> => async (dispatch: ThunkDispatch<AppRootStateType, ExtraArgumentNya, CardsActionTypes>) => {
    await tryCatch(
        async () => {
            const data = await  CardsListAPI.getCards(id);
            dispatch(getCardsTC(id))
        },
        (e)=>{
        }
    )
}