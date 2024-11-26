import React from 'react'
import style from "./style.module.css"
import {ITestimonial} from "../../../../../utils/types/ITestimonial";
import RateBlock from "./rateBlock/RateBlock";
import BlurHashImage from "../generalComponents/blurhashImage/BlurHashImage";

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
                                <BlurHashImage imagePath={`images/developers/${testimonial.userImage}`} hash={testimonial.hash} alt={testimonial.userName} width="60px"></BlurHashImage>
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