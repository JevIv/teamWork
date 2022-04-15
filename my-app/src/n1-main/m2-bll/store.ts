import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {loginReducer} from "./s1-reducer/login-reducer";
import {profileReducer} from "./s1-reducer/profile-reducer";
import {registerReducer} from "./s1-reducer/register-reducer";
import {passwordReducer} from "./s1-reducer/pass-reducer";
import { AppReducer } from './s1-reducer/app-reducer';
import {packsListReducer} from '../../n2-features/f2-cards/c2-packs/p2-bll/packsList-reducer';
//не совсем пока понимаю почему ругается на импорт
// import { cardsListReducer } from '../../n2-features/f2-cards/c1-cards/c2-bll/CardsListReducer';
import {RegistrationActionType} from '../../n2-features/f1-pages/Register/RegistrationAction';



const rootReducer = combineReducers({
    login: loginReducer,
    profile: profileReducer,
    register: registerReducer,
    pass: passwordReducer,
    app: AppReducer,
//    тестовый
    packs: packsListReducer,
    // cards: cardsListReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppRootStateType = ReturnType<typeof rootReducer>

export type ActionsType = RegistrationActionType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, ActionsType>
// @ts-ignore
window.store = store;
