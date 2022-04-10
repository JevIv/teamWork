import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { Login } from "../../../../n2-features/f1-auth/Login/Login";
import { SetPassword } from "../../../../n2-features/f1-auth/a2-password/SetPassword";
import { Profile } from "../../../../n2-features/f1-auth/a3-profile/Profile";
import { PageNotFound } from "../../../../n2-features/f1-auth/a1-404page/Error404";
import { RegistrationForm } from "../../../../n2-features/f1-auth/a4-register/r1-ui/RegistrationPage";

export const PATH = {
    LOGIN:"/login/",
    REGISTER: "/register/",
    PROFILE: "/profile/",
    FORGOT: "/forgot/",
    SET_PASS: "/new-pass/",
    PACKS: "/packs/",
    CARDS: "/cards/"

}
export type PagesType = {
    _id: number;
    title: string;
    path?: string;
    params?: string;
    exact?: boolean;
    page: ReactNode;
}

export const pages: PagesType[] = [
    {_id:0, title:"main", path:"/", exact: true, page: <Navigate to={PATH.LOGIN}/>},
    {_id:1, title:"login", path: PATH.LOGIN, exact: true, page: <Login/>},
    {_id:2, title:"register", path: PATH.REGISTER, exact: true, page: <RegistrationForm/>},
    {_id:3, title:"forgot", path: PATH.FORGOT, exact: true, page: <input/>},
    {_id:4, title:"set-pass", path: PATH.SET_PASS, params:"/:token", exact: true, page: <SetPassword/>},
    {_id:5, title:"profile", path: PATH.PROFILE, params:"/:id" ,exact: true, page: <Profile/>},
    {_id:6, title:"error",exact: true, page: <PageNotFound/>},

]