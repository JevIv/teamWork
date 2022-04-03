import React from "react";
import { Route, Routes } from "react-router-dom";
import { PageNotFound } from "../../../n2-features/f1-pages/404page/Error404";
import { Login } from "../../../n2-features/f1-pages/Login/Login";
import { Profile } from "../../../n2-features/f1-pages/Profile/Profile";
import { pages, PagesType } from "./Pages";


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
                {/* <Route path="/reset-pass/" element={<PasswordReset />}/>
                <Route path="/new-pass/" element={<NewPassword />}/>
                <Route path="/404/" element={<PageNotFound />}/>
                <Route path="/profile/" element={<Profile />}/>
                <Route path="/login/" element={<Login />}/> */}
                {RoutesPagesList}
            </Routes>
        </>
    )
}