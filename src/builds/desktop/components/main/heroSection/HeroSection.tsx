import React from 'react'
import style from "./style.module.css"
import AbstractDesign from "../../../../../utils/icons/main/abstract-design--.svg"
import Button from "../../buttons/Button"
import {HiArrowUpRight} from "react-icons/hi2"
import {Link} from "react-router-dom"
import formatCompact from "../../../../../utils/formats/formatCompact";
import links from './json/links.json'
import stats from './json/stats.json'
import Developer from './developer/Developers'

const HeroSection = () => {
    return (
        <div className={style.StatContainer}>
            <div className={style.TopSubContainer}>
                <div className={style.LeftContainer}>
                    <div className={style.TextBlock}>
                        <div>
                            <p>Your Journey to Tomorrow Begins Here</p>
                            <h1>Explore the Frontiers of Artificial Intelligence</h1>
                            <p>Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.</p>
                        </div>
                    </div>
                    <div className={style.StatBlock}>
                        <div>
                            {
                                stats.map(stat => (
                                    <div className={style.Stat} key={stat.title}>
                                        <div>
                                            <h3>{formatCompact(stat.count)}<p>+</p></h3>
                                            <p>{stat.title}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className={style.RightContainer}>
                    <div>
                        <img src={AbstractDesign} alt="Abstract Design"/>
                        <Developer/>
                        <div className={style.TextBlock}>
                            <h3>Explore 1000+ resources</h3>
                            <p>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                        </div>
                        <span>
                            <Button foo={() => {
                            }}>Explore Resources <HiArrowUpRight/></Button>
                        </span>
                    </div>
                </div>
            </div>
            <div className={style.DownSubContainer}>
                <div>
                    {
                        links.map(link => (
                            <div className={style.LinkContainer} key={link.title}>
                                <div className={style.LinkBlock}>
                                    <img src={require(`../../../../../utils/icons/main/links/${link.img}.svg`)}
                                         alt={link.title}/>
                                    <div>
                                        <h3>{link.title}</h3>
                                        <p>{link.desc}</p>
                                    </div>
                                    <p>{link.serv}</p>
                                </div>
                                <div>
                                    <Link to={link.link}><HiArrowUpRight size={24}/></Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HeroSection