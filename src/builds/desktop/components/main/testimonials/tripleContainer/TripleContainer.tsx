import React from 'react'
import style from "./style.module.css"

interface ITripleContainerProps {
    children: React.ReactNode
}

const TripleContainer: React.FC<ITripleContainerProps> = ({children}) => {
    return (
        <div className={style.TripleContainer}>
            <div>
                {children}
            </div>
        </div>
    )
}

export default TripleContainer