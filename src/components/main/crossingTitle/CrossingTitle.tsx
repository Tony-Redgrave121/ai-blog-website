import React from 'react'
import style from "./style.module.css"

interface ICrossing {
    title: string,
    subTitle: string,
    desc: string,
}

const CrossingTitle: React.FC<ICrossing> = ({title, subTitle, desc}) => {
    return (
        <section className={style.CrossingTitleSection}>
            <div>
                <h1>{title}</h1>
                <span>
                    <h1>{subTitle}</h1>
                    <p>{desc}</p>
                </span>
            </div>
        </section>
    )
}

export default CrossingTitle