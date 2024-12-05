import React, {useEffect} from 'react'
import CrossingTitle from "../../components/main/crossingTitle/CrossingTitle";
import TopPodcasts from "../../components/main/topPodcasts/TopPodcasts";
import Crossing from "../../components/main/crossing/Сrossing";
import LatestPodcasts from "../../components/main/latestPodcasts/LatestPodcasts";
import IPodcast from "../../utils/types/IPodcast";
import ITopPodcast from "../../utils/types/ITopPodcast";
import fetchData from "../../utils/fetch/fetchData";

const BlogPage = () => {
    const [latestPodcasts, setLatestPodcasts] = React.useState<Array<IPodcast>>()
    const [topPodcasts, setTopPodcasts] = React.useState<Array<ITopPodcast>>()

    useEffect(() => {
        const fetchAll = async () => {
            const [latestPodcasts, topPodcasts] = await Promise.all([
                fetchData<IPodcast[]>('podcasts/latestPodcasts.json'),
                fetchData<ITopPodcast[]>('podcasts/topPodcasts.json')
            ])

            setLatestPodcasts(latestPodcasts)
            setTopPodcasts(topPodcasts)
        }

        fetchAll()
    }, [])

    return (
        <main>
            <CrossingTitle title="Unlock the World of Artificial Intelligence " subTitle="through Podcasts" desc="Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation."/>
            { topPodcasts &&
                <TopPodcasts topPodcasts={topPodcasts}/>
            }
            <Crossing desc="Stay Informed with Fresh Content" title="Latest Podcast Episodes"/>
            { latestPodcasts &&
                <LatestPodcasts blocks={latestPodcasts.slice(0, 3)}/>
            }
            { latestPodcasts &&
                <LatestPodcasts blocks={latestPodcasts.slice(3, 6)}/>
            }
        </main>
    )
}

export default BlogPage;