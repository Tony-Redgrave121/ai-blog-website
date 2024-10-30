import React, {useEffect} from 'react'
import style from "./style.module.css"
import { HiStar } from "react-icons/hi2";

interface ITestimonial {
    userImage: string,
    userName: string,
    userLocation: string,
    userRate: number,
    userComment: string
}

const Testimonials = () => {
    const [testimonials, setTestimonials] = React.useState<Array<ITestimonial>>()

    useEffect(() => {
        fetch("http://localhost:3000/server/testimonials/testimonials.json")
            .then(response => {
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                return response.json();
            })
            .then(data => setTestimonials(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className={style.TestimonialsContainer}>
            {
                testimonials && testimonials.map((testimonial, index) => (
                    <div className={style.TestimonialsBlock} key={index}>
                        <div>
                            <img src={require(`../../../../../utils/icons/main/developers/${testimonial.userImage}`)}
                                 alt={testimonial.userName}/>
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