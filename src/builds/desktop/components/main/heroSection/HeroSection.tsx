import React from 'react'
import style from "./style.module.css"
import AbstractDesign from "../../../../../utils/icons/main/abstract-design--.svg"
import Button from "../../buttons/Button"
import {HiArrowUpRight} from "react-icons/hi2"
import {Link, useNavigate} from "react-router-dom"
import links from './json/links.json'
import stats from './json/stats.json'
import Developer from './developer/Developers'
import StatBlock from "../statBlock/StatBlock";

const HeroSection = () => {
    const navigate = useNavigate()

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
                    <div className={style.StatBlockContainer}>
                        <div>
                            {
                                stats.map(stat => (
                                    <StatBlock stat={stat} key={stat.title} />
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
                            <Button foo={() => navigate('/resource')}>Explore Resources <HiArrowUpRight/></Button>
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