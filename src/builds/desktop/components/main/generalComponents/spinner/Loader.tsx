import React from 'react'
import style from "./style.module.css"

const Loader = () => {
    return (
        <div className={style.LoaderContainer}>
            <div className={style.Loader}></div>
        </div>
    )
}

export default Loader