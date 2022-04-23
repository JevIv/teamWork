import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { Login } from "../../../n2-features/f1-pages/Login/Login";
import { SetPassword } from "../../../n2-features/f1-pages/Password/SetPassword";
import { Profile } from "../../../n2-features/f1-pages/Profile/Profile";
import { Registration } from "../../../n2-features/f1-pages/Register/Registration";
import { PageNotFound } from "../../../n2-features/f1-pages/404page/Error404";
import { PackName } from "../../../n2-features/f2-cards/c1-cards/c1-ui/CardsList";

export const PATH = {
    LOGIN:"/login/",
    REGISTER: "/register/",
    PROFILE: "/profile/",
    FORGOT: "/forgot/",
    SET_PASS: "/new-pass/",
    PACKS: "/c2-packs/",
    CARDS: "/c1-cards/",


    //доп. PATH
    PACK_NAME: "/pack-name"

}
export type PagesType = {
    _id: number;
    title: string;
    path: string;
    params?: string;
    exact?: boolean;
    page: ReactNode;
}

export const pages: PagesType[] = [
    {_id:0, title:"main", path:"/", exact: true, page: <Navigate to={PATH.LOGIN}/>},
    {_id:1, title:"login", path: PATH.LOGIN, exact: true, page: <Login/>},
    {_id:2, title:"register", path: PATH.REGISTER, exact: true, page: <Registration/>},
    {_id:3, title:"forgot", path: PATH.FORGOT, exact: true, page: <input/>},
    {_id:4, title:"set-pass", path: PATH.SET_PASS, params:"/:token", exact: true, page: <SetPassword/>},
    {_id:5, title:"profile", path: PATH.PROFILE,exact: true, page: <Profile/>},

    {_id:6, title:"error",exact: true, path: '*', page: <PageNotFound/>},
    //Седьмой будет для packs_list

    // {_id:8, title: "pack-name", path: PATH.PACK_NAME, page: <PackName/>}
]