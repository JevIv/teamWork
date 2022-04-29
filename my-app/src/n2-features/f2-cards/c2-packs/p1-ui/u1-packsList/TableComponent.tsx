import React, {useEffect} from 'react';
// import s from '../../../c1-cards/c1-ui/PacksInfo.module.css';
// import dayjs from 'dayjs';
// import {CardPacksType} from '../../p3-dal/packsListAPI';
// import {useDispatch, useSelector} from 'react-redux';
// import {setPacksListTC, setSort} from '../../p2-bll/packsList-reducer';
// import {AppRootStateType} from '../../../../../n1-main/m2-bll/store';
// import {StatusType} from '../../../../../n1-main/m2-bll/s1-reducer/app-reducer';
// import {ProgressBar} from '../../../../../n0-common/c1-iu/PrgressBar/ProgressBar';
//
// type TableComponentType = {
//     packs: CardPacksType[]
// }
//
// export const TableComponent = ({packs}: TableComponentType) => {
//     const dispatch = useDispatch()
//
//     const status = useSelector<AppRootStateType, StatusType>(state => state.app.status);
//     const sortPacks = useSelector<AppRootStateType, string | null>(state => state.packs.sortPacks);
//
//     const formatDate = (date: string): string => dayjs(date).format('DD.MM.YYYY')
//
//     const sortParams = {
//         sortLow: '0updated',
//         sortHigh: '1updated'
//     }
//
//     const onClickHandler = () => {
//         if(sortPacks === null){
//             return dispatch(setSort(sortParams.sortLow))
//         }
//         if(sortPacks === '0updated'){
//             return dispatch(setSort(sortParams.sortHigh))
//         }
//         if(sortPacks === '1updated'){
//             return dispatch(setSort(sortParams.sortLow))
//         }
//     }
//
//     return (
//         <table className={s.tableStyle}>
//             <thead>
//             <tr>
//                 <td>Name</td>
//                 <td onClick={onClickHandler}>Cards</td>
//                 <td>Updated</td>
//                 <td>Created</td>
//                 <td>Actions</td>
//             </tr>
//             </thead>
//             <tbody>
//             {
//                 status === 'loading'
//                     ? <ProgressBar/>
//                     : packs.map(p => {
//                             return (
//                                 <tr key={p._id}>
//                                     <td>{p.name}</td>
//                                     <td>{p.cardsCount}</td>
//                                     <td>{formatDate(p.updated)}</td>
//                                     <td>{p.user_name}</td>
//                                     <td>
//                                         <button>Delete</button>
//                                         <button>Edit</button>
//                                         <button>Learn</button>
//                                     </td>
//                                 </tr>
//                             )
//                         }
//                     )
//             }
//             </tbody>
//         </table>
//        );
// };
//
