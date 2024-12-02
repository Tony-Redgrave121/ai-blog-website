import React, {useRef, useState} from 'react'
import style from "./style.module.css"
import {HiOutlinePlus, HiMinus} from "react-icons/hi2";
import { CSSTransition } from "react-transition-group"
import './animation.css'

interface IDescBlockProps {
    question: {
        title: string,
        desc: string,
    }
}

const DescBlock: React.FC<IDescBlockProps> = ({question}) => {
    const descBlock = useRef(null)
    const [descBlockState, setDescBlockState] = useState(false)

    return (
        <div>
            <div>
                <h3>{question.title}</h3>
                <CSSTransition nodeRef={descBlock} in={descBlockState} timeout={0} classNames="desc-block-node">
                    <div className={style.DescBlock} ref={descBlock}>
                        <hr/>
                        <p>{question.desc}</p>
                    </div>
                </CSSTransition>
            </div>
            <span><button type='button' onClick={() => setDescBlockState(!descBlockState)}>{descBlockState ?
                <HiMinus fill='white' /> : <HiOutlinePlus/>}</button></span>
        </div>
    )
}

export default DescBlock