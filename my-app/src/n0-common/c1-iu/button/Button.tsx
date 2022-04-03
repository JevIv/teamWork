import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";



type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export type ButtonPropsType = DefaultButtonPropsType;

export const Button: React.FC<ButtonPropsType> =React.memo((
    {
        ...props
    }
 ) => {
     return (
        <button {...props}/>     
    )
})

