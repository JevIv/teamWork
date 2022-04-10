import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import { pages } from "../main/routes/Pages";
import style from "./Header.module.scss"

const NavLinkPage: React.FC<NavLinkProps> = React.memo((
    {
        ...props
    }
)=>{
    return <NavLink {...props}/>
})
const  NavLinkPages = pages.map(page=>{
    return (
    <NavLink
        key={"navLink-" + page._id}
        to ={(page.path || '/404/') + (page.params ? "/" : "")}>
        {page.title}
    </NavLink>)
})
export const Header = () => {
    return (
        <> 
        <header className={style.header}>
            {NavLinkPages}
        </header>
        </>
       
    )
}