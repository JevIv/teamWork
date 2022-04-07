import React from "react";
import { Header } from '../header/Header';
import { RoutesFunc } from "./routes/Routes";

export const Main = () => {
    return (
        <>
            <Header />
            <RoutesFunc />
        </>
    )
}