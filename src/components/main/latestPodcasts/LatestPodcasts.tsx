import React from 'react'
import style from "./style.module.css"
import IPodcast from "../../../utils/types/IPodcast";
import {HiArrowUpRight} from "react-icons/hi2";
import Button from "../generalComponents/buttons/Button";
import TripleContainer from "../generalComponents/tripleContainer/TripleContainer";
import BlurHashImage from "../generalComponents/blurhashImage/BlurHashImage";
import {useNavigate} from "react-router-dom";

interface ILatestPodcastsProps {
    blocks: Array<IPodcast>
}

const LatestPodcasts: React.FC<ILatestPodcastsProps> = ({blocks}) => {
    const navigate = useNavigate()
    const ButtonContainer: React.FC<{foo: () => void}> = (({foo}) => (
        <span>
            <Button foo={() => foo()}>Listen Podcast <HiArrowUpRight/></Button>
        </span>
    ))

    return (
        <TripleContainer>
            {
                blocks && blocks.map((podcast, index) => (
                    <div className={style.TestimonialsBlock} key={index}>
                        <div>
                            <BlurHashImage imagePath={podcast.podcastVideo} hash={podcast.hash}></BlurHashImage>
                            <h2>{podcast.podcastTitle}</h2>
                            <p>{podcast.podcastDesc}</p>
                            <ButtonContainer foo={() => navigate('/')}/>
                        </div>
                    </div>
                ))
            }
        </TripleContainer>
    )
}

export default LatestPodcasts