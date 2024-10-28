import React from 'react'
import style from "./style.module.css"

interface ICrossing {
    desc: string,
    title: string,
    children?: React.ReactNode,
}

const Crossing: React.FC<ICrossing> = ({desc, title, children}) => {
    return (
        <div className={style.CrossingContainer}>
            <div>
                <span>
                    <p>{desc}</p>
                </span>
                <h1>{title}</h1>
            </div>
            { children ? <div className={style.ButtonBlock}>{children}</div> : null }
        </div>
    )
}

export default Crossing