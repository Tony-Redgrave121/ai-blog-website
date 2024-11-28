import React, {useEffect} from 'react'
import style from "./style.module.css"
import IResource from "../../../../../utils/types/IResource";
import formatShortDate from "../../../../../utils/formats/formatShortDate";
import {HiArrowUpRight} from "react-icons/hi2";
import Button from "../../buttons/Button";
import ResourceContainer from "../generalComponents/resourceContainer/ResourceContainer";
import TripleContainer from "../testimonials/tripleContainer/TripleContainer";
import BlurHashImage from "../generalComponents/blurhashImage/BlurHashImage";

interface IResourcesProps {
    resources: Array<IResource>
}

const Resources: React.FC<IResourcesProps> = ({resources}) => {
    const [activeResource, setActiveResource] = React.useState<Array<IResource>>([])
    const [moreResource, setMoreResource] = React.useState<Array<IResource>>([])

    useEffect(() => {
        setActiveResource(resources.slice(0, 2))
        setMoreResource(resources.slice(2, resources.length))
    }, [resources])

    return (
        <>
            <ResourceContainer>
                {
                    resources && activeResource.map(resource => (
                        <div key={resource.resourceTitle}>
                            <div className={style.ResourceContainerLeft}>
                                <div>
                                    <img src={require(`../../../../../utils/icons/main/topics/${resource.resourceImage}.svg`)} alt={resource.resourceTitle}/>
                                    <h1>{resource.resourceTitle}</h1>
                                    <p>{resource.resourceDesc}</p>
                                </div>
                            </div>
                            <div className={style.ResourceContainerRight}>
                                <BlurHashImage imagePath={`images/topics/${resource.resourceTopicImage}`} hash={resource.hash} alt={resource.resourceTopicTitle}></BlurHashImage>
                                <div className={style.ResourceTitleBlock}>
                                    <div>
                                        <h2>{resource.resourceTopicTitle}</h2>
                                        <p>{resource.resourceTopicDesc}</p>
                                    </div>
                                    <Button foo={() => {}}>Download PDF Now <HiArrowUpRight/></Button>
                                </div>
                                <div>
                                    <div className={style.TextBlock}>
                                        <p>Publication Date</p>
                                        <h2>{formatShortDate(resource.resourceTopicDate!)}</h2>
                                    </div>
                                    <div className={style.TextBlock}>
                                        <p>Category</p>
                                        <h2>{resource.resourceTopicCategory}</h2>
                                    </div>
                                    <div className={style.TextBlock}>
                                        <p>Author</p>
                                        <h2>{resource.resourceTopicAuthor}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </ResourceContainer>
            <TripleContainer>
                {
                    moreResource.map(resource => (
                        <div className={style.ResourceContainerMore} key={resource.resourceTitle}>
                            <BlurHashImage imagePath={`images/topics/${resource.resourceTopicImage}`} hash={resource.hash} alt={resource.resourceTopicTitle}></BlurHashImage>
                            <h2>{resource.resourceTopicTitle}</h2>
                            <p>{resource.resourceTopicDesc}</p>
                            <span>
                                <Button foo={() => {}} type={["SelectButton"]}>View Details</Button>
                                <Button foo={() => {}} type={["SelectButton"]}>Download PDF Now</Button>
                            </span>
                        </div>
                    ))
                }
            </TripleContainer>
        </>
    )
}

export default Resources