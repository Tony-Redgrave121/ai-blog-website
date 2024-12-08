import React, {useEffect} from 'react'
import HeaderSection from "../../components/main/headerSection/HeaderSection";
import IBlog from '../../utils/types/IBlog'
import Information from "../../components/main/information/Information";
import sections from '../../components/main/headerSection/sections_2.json'
import Button from "../../components/main/generalComponents/buttons/Button";
import {HiArrowUpRight} from "react-icons/hi2";
import {useParams} from 'react-router-dom'
import fetchData from "../../utils/fetch/fetchData";

const BlogPage = () => {
    const [blog, setBlog] = React.useState<IBlog>()
    const params = useParams()

    useEffect(() => {
        const fetchAll = async () => {
            const [blog] = await Promise.all([fetchData<IBlog>(`blogs/${params.id}.json`)])
            setBlog(blog)
        }

        fetchAll()
    }, [params.id])

    return (
        <main>
            { blog &&
                <Information blog={blog}/>
            }
            <HeaderSection sections={sections}>
                <span>
                    <span>
                        <h2>Similar News</h2>
                        <Button foo={() => {}}>View All News <HiArrowUpRight/></Button>
                    </span>
                </span>
            </HeaderSection>
        </main>
    )
}

export default BlogPage