import React from 'react'
import style from "./style.module.css"
import BlurHashImage from "../generalComponents/blurhashImage/BlurHashImage";

const Videos = () => {
    const arr = [
        {
            video: "videos/video_1.mp4",
            hash: "LsMzN{Iqn*ox}YafWWkB5Toxj@af",
            title: "Mars Exploration: Unveiling Alien Landscapes",
            desc: "Embark on a journey through the Red Planet's breathtaking landscapes and uncover the mysteries of Mars."
        },
        {
            video: "videos/video_2.mp4",
            hash: "L48zu:t69ZIT00WCt6%M~qRj?bV@",
            title: "Blockchain Explained: A Revolution in Finance",
            desc: "Delve into the world of blockchain technology and its transformative impact on the financial industry."
        },
        {
            video: "videos/video_3.mp4",
            hash: "LSR_2lrAvfPXc6kWkDV?:}ozXTng",
            title: "Breaking the Silence: Mental Health Awareness in the Workplace",
            desc: "An exploration of the importance of mental health awareness and the initiatives reshaping workplaces for employee well-being."
        },
        {
            video: "videos/video_4.mp4",
            hash: "L47wpLJB00i_R59a-:-p00RQ~Vxt",
            title: "Mars Exploration: Unveiling Alien Landscapes",
            desc: "Embark on a journey through the Red Planet's breathtaking landscapes and uncover the mysteries of Mars."
        },
    ]

    return (
        <section className={style.VideosSection}>
            <div>
                {
                    arr.map((video =>
                        <div className={style.VideoBlock} key={video.video}>
                            <div>
                                <BlurHashImage imagePath={video.video} hash={video.hash}></BlurHashImage>
                                <h2>{video.title}</h2>
                                <p>{video.desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Videos