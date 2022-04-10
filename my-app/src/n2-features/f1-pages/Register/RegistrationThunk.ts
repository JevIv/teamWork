import { RegistrationAPI } from './RegistrationAPI';
import { ThunkAction } from "redux-thunk";
import { AppRootStateType } from "../../../store/store";
import { ExtraArgumentNya, ReturnVoid, tryCatch } from "../../../n1-main/m2-bll/thunk";
import { RegistrationAction, RegistrationActionType } from "./RegistrationAction";


export const signUp = (
    email: string, password: string, confirmPassword: string
): ThunkAction<ReturnVoid, AppRootStateType, ExtraArgumentNya, RegistrationActionType> => async (
    dispatch,
    // getStore: GetAppStoreType
) => {
    dispatch(RegistrationAction.setLoading(true));

    await tryCatch(
        async () => {
            if (password !== confirmPassword) dispatch(RegistrationAction.setError("Passwords don't match!"));
            else {
                const data = await RegistrationAPI.signUp(email,password)
                dispatch(RegistrationAction.setSuccess(true));
            }
        },
        (e) => dispatch(RegistrationAction.setError(e)),
    );
};