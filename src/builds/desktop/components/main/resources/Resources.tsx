import React from 'react'
import style from "./style.module.css"
import Button from "../../buttons/Button";
import {HiArrowUpRight} from "react-icons/hi2";
import formatCompact from "../../../../../utils/formats/formatCompact";
import { HiOutlineEye } from "react-icons/hi2";
import Developer from '../hero-section/developer/Developers'

// interface IParams {
//     title: string,
//     desc: string
// }
//
// interface IBlog {
//     icon: string,
//     title: string,
//     desc: string,
//     params: Array<IParams>,
// }
// {icon, desc, title, params}

const page = [
    {
        resourceId: "resource_1",
        image: "topic_1",
        title: "Ebooks",
        desc: "Explore our collection of ebooks covering a wide spectrum of future technology topics.",
        downloadCount: 10000,
        developers: ["developer_5", "..."],
        topic: "Variety of Topics",
        topicDesc: "Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).",
        topicImage: "topic_1.png",
        topicTotal: 100,
        topicExpertise: "Ebooks are authored by renowned experts with an average of 15 years of experience"
    }
]

const Resources = () => {
    return (
        <div className={style.TopicContainer}>
            <div className={style.TopicContainerLeft}>
                <div>
                    <img src={require(`../../../../../utils/icons/main/topics/topic_1.svg`).default} alt="topic"/>
                    <div>
                        <h1>Ebooks</h1>
                        <p>Explore our collection of ebooks covering a wide spectrum of future technology topics.</p>
                    </div>
                    <Button foo={() => {
                    }} type={["ActiveSelectButton"]}>Download Ebooks Now <HiArrowUpRight/></Button>
                    <div>
                        <div>
                            <div className={style.TextBlock}>
                                <p>Downloaded By</p>
                                <h2>{formatCompact(10000)} + Users</h2>
                            </div>
                            <Developer type="DeveloperTopicBlock"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.TopicContainerRight}>
                <span>
                    <h2>Variety of Topics</h2>
                    <p>Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).</p>
                </span>
                <img src={require("../../../../../utils/icons/main/topics/image/image_1.png")} alt="image_1"/>
                <div>
                    <div className={style.TextBlock}>
                        <p>Downloaded By</p>
                        <h2>Over 100 ebooks</h2>
                    </div>
                    <div className={style.DownloadBlock}>
                        <div className={style.TextBlock}>
                            <p>Download Formats</p>
                            <h2>PDF format for access.</h2>
                        </div>
                        <span><Button foo={() => {}}>Preview <HiOutlineEye/> </Button></span>
                    </div>
                    <div className={style.TextBlock}>
                        <p>Average Author Expertise</p>
                        <h2>Ebooks are authored by renowned experts with an average of 15 years of experience</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resources