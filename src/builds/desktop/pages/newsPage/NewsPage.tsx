import React, {useEffect} from 'react'
import Blogs from "../../components/main/blogs/Blogs";
import IPostLow from "../../../../utils/types/IPostLow";
import HeaderSection from "../../components/main/headerSection/HeaderSection";
import Crossing from "../../components/main/crossing/Сrossing";
import Button from "../../components/buttons/Button";
import {HiArrowUpRight} from "react-icons/hi2";
import CrossingTitle from "../../components/main/crossingTitle/CrossingTitle";
import Videos from "../../components/main/videos/Videos";

const NewsPage = () => {
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
            <CrossingTitle title="Today's Headlines: Stay" subTitle="Informed" desc="Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends, and stories. Discover the world through our news coverage."/>
            <HeaderSection />
            <Crossing desc="Welcome to Our News Hub" title="Discover the World of Headlines"><Button foo={() => {}}>View All News <HiArrowUpRight/></Button></Crossing>
            <Blogs posts={posts}/>
            <Crossing desc="Featured Player" title="Visual Insights for the Modern Viewer"><Button foo={() => {}}>View All <HiArrowUpRight/></Button></Crossing>
            <Videos></Videos>
        </main>
    )
}

export default NewsPage