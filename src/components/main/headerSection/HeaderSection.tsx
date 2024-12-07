import React from 'react'
import style from "./style.module.css"
import {HiArrowUpRight, HiHeart, HiOutlineHeart} from "react-icons/hi2";
import formatCompact from "../../../utils/formats/formatCompact";
import Button from "../generalComponents/buttons/Button";
import {VscSend} from "react-icons/vsc";
import BlurHashImage from "../generalComponents/blurhashImage/BlurHashImage";

interface ISection {
    section: Array<{
        image: string,
        hash: string,
        title: string,
        desc: string,
        stat: Array<
            {
                name: string,
                value: string
            }
        >,
        likeCount: number,
        replyCount: number,
        link: string
    }>
}

interface IHeaderSection {
    sections: Array<ISection>
    children?: React.ReactNode
}

const HeaderSection: React.FC<IHeaderSection> = ({sections, children}) => {
    return (
        <section className={style.HeaderSection}>
            {children}
            {
                sections && sections.map((section, index) => (
                    <div key={index}>
                        <div className={style.HeaderBlock}>
                            <div>
                                {
                                    section.section.map(item => (
                                        <div className={item.stat.length > 0 ? style["WideSection"] : style["ShortSection"]} key={item.title}>
                                            <BlurHashImage imagePath={`images/headerSection/${item.image}`} hash={item.hash}></BlurHashImage>
                                            <div>
                                                <div>
                                                    <h2>{item.title}</h2>
                                                    <p>{item.desc}</p>
                                                </div>
                                                {
                                                    item.stat.length > 0 &&
                                                    <div className={style.StatContainer}>
                                                        {
                                                            item.stat.map(stat => (
                                                                <div key={stat.name}>
                                                                    <p>{stat.name}</p>
                                                                    <p>{stat.value}</p>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                }
                                                <div>
                                                <span>
                                                    <Button foo={() => {
                                                    }} type={["PostButton"]}>{0 ? <HiHeart color="#FF5500"/> :
                                                        <HiOutlineHeart/>} {formatCompact(item.likeCount)}</Button>
                                                    <Button foo={() => {
                                                    }} type={["PostButton"]}><VscSend/> {formatCompact(item.replyCount)}</Button>
                                                </span>
                                                    <Button foo={() => {
                                                    }}>Read More {item.stat.length === 0 && <HiArrowUpRight/>}</Button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}

export default HeaderSection