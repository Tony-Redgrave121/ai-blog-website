import React from 'react'
import style from "./style.module.css"
import { HiStar } from "react-icons/hi2";
import {ITestimonial} from "../../../../../utils/types/ITestimonial";

interface ITestimonialsProps {
    testimonials: Array<ITestimonial>
}

const Testimonials: React.FC<ITestimonialsProps> = ({testimonials}) => {
    return (
        <div className={style.TestimonialsContainer}>
            <div>
                {
                    testimonials && testimonials.map((testimonial, index) => (
                        <div className={style.TestimonialsBlock} key={index}>
                            <div>
                                <div>
                                    <img src={require(`../../../../../utils/icons/main/developers/${testimonial.userImage}`)} alt={testimonial.userName}/>
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
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Testimonials