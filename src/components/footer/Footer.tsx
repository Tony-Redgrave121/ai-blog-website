import React from 'react'
import style from './style.module.css'
import {HiArrowUpRight} from "react-icons/hi2"
import {FaTwitter, FaMedium, FaLinkedin} from "react-icons/fa6";
import {Link} from "react-router-dom";
import Button from "../main/generalComponents/buttons/Button";

const Footer: React.FC = () => {
    const list = [
        {
            title: "Home",
            links: [
                {
                    linkName: "Features",
                    link: "/",
                    linkNew: false,
                    linkButton: false
                },
                {
                    linkName: "Blogs",
                    link: "/",
                    linkNew: false,
                    linkButton: false
                },
                {
                    linkName: "Resources",
                    link: "/",
                    linkNew: true,
                    linkButton: false
                },
                {
                    linkName: "Testimonials",
                    link: "/",
                    linkNew: false,
                    linkButton: false
                },
                {
                    linkName: "Contact Us",
                    link: "/",
                    linkNew: false,
                    linkButton: false
                },
                {
                    linkName: "Newsletter",
                    link: "/",
                    linkNew: false,
                    linkButton: false
                },
            ]
        },
        {
            title: "News",
            links: [
                {
                    linkName: "Trending Stories",
                    link: "/",
                    linkNew: false,
                    linkButton: false
                },
                {
                    linkName: "Featured Player",
                    link: "/",
                    linkNew: false,
                    linkButton: false
                },
                {
                    linkName: "Technology",
                    link: "/",
                    linkNew: false,
                    linkButton: false
                },
                {
                    linkName: "Health",
                    link: "/",
                    linkNew: false,
                    linkButton: false
                },
                {
                    linkName: "Politics",
                    link: "/",
                    linkNew: false,
                    linkButton: false
                },
                {
                    linkName: "Environment",
                    link: "/",
                    linkNew: false,
                    linkButton: false
                },
            ]
        },
        {
            title: "Blogs",
            links: [
                {
                    linkName: "Quantum Computing",
                    link: "/",
                    linkNew: false,
                    linkButton: false
                },
                {
                    linkName: "AI Ethics",
                    link: "/",
                    linkNew: false,
                    linkButton: false
                },
                {
                    linkName: "Space Exploration",
                    link: "/",
                    linkNew: false,
                    linkButton: false
                },
                {
                    linkName: "Biotechnology",
                    link: "/",
                    linkNew: true,
                    linkButton: false
                },
                {
                    linkName: "Renewable Energy",
                    link: "/",
                    linkNew: false,
                    linkButton: false
                },
                {
                    linkName: "Biohacking",
                    link: "/",
                    linkNew: false,
                    linkButton: false
                },
            ]
        },
        {
            title: "Podcasts",
            links: [
                {
                    linkName: "AI Revolution",
                    link: "/",
                    linkNew: false,
                    linkButton: false
                },
                {
                    linkName: "AI Revolution",
                    link: "/",
                    linkNew: true,
                    linkButton: false
                },
                {
                    linkName: "TechTalk AI",
                    link: "/",
                    linkNew: false,
                    linkButton: false
                },
                {
                    linkName: "AI Conversations",
                    link: "/",
                    linkNew: false,
                    linkButton: false
                }
            ]
        },
        {
            title: "Resources",
            links: [
                {
                    linkName: <Button foo={() => {}}>Whitepapers <HiArrowUpRight/></Button>,
                    link: "/",
                    linkButton: true,
                    linkNew: false,
                },
                {
                    linkName: <Button foo={() => {}}>Ebooks <HiArrowUpRight/></Button>,
                    link: "/",
                    linkButton: true,
                    linkNew: false,
                },
                {
                    linkName: <Button foo={() => {}}>Reports <HiArrowUpRight/></Button>,
                    link: "/",
                    linkButton: true,
                    linkNew: false,
                },
                {
                    linkName: <Button foo={() => {}}>Research Papers <HiArrowUpRight/></Button>,
                    link: "/",
                    linkButton: true,
                    linkNew: false,
                }
            ]
        },
    ]

    return (
        <footer className={style.Footer}>
            <div>
                {
                    list.map((item, index) => (
                        <nav key={index}>
                            <ul>
                                <li><h3>{item.title}</h3></li>
                                { item.title === 'Resources' ?
                                    <>
                                        {item.links.map((link, index) => (
                                            <li key={index}>
                                                {link.linkName}
                                            </li>
                                        ))}
                                    </>
                                    :
                                    <>
                                        {item.links.map((link, index) => (
                                            <li key={index}>
                                                <Link to={link.link}>{link.linkName}</Link>
                                                {
                                                    link.linkNew ? <p className={style.NewBlock}>New</p> : null
                                                }
                                            </li>
                                        ))}
                                    </>
                                }
                            </ul>
                        </nav>
                    ))
                }
            </div>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Terms & Conditions</Link></li>
                        <li><Link to="/">Privacy Policy</Link></li>
                    </ul>
                </nav>
                <nav>
                    <ul>
                        <li><Link to="/"><FaTwitter/></Link></li>
                        <li><Link to="/"><FaMedium/></Link></li>
                        <li><Link to="/"><FaLinkedin/></Link></li>
                    </ul>
                </nav>
                <nav>
                    <ul>
                        <li><p>&#169; 2024 FutureTech. All rights reserved.</p></li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer