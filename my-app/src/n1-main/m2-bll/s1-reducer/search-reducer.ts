import {Dispatch} from "redux";
// import {searchAPI, SearchQueryType} from '../../../n1-main/m2-bll/s1-reducer/search-reducer.ts'
        //'../../../API/SearchAPI/search-api';



type ActionsType = ReturnType<typeof setSearcAC>
type InitialStateType = {
    searchName: string
}

const initialState: InitialStateType = {
    searchName: "",
}

export const searchReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        default:
            return state
    }
}

export const setSearcAC = (searchName: string)=> ({
    type: "SET_SEARCH",
    searchName,
});

//castles
// let datas :SearchQueryType;
//
// export const Search = () => (dispatch: Dispatch) => {
//
//     searchAPI.search(datas)
//         .then(data => {
//             //castles data.statusText
//             dispatch(setSearcAC(data.statusText))
//         })
//         .catch(e => {
//         })
// }