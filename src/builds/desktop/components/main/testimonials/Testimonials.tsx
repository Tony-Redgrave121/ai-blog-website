import React from 'react'
import style from "./style.module.css"
import {ITestimonial} from "../../../../../utils/types/ITestimonial";
import RateBlock from "./rateBlock/RateBlock";

interface ITestimonialsProps {
    testimonials: Array<ITestimonial>
}

const Testimonials: React.FC<ITestimonialsProps> = ({testimonials}) => {
    return (
        <>
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
                                    <RateBlock rating={testimonial.userRate}></RateBlock>
                                </div>
                                <p>{testimonial.userComment}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Testimonials