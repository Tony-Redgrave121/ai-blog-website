import React, {useEffect} from 'react'
import HeroSection from "./hero-section/HeroSection";
import Crossing from "./crossing/Сrossing";
import Features from "./features/Features";
import technology from "./features/technology.json"
import {HiArrowUpRight} from "react-icons/hi2";
import Button from "../buttons/Button";
import Blogs from "./blogs/Blogs";
import IPostLow from "../../../../utils/types/IPostLow";
import Resources from "./resources/Resources";

const Main = () => {
    const [posts, setPosts] = React.useState<Array<IPostLow>>()

    useEffect(() => {
        fetch("http://localhost:3000/server/posts/posts.json")
            .then(response => {
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                return response.json();
            })
            .then(data => setPosts(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <main>
            <HeroSection />
            <Crossing desc="Unlock the Power of" title="FutureTech Features"/>
            {
                technology.map(item => (
                    <Features icon={item.icon} desc={item.desc} title={item.title} params={item.params} key={item.title}/>
                ))
            }
            <Crossing desc="Explore FutureTech's In-Depth Resources Posts" title="A Knowledge Treasure Trove"><Button foo={() => {}}>View All Blogs <HiArrowUpRight/></Button></Crossing>
            <Blogs posts={posts}></Blogs>
            <Crossing desc="Your Gateway to In-Depth Information" title="Unlock Valuable Knowledge with FutureTech's Resources"><Button foo={() => {}}>View All Resources <HiArrowUpRight/></Button></Crossing>
            <Resources></Resources>
        </main>
    )
}

export default Main