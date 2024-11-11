import React, {useEffect} from 'react'
import CrossingTitle from "../../components/main/crossingTitle/CrossingTitle";
import QuaternaryContainer from "../../components/main/quaternaryContainer/QuaternaryContainer";
import StatBlock from "../../components/main/statBlock/StatBlock";

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

    const stats = [
        {
            count: 300,
            title: 'Resources available'
        },
        {
            count: 12000,
            title: 'Total Downloads'
        },
        {
            count: 10000,
            title: 'Active Users'
        },
        {
            count: 100,
            title: 'Countries Accesses Our Content '
        },
    ]

    return (
        <main>
            <CrossingTitle title="Unlock a World of  " subTitle="Knowledge" desc="Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation."/>
            <QuaternaryContainer>
                {
                    stats.map(stat => (
                        <StatBlock stat={stat} key={stat.title} />
                    ))
                }
            </QuaternaryContainer>
        </main>
    )
}

export default ResourcePage;