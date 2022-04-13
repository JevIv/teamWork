import React from "react";
import { Route, Routes } from "react-router-dom";
import { PageNotFound } from "../../../n2-features/f1-pages/404page/Error404";
import { Login } from "../../../n2-features/f1-pages/Login/Login";
import { Profile } from "../../../n2-features/f1-pages/Profile/Profile";
import { pages, PagesType } from "./Pages";
import {EditProfile} from '../../../n2-features/f1-pages/Profile/EditProfile/EditProfile';
import {PacksList} from '../../../n2-features/f2-cards/c2-packs/p1-ui/u1-packsList/PacksList';


const  RoutesPagesList = pages.map((page: PagesType) =>{
    return (<Route 
        key={'route-' + page._id}
        path = {page.path || ''} 
        element = {page.page}
    />)
})
export const RoutesFunc = () => {
    return (
        <>
            <Routes>
                {/*<Route path="/reset-pass/" element={<PasswordReset />}/>
                <Route path="/new-pass/" element={<NewPassword />}/>
                <Route path="/404/" element={<PageNotFound />}/>
                <Route path="/profile/" element={<Profile />}/>
                <Route path="/login/" element={<Login />}/>*/}
                {/*путь на страницу редактирования профайла*/}
                {/*<Route path="/uni/" element={<Uni />}/>*/}
                <Route path="/userinfo/" element={<EditProfile />}/>
                {/*<Route path="/packslist" element={<PacksList />}/>*/}
                {RoutesPagesList}
            </Routes>
        </>
    )
}