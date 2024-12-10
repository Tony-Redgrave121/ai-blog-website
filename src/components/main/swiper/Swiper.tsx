import React, {useEffect, useRef, useState} from 'react'
import style from "./style.module.css"
import BlurHashImage from "../generalComponents/blurhashImage/BlurHashImage";
import Button from "../generalComponents/buttons/Button";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2"
import {useAppSelector} from "../../../utils/hooks/redux";
import ISwiper from "../../../utils/types/ISwiper";

const Swiper: React.FC<{swiper: Array<ISwiper>}> = ({swiper}) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [swiperLength, setSwiperLength] = useState(0)
    const boxRef = useRef<HTMLDivElement>(null)
    const isMobile = useAppSelector(state => state.user.isMobile)

    const handleSwipe = (index: number) => {
        if (boxRef.current && index >= 0 && index < swiperLength) {
            let toSwipe = (boxRef.current.children[0].getBoundingClientRect().width + 20) * index
            boxRef.current.style.transform = `translateX(${-toSwipe}px)`
            setActiveIndex(index)
        }
    }

    const ButtonBlock = (() =>
        <span>
            <Button foo={() => {}} type={["SelectButton"]}>View Details</Button>
            <Button foo={() => {}} type={["SelectButton"]}>Download PDF Now</Button>
        </span>
    )

    const SwipeBlock = (() =>
        <div className={style.SwipeBlock}>
            {activeIndex !== 0 &&
                <button onClick={() => handleSwipe(activeIndex - 1)} className={style.LeftButton}><HiChevronLeft/></button>
            }
            {activeIndex < swiperLength - 1 &&
                <button onClick={() => handleSwipe(activeIndex + 1)} className={style.RightButton}><HiChevronRight/></button>
            }
        </div>
    )

    useEffect(() => {
        isMobile ? setSwiperLength(swiper.length) : setSwiperLength(swiper.length - 2)
    }, [isMobile, swiper.length])

    return (
        <div className={style.SwiperContainer}>
            <div>
                <div ref={boxRef}>
                    {
                        swiper.map(item =>
                            <article key={item.resourceTopicTitle}>
                            <BlurHashImage imagePath={`images/topics/${item.resourceTopicImage}`} hash={item.hash} alt={item.resourceTopicTitle}/>
                                <h2>{item.resourceTopicTitle}</h2>
                                <p>{item.resourceTopicDesc}</p>
                                <ButtonBlock />
                            </article>
                        )
                    }
                </div>
                <SwipeBlock />
            </div>
            <div className={style.ControlBlock}>
                {
                    Array.from({length: swiperLength}).map((_, index) =>
                        <button className={activeIndex === index ? style.ActiveButton : ''} onClick={() => handleSwipe(index)} key={index}></button>
                    )
                }
            </div>
        </div>
    )
}

export default Swiper