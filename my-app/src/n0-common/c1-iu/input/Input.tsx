import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useCallback } from "react";
import style from './Input.module.scss';


type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;


export type InputPropsType = DefaultInputPropsType & {
    onChangeText?: (value:string)=> void
    onEnter?: () => void
}


export const InputTxt: React.FC<InputPropsType> = React.memo((
    {
        type,
        onChange,
        onChangeText,
        className,
        ...props
    }
) => {
    const onChangeCallback = useCallback((e: ChangeEvent<HTMLInputElement>)=>{
        onChange && onChange(e);
        onChangeText && onChangeText(e.currentTarget.value)
    },[onChange, onChangeText])

    return (
        <input 
            onChange={onChangeCallback}
            {...props}
        />
    )
})