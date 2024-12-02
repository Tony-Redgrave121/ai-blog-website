import React from 'react'
import style from "./style.module.css"
import formatCompact from "../../../utils/formats/formatCompact";

interface IStatBlockProps {
    stat: {
        count: number,
        title: string
    }
}

const StatBlock: React.FC<IStatBlockProps> = ({stat}) => {
    return (
        <div className={style.StatBlock}>
            <div>
                <h3>{formatCompact(stat.count)}<p>+</p></h3>
                <p>{stat.title}</p>
            </div>
        </div>
    )
}

export default StatBlock