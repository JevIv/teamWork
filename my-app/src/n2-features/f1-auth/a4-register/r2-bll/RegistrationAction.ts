import { InferActionType } from "../../../../n1-main/m2-bll/action"

export type RegistrationActionType = InferActionType<typeof RegistrationAction>

export const RegistrationAction = {
    setLoading: (loading:boolean) => ({
        type: "register/SET_LOADING",
        loading,
    } as const),
    setSuccess: (success:boolean) => ({
        type: "register/SET_SUCCESS",
        success,
    } as const),
    setError: (error:string) => ({
        type: "register/SET_ERROR",
        error,
    } as const),
}