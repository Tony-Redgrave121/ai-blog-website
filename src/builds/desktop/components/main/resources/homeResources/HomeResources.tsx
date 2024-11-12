import React from 'react'
import style from "./style.module.css"
import Button from "../../../buttons/Button";
import {HiArrowUpRight} from "react-icons/hi2";
import formatCompact from "../../../../../../utils/formats/formatCompact";
import {HiOutlineEye} from "react-icons/hi2";
import Developer from '../../heroSection/developer/Developers'
import IHomeResources from "../../../../../../utils/types/IHomeResources";

interface IResourcesProps {
    resources: Array<IHomeResources>
}

const HomeResources: React.FC<IResourcesProps> = ({resources}) => {
    return (
        <>
            {
                resources && resources.map(resource => (
                    <div key={resource.resourceTitle}>
                        <div className={style.ResourceContainerLeft}>
                            <div>
                                <img src={require(`../../../../../../utils/icons/main/topics/${resource.resourceImage}.svg`)} alt={resource.resourceTitle}/>
                                <div>
                                    <h1>{resource.resourceTitle}</h1>
                                    <p>{resource.resourceDesc}</p>
                                </div>
                                <Button foo={() => {}} type={["ActiveSelectButton"]}>Download {resource.resourceTitle} Now <HiArrowUpRight/></Button>
                                <div>
                                    <div>
                                        <div className={style.TextBlock}>
                                            <p>Downloaded By</p>
                                            <h2>{formatCompact(10000)} + {resource.resourceDownloads}</h2>
                                        </div>
                                        <Developer type="DeveloperTopicBlock"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.ResourceContainerRight}>
                            <span>
                                <h2>{resource.resourceTopicTitle}</h2>
                                <p>{resource.resourceTopicDesc}</p>
                            </span>
                            <img src={require(`../../../../../../utils/icons/main/topics/image/${resource.resourceTopicImage}`)} alt={resource.resourceTopicTitle}/>
                            <div>
                                <div className={style.TextBlock}>
                                    <p>Total {resource.resourceTitle}</p>
                                    <h2>Over {resource.resourceTotal} {resource.resourceTitle.toLowerCase()}</h2>
                                </div>
                                <div className={style.DownloadBlock}>
                                    <div className={style.TextBlock}>
                                        <p>Download Formats</p>
                                        <h2>PDF format for access.</h2>
                                    </div>
                                    <span>
                                        <Button foo={() => {}}>
                                            Preview <HiOutlineEye/>
                                        </Button>
                                    </span>
                                </div>
                                <div className={style.TextBlock}>
                                    <p>Average Author Expertise</p>
                                    <h2>{resource.resourceExpertise}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default HomeResources