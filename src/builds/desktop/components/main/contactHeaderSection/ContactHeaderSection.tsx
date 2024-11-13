import React from 'react'
import style from "./style.module.css"
import QuaternaryContainer from "../quaternaryContainer/QuaternaryContainer";
import {HiArrowUpRight} from "react-icons/hi2";
import Button from "../../buttons/Button";
import {FaLinkedin, FaMedium, FaTwitter} from "react-icons/fa6";

const ContactHeaderSection = () => {
    return (
        <QuaternaryContainer>
            <div className={style.ContactHeaderBlock}>
                <h3>General Inquiries</h3>
                <div>
                    <span>
                        <Button foo={() => window.location.href = "mailto:contact@ai-podcasts.com"}>contact@ai-podcasts.com <HiArrowUpRight/></Button>
                    </span>
                    <span>
                        <Button foo={() => window.location.href = "tel:+11234567890"}>+1 (123) 456-7890 <HiArrowUpRight/></Button>
                    </span>
                </div>
            </div>
            <div className={style.ContactHeaderBlock}>
                <h3>Technical Support</h3>
                <div>
                    <span>
                        <Button foo={() => window.location.href = "mailto:contact@ai-podcasts.com"}>contact@ai-podcasts.com <HiArrowUpRight/></Button>
                    </span>
                    <span>
                        <Button foo={() => window.location.href = "tel:+11234567890"}>+1 (123) 456-7890 <HiArrowUpRight/></Button>
                    </span>
                </div>
            </div>
            <div className={style.ContactHeaderBlock}>
                <h3>Our Office</h3>
                <div>
                    <p>Address: 123 AI Tech Avenue, Techville, 54321</p>
                    <span>
                        <Button foo={() => window.location.href = "tel:+11234567890"}>Get Directions <HiArrowUpRight/></Button>
                    </span>
                </div>
            </div>
            <div className={style.ContactHeaderBlock}>
                <h3>Connect with Us</h3>
                <div>
                    <Button foo={() => window.location.href = "https://x.com/"}><FaTwitter/></Button>
                    <Button foo={() => window.location.href = "https://medium.com/"}><FaMedium/></Button>
                    <Button foo={() => window.location.href = "https://www.linkedin.com/"}><FaLinkedin/></Button>
                </div>
            </div>
        </QuaternaryContainer>
    )
}

export default ContactHeaderSection