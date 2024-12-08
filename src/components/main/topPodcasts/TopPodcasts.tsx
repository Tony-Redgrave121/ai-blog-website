import React from 'react'
import style from "./style.module.css"
import Button from "../generalComponents/buttons/Button";
import {HiArrowUpRight} from "react-icons/hi2";
import RateBlock from "../generalComponents/rateBlock/RateBlock";
import BlurHashImage from "../generalComponents/blurhashImage/BlurHashImage";
import ITopPodcast from "../../../utils/types/ITopPodcast";

interface ITopPodcastsProps {
    topPodcasts: Array<ITopPodcast>
}

const TopPodcasts: React.FC<ITopPodcastsProps> = ({topPodcasts}) => {
    const PodcastContainerLeft: React.FC<{ podcast: ITopPodcast }> = ({podcast}) => (
        <div className={style.PodcastContainerLeft}>
            <div>
                <img src={require(`../../../utils/icons/main/topPodcasts/${podcast.podcastIcon}.svg`)}
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
                        <Button foo={() => {
                        }}>Listen Podcast <HiArrowUpRight/></Button>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <>
            {
                topPodcasts.map(podcast => (
                    <div className={style.PodcastContainer} key={podcast.podcastTitle}>
                        <PodcastContainerLeft podcast={podcast}/>
                        <div className={style.PodcastContainerRight}>
                            <span>
                                <BlurHashImage imagePath={podcast.podcastVideo} hash={podcast.hash}
                                               type={'Short'}></BlurHashImage>
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