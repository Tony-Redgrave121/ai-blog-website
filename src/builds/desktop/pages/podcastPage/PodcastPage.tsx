import React from 'react'
import CrossingTitle from "../../components/main/crossingTitle/CrossingTitle";
import TopPodcasts from "../../components/main/topPodcasts/TopPodcasts";

const BlogPage = () => {
    return (
        <main>
            <CrossingTitle title="Unlock the World of Artificial Intelligence " subTitle="through Podcasts" desc="Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation."/>
            <TopPodcasts />
        </main>
    )
}

export default BlogPage;