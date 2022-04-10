import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import { pages } from "../routes/Pages";
import style from "./Header.module.scss"

const NavLinkPage: React.FC<NavLinkProps> = React.memo((
    {
        ...props
    }
)=>{
    return <NavLink {...props}/>
})
const  NavLinkPages = pages.map(page=>{
    return (<NavLink
        key={"navLink-" + page._id}
        to ={(page.path || '/404/') + (page.params ? "/" : "")}>
        {page.title}
    </NavLink>)
})
export const Header = () => {
    return (
        <> 
        <header className={style.header}>
            {/* <NavLink to ={'/reset-pass/'}>
                Reset password
            </NavLink>
            <NavLink to ={'/new-pass/'}>
               New password
            </NavLink>
            <NavLink to ={'/profile/'}>
                Profile
            </NavLink>
            <NavLink to ={'/login/'}>
                Login
            </NavLink>
            <NavLink to ={'/404/'}>
                Error 404
            </NavLink> */}
            {NavLinkPages}
        </header>
        </>
       
    )
}