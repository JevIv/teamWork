import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useCallback } from "react";
import style from './Input.module.scss';


type StyleInput = '_registration' | '_card' | string 

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;


export type InputPropsType = DefaultInputPropsType & {
    onChangeText?: (value:string)=> void
    onEnter?: () => void
    inputRegistration?: StyleInput
}


export const Input: React.FC<InputPropsType> = React.memo((
    {
        type,
        onChange,
        onChangeText,
        inputRegistration,
        className,
        ...props
    }
) => {
    const onChangeCallback = useCallback((e: ChangeEvent<HTMLInputElement>)=>{
        onChange && onChange(e);
        onChangeText && onChangeText(e.currentTarget.value)
    },[onChange, onChangeText])
    const changeStyleInput = `${inputRegistration === '_registration'? style.input : className}`
    return (
        <input 
            className={changeStyleInput}
            onChange={onChangeCallback}
            {...props}
        />
    )
})