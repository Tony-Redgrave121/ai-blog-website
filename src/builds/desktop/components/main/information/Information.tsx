import React, {useEffect} from 'react'
import style from "./style.module.css"
import {HiHeart, HiOutlineEye, HiOutlineHeart } from "react-icons/hi2";
import Button from "../../buttons/Button";
import formatCompact from "../../../../../utils/formats/formatCompact";
import {VscSend} from "react-icons/vsc";

interface ITestimonial {
    userImage: string,
    userName: string,
    userLocation: string,
    userRate: number,
    userComment: string
}

const Information = () => {
    // const [testimonials, setTestimonials] = React.useState<Array<ITestimonial>>()
    //
    // useEffect(() => {
    //     fetch("http://localhost:3000/server/testimonials/testimonials.json")
    //         .then(response => {
    //             if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    //             return response.json();
    //         })
    //         .then(data => setTestimonials(data))
    //         .catch(error => console.log(error))
    // }, [])

    const blog = {
        title: "The Rise of Artificial Intelligence in Healthcare",
        content: `
            <div>
                <h3>Introduction</h3>
                <p>Artificial Intelligence (AI) has emerged as a transformative force in the healthcare industry, reshaping patient care, diagnostics, and research. In this blog post, we explore the profound impact of AI in healthcare, from revolutionizing diagnostic accuracy to enhancing patient outcomes.</p>
            </div>
            <div>
                <h2>Artificial Intelligence (AI)</h2>
                <p>Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.</p>
                <p>Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.</p>
                <h2>Predictive Analytics and Disease Prevention</h2>
                <p>One of the most prominent applications of Al in healthcare is in diagnostic imaging. Al algorithm's have demonstrated remarkable proficiency in interpreting medical images such as X-rays, MRis, and CT scans. They can identify anomalies and deviations that might be overlooked by the human eye. This is particularly valuable in early disease detection. For instance.One of the most prominent applications of Al in healthcare is in diagnostic imaging. Al algorithm's have demonstrated remarkable proficiency in interpreting medical images such as X-rays, MRis, and CT scans. They can identify anomalies and deviations that might be overlooked by the human eye. This is particularly valuable in early disease detection. For instance.</p>
                <p>One of the most prominent applications of Al in healthcare is in diagnostic imaging. Al algorithm's have demonstrated remarkable proficiency in interpreting medical images such as X-rays, MRis, and CT scans. They can identify anomalies and deviations that might be overlooked by the human eye. This is particularly valuable in early disease detection. For instance.One of the most prominent applications of Al in healthcare is in diagnostic imaging. Al algorithm's have demonstrated remarkable proficiency in interpreting medical images such as X-rays, MRis, and CT scans. They can identify anomalies and deviations that might be overlooked by the human eye. This is particularly valuable in early disease detection. For instance.</p>
            </div>
        `,
        image: "img_1.png",
        likeCount: 24500,
        likeState: true,
        viewCount: 50000,
        replyCount: 206,
        date: "2023-10-15",
        category: "Healthcare",
        readingTime: 600,
        authorName: "Dr. Emily Walker"
    }

    return (
        <div className={style.InformationContainer}>
            <div style={{backgroundImage: `url(${require(`../../../../../utils/icons/main/blogs/images/${blog.image}`)}`}}>
                <h1>{blog.title}</h1>
            </div>
            <div>
                <div dangerouslySetInnerHTML={{__html: blog.content}} className={style.ContentBlock}></div>
                <div className={style.SideBar}>
                    <div className={style.ReactionBlock}>
                        <Button foo={() => {}} type={["PostButton"]}>{blog.likeState ? <HiHeart color="#FF5500"/> : <HiOutlineHeart/>} {formatCompact(blog.likeCount)}</Button>
                        <Button foo={() => {}} type={["PostButton"]}><HiOutlineEye /> {formatCompact(blog.viewCount)}</Button>
                        <Button foo={() => {}} type={["PostButton"]}><VscSend/> {formatCompact(blog.replyCount)}</Button>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information