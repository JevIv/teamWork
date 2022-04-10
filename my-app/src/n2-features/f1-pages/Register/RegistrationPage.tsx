import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { PATH } from '../../../n1-main/m1-ui/routes/Pages';
import { RegistrationAction } from "./RegistrationAction"
import { Registration } from "./Registration"
import { RegistrationStatus } from "./RegistrationStatus"
import { Navigate } from "react-router-dom"
import { AppRootStateType } from "../../../store/store";


export const RegistrationForm = () => {
    const dispatch = useDispatch();
    const {success, error} = useSelector((store:AppRootStateType) => store.register)
    const [redirect, setRedirect] = useState<boolean>(false);
    const [first, setFirst] = useState<boolean>(true);

    // useEffect(()=> {
    //     if (first) {
    //         if (error || success) dispatch(RegistrationAction.setError(''));
    //         setFirst(true);
    //     } else {
    //         if (success && !redirect) setTimeout(()=> setRedirect(true), 500);
    //     }
    // })
    if (redirect && success && !first) return <Navigate to={PATH.LOGIN}/>
    return (
        <>
            <RegistrationStatus firstVisit={first}/>
            <Registration/>
        </>
    )
}