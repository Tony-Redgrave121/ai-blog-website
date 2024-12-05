import React from 'react'
import style from "./style.module.css"

interface ITripleContainerProps {
    styles?: Array<string>,
    children: React.ReactNode
}

const QuaternaryContainer: React.FC<ITripleContainerProps> = ({styles, children}) => {
    return (
        <div className={`${style.QuaternaryContainer} ${styles?.map(el => style[el] + ' ')}`}>
            <div>
                {children}
            </div>
        </div>
    )
}

export default QuaternaryContainer