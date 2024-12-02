import React from 'react'
import style from "./style.module.css"

interface ITripleContainerProps {
    children: React.ReactNode
}

const QuaternaryContainer: React.FC<ITripleContainerProps> = ({children}) => {
    return (
        <div className={style.QuaternaryContainer}>
            <div>
                {children}
            </div>
        </div>
    )
}

export default QuaternaryContainer