import React, {useEffect} from 'react'
import IPostLow from "../../../../utils/types/IPostLow";
import HeaderSection from "../../components/main/headerSection/HeaderSection";
import Videos from "../../components/main/videos/Videos";
import Information from "../../components/main/information/Information";

const BlogPage = () => {
    // const [posts, setPosts] = React.useState<Array<IPostLow>>()
    //
    // useEffect(() => {
    //     fetch("http://localhost:3000/server/posts/posts.json")
    //         .then(response => {
    //             if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    //             return response.json();
    //         })
    //         .then(data => setPosts(data))
    //         .catch(error => console.log(error))
    // }, [])

    return (
        <main>
            <HeaderSection />
            <Information></Information>
            <Videos></Videos>
        </main>
    )
}

export default BlogPage