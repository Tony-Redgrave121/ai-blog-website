import React from 'react'
import style from "./style.module.css"
import Button from "../../buttons/Button";
import {HiArrowUpRight} from "react-icons/hi2";
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
            podcastVideo: 'topPodcasts/podcast_video_1',
            podcastVideoTitle: 'Delves into the transformative impact of AI',
            podcastVideoDesc: 'Join Dr. Sarah Mitchell as she delves into the transformative impact of AI on industries, featuring expert interviews and real-world case studies. Explore the possibilities of AI in healthcare, finance, and more.',
            podcastVideoEpisodes: 50,
            podcastVideoEpisodeLength: 30,
            podcastVideoEpisodeRelease: 'Weekly',
        },
        {
            podcastIcon: 'podcast_2',
            podcastTitle: 'AI Conversations',
            podcastRating: 5,
            podcastHost: 'Mark Anderson',
            podcastLink: '/',
            podcastVideo: 'topPodcasts/podcast_video_2',
            podcastVideoTitle: 'Engage in thought-provoking conversations with leading experts.',
            podcastVideoDesc: 'Mark discusses the future of AI, the impact on society, and how it\'s shaping industries worldwide. Engage in thought-provoking conversations with leading experts.',
            podcastVideoEpisodes: 40,
            podcastVideoEpisodeLength: 40,
            podcastVideoEpisodeRelease: 'Monthly',
        },
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
                                <Player src={podcast.podcastVideo} type={'Short'}/>
                                <h2>{podcast.podcastVideoTitle}</h2>
                                <p>{podcast.podcastVideoDesc}</p>
                            </span>
                            <div>
                                <div className={style.TextBlock}>
                                    <p>Total Episodes</p>
                                    <h2>{podcast.podcastVideoEpisodes}</h2>
                                </div>
                                <div className={style.TextBlock}>
                                    <p>Average Episode Length</p>
                                    <h2>{podcast.podcastVideoEpisodeLength} min</h2>
                                </div>
                                <div className={style.TextBlock}>
                                    <p>Release Frequency</p>
                                    <h2>{podcast.podcastVideoEpisodeRelease}</h2>
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