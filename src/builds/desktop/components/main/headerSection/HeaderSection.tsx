import React from 'react'
import style from "./style.module.css"
import {HiArrowUpRight, HiHeart, HiOutlineHeart} from "react-icons/hi2";
import formatCompact from "../../../../../utils/formats/formatCompact";
import Button from "../../buttons/Button";
import {VscSend} from "react-icons/vsc";

// interface ICrossing {
//     title: string,
//     subTitle: string,
//     desc: string,
// }

const HeaderSection = () => {
    const arr = [
        {
            section: [
                {
                    image: "img_1.png",
                    title: "Global Climate Summit Addresses Urgent Climate Action",
                    desc: "World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets.",
                    stat: [
                        {
                            name: "Category",
                            value: "Environment"
                        },
                        {
                            name: "Publication Date",
                            value: "October 10, 2023"
                        },
                        {
                            name: "Author",
                            value: "Jane Smith"
                        }
                    ],
                    likeCount: 14000,
                    replyCount: 204,
                    link: "/"
                }
            ]
        },
        {
            section: [
                {
                    image: "img_2.png",
                    title: "A Decisive Victory for Progressive Policies",
                    desc: "Politics",
                    stat: [],
                    likeCount: 2200,
                    replyCount: 60,
                    link: "/"
                },
                {
                    image: "img_3.png",
                    title: "Tech Giants Unveil Cutting-Edge AI Innovations",
                    desc: "Technology",
                    stat: [],
                    likeCount: 6000,
                    replyCount: 92,
                    link: "/"
                },
                {
                    image: "img_4.png",
                    title: "COVID-19 Variants",
                    desc: "Health",
                    stat: [],
                    likeCount: 10000,
                    replyCount: 124,
                    link: "/"
                }
            ]
        },
    ]

    return (
        <section className={style.HeaderSection}>
            {
                arr.map((section, index) => (
                    <div>
                        <div className={style.HeaderBlock}>
                            {
                                section.section.map(item => (
                                    <div
                                        className={item.stat.length > 0 ? style["WideSection"] : style["ShortSection"]}>
                                        <img src={require(`../../../../../utils/icons/main/headerSection/${item.image}`)}
                                            alt={item.title}/>
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
                                                            <div>
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
                ))
            }
        </section>
    )
}

export default HeaderSection