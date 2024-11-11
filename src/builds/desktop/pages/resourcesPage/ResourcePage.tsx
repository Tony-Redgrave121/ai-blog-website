import React, {useEffect} from 'react'
import CrossingTitle from "../../components/main/crossingTitle/CrossingTitle";
import IPodcast from "../../../../utils/types/IPodcast";

const ResourcePage = () => {
    // const [latestPodcasts, setLatestPodcasts] = React.useState<Array<IPodcast>>()
    //
    // useEffect(() => {
    //     fetch("http://localhost:3000/server/podcasts/latestPodcasts.json")
    //         .then(response => {
    //             if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    //             return response.json();
    //         })
    //         .then(data => setLatestPodcasts(data))
    //         .catch(error => console.log(error))
    // }, [])

    return (
        <main>
            <CrossingTitle title="Unlock a World of  " subTitle="Knowledge" desc="Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation."/>

        </main>
    )
}

export default ResourcePage;