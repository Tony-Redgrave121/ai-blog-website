import React from 'react'
import style from "./style.module.css"
import Player from "./player/Player"

// interface ICrossing {
//     title: string,
//     subTitle: string,
//     desc: string,
// }

const Videos = () => {
    const arr = [
        {
            video: "video_1",
            title: "Mars Exploration: Unveiling Alien Landscapes",
            desc: "Embark on a journey through the Red Planet's breathtaking landscapes and uncover the mysteries of Mars."
        },
        {
            video: "video_2",
            title: "Blockchain Explained: A Revolution in Finance",
            desc: "Delve into the world of blockchain technology and its transformative impact on the financial industry."
        },
        {
            video: "video_3",
            title: "Breaking the Silence: Mental Health Awareness in the Workplace",
            desc: "An exploration of the importance of mental health awareness and the initiatives reshaping workplaces for employee well-being."
        },
        {
            video: "video_4",
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
                                <Player src={video.video}/>
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