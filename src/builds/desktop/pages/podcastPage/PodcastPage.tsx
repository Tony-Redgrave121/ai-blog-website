import React, {useEffect} from 'react'
import CrossingTitle from "../../components/main/crossingTitle/CrossingTitle";
import TopPodcasts from "../../components/main/topPodcasts/TopPodcasts";
import Crossing from "../../components/main/crossing/Сrossing";
import LatestPodcasts from "../../components/main/latestPodcasts/LatestPodcasts";
import TripleContainer from "../../components/main/testimonials/tripleContainer/TripleContainer";
import IPodcast from "../../../../utils/types/IPodcast";

const BlogPage = () => {
    const [latestPodcasts, setLatestPodcasts] = React.useState<Array<IPodcast>>()

    useEffect(() => {
        fetch("http://localhost:3000/server/podcasts/latestPodcasts.json")
            .then(response => {
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                return response.json();
            })
            .then(data => setLatestPodcasts(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <main>
            <CrossingTitle title="Unlock the World of Artificial Intelligence " subTitle="through Podcasts" desc="Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation."/>
            <TopPodcasts />
            <Crossing desc="Stay Informed with Fresh Content" title="Latest Podcast Episodes"/>
            { latestPodcasts &&
                <TripleContainer>
                    <LatestPodcasts blocks={latestPodcasts.slice(0, 3)}/>
                </TripleContainer>
            }
            { latestPodcasts &&
                <TripleContainer>
                    <LatestPodcasts blocks={latestPodcasts.slice(3, 6)}/>
                </TripleContainer>
            }
        </main>
    )
}

export default BlogPage;