import React, {useEffect} from 'react'
import style from "./style.module.css"
import Button from "../../buttons/Button";
import {HiArrowUpRight} from "react-icons/hi2";
import formatCompact from "../../../../../utils/formats/formatCompact";
import { HiOutlineEye } from "react-icons/hi2";
import Developer from '../heroSection/developer/Developers'
import RateBlock from "../testimonials/rateBlock/RateBlock";
import Player from "../videos/player/Player";

// interface Ipodcast {
//     podcastId: string,
//     image: string,
//     title: string,
//     desc: string,
//     downloadCount: number,
//     developers: Array<string>,
//     topic: string,
//     topicDesc: string,
//     topicImage: string,
//     topicTotal: number,
//     topicExpertise: string
// }

const TopPodcasts = () => {
    const podcasts = [
        {
            podcastIcon: 'podcast_1',
            podcastTitle: 'AI Revolution',
            podcastRating: 5,
            podcastHost: 'Dr. Sarah Mitchell',
            podcastLink: '/',
            podcastVideo: 'podcast_video_1',
            podcastVideoTitle: 'Delves into the transformative impact of AI',
            podcastVideoDesc: 'Join Dr. Sarah Mitchell as she delves into the transformative impact of AI on industries, featuring expert interviews and real-world case studies. Explore the possibilities of AI in healthcare, finance, and more.',
            podcastVideoEpisodes: 50,
            podcastVideoEpisodeLength: 30,
            podcastVideoEpisodeRelease: 'Weekly',
        }
    ]

    return (
        <>
            {
                podcasts && podcasts.map(podcast => (
                    <div className={style.PodcastContainer} key={podcast.podcastTitle}>
                        <div className={style.PodcastContainerLeft}>
                            <div>
                                <img src={require(`../../../../../utils/icons/main/topPodcasts/${podcast.podcastIcon}.svg`)}
                                     alt={podcast.podcastTitle}/>
                                <div>
                                    <h1>{podcast.podcastTitle}</h1>
                                    <RateBlock rating={podcast.podcastRating}></RateBlock>
                                </div>
                                <div>
                                    <div>
                                        <div className={style.TextBlock}>
                                            <p>Host</p>
                                            <h2>{podcast.podcastHost}</h2>
                                        </div>
                                        <Button foo={() => {}}>Listen Podcast <HiArrowUpRight/></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.PodcastContainerRight}>
                            <span>
                                <Player src={podcast.podcastVideo}/>
                            </span>
                            <div>
                                <div className={style.TextBlock}>
                                    <p>Total {podcast.podcastTitle}</p>
                                    <h2>Over {podcast.podcastTitle} {podcast.podcastTitle}</h2>
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
                                    <h2>{podcast.podcastTitle}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default TopPodcasts