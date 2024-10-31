import React from 'react'
import style from "./style.module.css"
import developers from "../json/developers.json"

interface IDeveloper {
    type?: string
}

const Developers: React.FC<IDeveloper> = ({type}) => {
    return (
        <div className={style.DeveloperContainer}>
            <div className={`${style.DeveloperBlock} ${type ? style[type] : null}`}>
                {
                    developers.map(developer => (
                        <img src={require(`../../../../../../utils/icons/main/developers/${developer.developer}.png`)} alt={developer.developer} key={developer.developer}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Developers