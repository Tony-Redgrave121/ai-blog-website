import React from 'react'
import style from "./style.module.css"
import { HiStar } from "react-icons/hi2";

const Testimonials = () => {
    const testimonials = [
        {
            userImage: "developer_5.png",
            userName: "Sarah Thompson",
            userLocation: "San Francisco, USA",
            userRate: 5,
            userComment: "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.",
        },
        {
            userImage: "developer_6.png",
            userName: "Raj Patel",
            userLocation: "Mumbai, India",
            userRate: 4,
            userComment: "The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis, helping me make informed decisions.",
        },
        {
            userImage: "developer_7.png",
            userName: "Emily Adams",
            userLocation: "London, UK",
            userRate: 5,
            userComment: "The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care.",
        },
        {
            userImage: "developer_8.png",
            userName: "Alan Jackson",
            userLocation: "Houston, USA",
            userRate: 4,
            userComment: "The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view of what lies beyond Earth.",
        },
        {
            userImage: "developer_3.png",
            userName: "Jessica Miller",
            userLocation: "Boston, USA",
            userRate: 5,
            userComment: "The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research in genomics.",
        },
        {
            userImage: "developer_2.png",
            userName: "Diego Lopez",
            userLocation: "Barcelona, Spain",
            userRate: 5,
            userComment: "The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability.",
        }
    ]

    return (
        <div className={style.TestimonialsContainer}>
            {
                testimonials.map((testimonial, index) => (
                    <div className={style.TestimonialsBlock} key={index}>
                        <div>
                            <img src={require(`../../../../../utils/icons/main/developers/${testimonial.userImage}`)}
                                 alt={`${testimonial.userName} Image`}/>
                            <div>
                                <h2>{testimonial.userName}</h2>
                                <p>{testimonial.userLocation}</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span className={style.RateBlock}>
                                {
                                    Array(testimonial.userRate).fill(0).map((_, index) => <HiStar key={index} size={24}/>)
                                }
                            </span>
                            </div>
                            <p>{testimonial.userComment}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Testimonials