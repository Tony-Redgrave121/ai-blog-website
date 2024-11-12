import React from 'react'
import style from "./style.module.css"
import IPodcast from "../../../../../utils/types/IPodcast";
import Player from "../videos/player/Player";
import {HiArrowUpRight} from "react-icons/hi2";
import Button from "../../buttons/Button";
import TripleContainer from "../testimonials/tripleContainer/TripleContainer";

interface ILatestPodcastsProps {
    blocks: Array<IPodcast>
}

const LatestPodcasts: React.FC<ILatestPodcastsProps> = ({blocks}) => {
    return (
        <TripleContainer>
            {
                blocks && blocks.map((podcast, index) => (
                    <div className={style.TestimonialsBlock} key={index}>
                        <div>
                            <Player src={podcast.podcastVideo}></Player>
                            <h2>{podcast.podcastTitle}</h2>
                            <p>{podcast.podcastDesc}</p>
                            <span>
                                <Button foo={() => {}}>Listen Podcast <HiArrowUpRight/></Button>
                            </span>
                        </div>
                    </div>
                ))
            }
        </TripleContainer>
    )
}

export default LatestPodcasts