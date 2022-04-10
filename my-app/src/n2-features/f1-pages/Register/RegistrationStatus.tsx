import React from "react";
import { useSelector } from "react-redux";
import { Status } from "../../../n0-common/c1-iu/status/Status";
import { AppRootStateType } from "../../../store/store";

type RegistrationStatusPropsType = {
    firstVisit: boolean
}
export const RegistrationStatus: React.FC<RegistrationStatusPropsType> =  React.memo(({firstVisit})=>{
    
    const {statusLoading, statusDone, statusError} = useSelector((store:AppRootStateType)=> store.register)
    
    return (
        <Status loading={statusLoading} done={statusDone} error={statusError} firstVisit = {firstVisit}/>
    )
})