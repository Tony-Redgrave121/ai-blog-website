import React from 'react'
import style from "./style.module.css"
import {HiStar} from "react-icons/hi2";

interface ITestimonialsProps {
    rating: number
}

const RateBlock: React.FC<ITestimonialsProps> = ({rating}) => {
    return (
        <span className={style.RateBlock}>
            {
                Array(rating).fill(0).map((_, index) => <HiStar key={index} size={24}/>)
            }
        </span>
    )
}

export default RateBlock