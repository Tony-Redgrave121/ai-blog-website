import React from 'react'
import style from "./style.module.css"

interface ICrossingButtonBlockProps {
    children: React.ReactNode,
}

const CrossingButtonBlock: React.FC<ICrossingButtonBlockProps> = ({children}) => {
    return (
        <div className={style.CrossingButtonBlock}>
            {children}
        </div>
    )
}

export default CrossingButtonBlock