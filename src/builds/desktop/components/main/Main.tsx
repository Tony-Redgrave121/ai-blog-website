import React from 'react'
import Stat from "./stat/Stat";
import Crossing from "./crossing/Сrossing";
import Blog from "./blog/Blog";
import technology from "./blog/technology.json"
import {HiArrowUpRight} from "react-icons/hi2";
import Button from "../buttons/Button";
import Tabs from "./tabs/Tabs";

const Main = () => {

    return (
        <main>
            <Stat />
            <Crossing desc="Unlock the Power of" title="FutureTech Features"/>
            {
                technology.map(item => (
                    <Blog icon={item.icon} desc={item.desc} title={item.title} params={item.params} key={item.title}/>
                ))
            }
            <Crossing desc="Explore FutureTech's In-Depth Blog Posts" title="A Knowledge Treasure Trove"><Button foo={() => {}}>View All Blogs <HiArrowUpRight/></Button></Crossing>
            <Tabs></Tabs>
        </main>
    )
}

export default Main