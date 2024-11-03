import React, {useEffect} from 'react'
import HeaderSection from "../../components/main/headerSection/HeaderSection";
import IBlog from '../../../../utils/types/IBlog'
import Information from "../../components/main/information/Information";

const BlogPage = () => {
    const [blog, setBlog] = React.useState<IBlog>()

    useEffect(() => {
        const url = new URL(window.location.href)
        const blogName = url.pathname.split("/")[2]

        fetch(`http://localhost:3000/server/blogs/${blogName}.json`)
            .then(response => {
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                return response.json();
            })
            .then(data => {
                setBlog(data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <main>
            {blog && <Information blog={blog}/>}
            <HeaderSection/>
        </main>
    )
}

export default BlogPage;