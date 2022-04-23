import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../n1-main/m2-bll/store';

export const initializedSelect = useSelector<AppRootStateType>(state => state.login.isAuth)