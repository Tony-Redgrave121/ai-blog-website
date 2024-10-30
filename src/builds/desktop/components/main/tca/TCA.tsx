import React from 'react'
import style from "./style.module.css"
import {HiArrowUpRight} from "react-icons/hi2";
import {Link} from "react-router-dom";

const TCA = () => {
    const list = [
        {
            title: "Resource Access",
            desk: "Visitors can access a wide range of resources, including ebooks, whitepapers, reports.",
            link: "/"
        },
        {
            title: "Community Forum",
            desk: "Join our active community forum to discuss industry trends, share insights, and collaborate with peers.",
            link: "/"
        },
        {
            title: "Tech Events",
            desk: "Stay updated on upcoming tech events, webinars, and conferences to enhance your knowledge.",
            link: "/"
        },
    ]
    return (
        <div className={style.TCAContainer}>
            <div>
                <img src={require("../../../../../utils/icons/main/tca/logo.svg").default} alt="Logo"/>
                <div>
                    <span><h3>Learn, Connect, and Innovate</h3></span>
                    <h1>Be Part of the Future Tech Revolution</h1>
                    <p>Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers.</p>
                </div>
            </div>
            <div>
                {
                    list.map(item => (
                        <div key={item.title}>
                            <span>
                                <h3>{item.title}</h3>
                                <Link to={item.link}><HiArrowUpRight size={24}/></Link>
                            </span>
                            <p>{item.desk}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TCA