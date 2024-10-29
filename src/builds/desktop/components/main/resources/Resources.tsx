import React, {useEffect} from 'react'
import style from "./style.module.css"
import Button from "../../buttons/Button";
import {HiArrowUpRight} from "react-icons/hi2";
import formatCompact from "../../../../../utils/formats/formatCompact";
import { HiOutlineEye } from "react-icons/hi2";
import Developer from '../hero-section/developer/Developers'

interface IResource {
    resourceId: string,
    image: string,
    title: string,
    desc: string,
    downloadCount: number,
    developers: Array<string>,
    topic: string,
    topicDesc: string,
    topicImage: string,
    topicTotal: number,
    topicExpertise: string
}

const Resources = () => {
    const [resources, setResources] = React.useState<Array<IResource>>()

    useEffect(() => {
        fetch("http://localhost:3000//server/resources/resources.json")
            .then(response => {
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)
                return response.json()
            })
            .then(resources => setResources(resources))
    }, [])

    return (
        <>
            {
                resources && resources.map(resource => (
                    <div className={style.ResourceContainer} key={resource.title}>
                        <div className={style.ResourceContainerLeft}>
                            <div>
                                <img src={require(`../../../../../utils/icons/main/topics/${resource.image}.svg`)}
                                     alt={resource.title}/>
                                <div>
                                    <h1>{resource.title}</h1>
                                    <p>{resource.desc}</p>
                                </div>
                                <Button foo={() => {
                                }} type={["ActiveSelectButton"]}>Download {resource.title} Now <HiArrowUpRight/></Button>
                                <div>
                                    <div>
                                        <div className={style.TextBlock}>
                                            <p>Downloaded By</p>
                                            <h2>{formatCompact(10000)} + {resource.downloadCount}</h2>
                                        </div>
                                        <Developer type="DeveloperTopicBlock"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.ResourceContainerRight}>
                            <span>
                                <h2>{resource.topic}</h2>
                                <p>{resource.topicDesc}</p>
                            </span>
                            <img src={require(`../../../../../utils/icons/main/topics/image/${resource.topicImage}`)} alt={resource.topic}/>
                            <div>
                                <div className={style.TextBlock}>
                                    <p>Total {resource.title}</p>
                                    <h2>Over {resource.topicTotal} {resource.title.toLowerCase()}</h2>
                                </div>
                                <div className={style.DownloadBlock}>
                                    <div className={style.TextBlock}>
                                        <p>Download Formats</p>
                                        <h2>PDF format for access.</h2>
                                    </div>
                                    <span><Button foo={() => {
                                    }}>Preview <HiOutlineEye/> </Button></span>
                                </div>
                                <div className={style.TextBlock}>
                                    <p>Average Author Expertise</p>
                                    <h2>{resource.topicExpertise}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Resources