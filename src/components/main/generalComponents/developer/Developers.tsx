import React, {memo} from 'react'
import style from "./style.module.css"
import developers from "./developers.json"
import BlurHashImage from "../../generalComponents/blurhashImage/BlurHashImage";

interface IDeveloper {
    type?: string
}

const Developers: React.FC<IDeveloper> = memo(({type}) => {
    return (
        <div className={style.DeveloperContainer}>
            <div className={`${style.DeveloperBlock} ${type ? style[type] : null}`}>
                {
                    developers.map(developer => (
                        <BlurHashImage imagePath={`images/developers/${developer.developer}`} hash={developer.hash} alt={developer.developer} key={developer.developer}></BlurHashImage>
                    ))
                }
            </div>
        </div>
    )
})

export default Developers