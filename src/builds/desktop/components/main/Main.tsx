import React from 'react'
import style from './style.module.css'
import { HiArrowUpRight } from "react-icons/hi2"

const Main = () => {
    const developers = ['developer_1', 'developer_2', 'developer_3', 'developer_4']

    return (
        <main className={style.Main}>
            <div className={style.TopSubContainer}>
                <div className={style.LeftContainer}>
                    <div className={style.TextBlock}>
                        <p>Your Journey to Tomorrow Begins Here</p>
                        <h1>Explore the Frontiers of Artificial Intelligence</h1>
                        <p>Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.</p>
                    </div>
                    <div className={style.StatBlock}>
                        <div>
                            <h3>300<p>+</p></h3>
                            <p>Resources available</p>
                        </div>
                        <div>
                            <h3>12k<p>+</p></h3>
                            <p>Total Downloads</p>
                        </div>
                        <div>
                            <h3>10k<p>+</p></h3>
                            <p>Active Users</p>
                        </div>
                    </div>
                </div>
                <div className={style.RightContainer}>
                    <div className={style.DeveloperContainer}>
                        <div className={style.DeveloperBlock}>
                            {
                                developers.map((developer, index) => (
                                    <img src={require(`../../../../utils/icons/main/developers/${developer}.png`)} alt={developer} key={index} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="">
                        <h3>Explore 1000+ resources</h3>
                        <p>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                    </div>
                    <button type="button">Explore Resources <HiArrowUpRight /></button>
                </div>
            </div>
            <div className={style.DownSubContainer}>

            </div>
        </main>
    )
}

export default Main