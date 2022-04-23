import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';


type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export type ButtonPropsType = DefaultButtonPropsType & {
    onClick: () => void
    name: string
    hidden?: boolean
}

export const Button: React.FC<ButtonPropsType> = React.memo((
    {
        name,
        onClick,
        hidden
    }
) => {
    return (
        <button hidden={hidden} onClick={onClick}>{name}</button>
    )
})

