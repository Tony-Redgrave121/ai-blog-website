import React, {useEffect} from 'react'
import HeaderSection from "../../components/main/headerSection/HeaderSection";
import IBlog from '../../utils/types/IBlog'
import Information from "../../components/main/information/Information";
import sections from '../../components/main/headerSection/sections_2.json'
import Button from "../../components/buttons/Button";
import {HiArrowUpRight} from "react-icons/hi2";
import {useParams} from 'react-router-dom'

const BlogPage = () => {
    const [blog, setBlog] = React.useState<IBlog>()
    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:5000/static/jsons/blogs/${params.id}.json`)
            .then(response => {
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)
                return response.json()
            })
            .then(data => {
                setBlog(data)
            })
            .catch(error => console.log(error))
    }, [params.id])

    const createTitle = (title: string, button: React.ReactNode) => {
        return (
            <span>
                <span>
                    <h2>{title}</h2>
                    <Button foo={() => {}}>{button}</Button>
                </span>
            </span>
        )
    }

    return (
        <main>
            { blog &&
                <Information blog={blog}/>
            }
            <HeaderSection sections={sections}>
                {
                    createTitle("Similar News", <>View All News <HiArrowUpRight/></>)
                }
            </HeaderSection>
        </main>
    )
}

export default BlogPage