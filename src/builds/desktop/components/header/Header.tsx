import React, {memo, useEffect, useRef, useState} from 'react'
import style from './style.module.css'
import {HiArrowUpRight} from "react-icons/hi2"
import DesktopLogo from "../../../../utils/icons/logo/desktop-logo.svg"
import {useDebouncedCallback} from 'use-debounce'
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const header = useRef<HTMLHeadElement>(null)
    const [current, setCurrent] = useState('')
    const navigate = useNavigate()

    const handleBackground = useDebouncedCallback((from: number, to: number) => {
        const pageHeight = document.documentElement.scrollHeight
        const currentPosition = document.documentElement.scrollTop

        const counter = Math.floor(((pageHeight - currentPosition) * 100) / pageHeight)
        const resColor = to - ((to - from) * counter) / 100

        if (header.current) header.current.style.backgroundColor = `rgb(${resColor}, ${resColor}, ${resColor})`
    }, 100)

    useEffect(() => {
        window.addEventListener('scroll', () => handleBackground(26, 38))

        return () => window.removeEventListener('scroll', () => handleBackground)
    }, [handleBackground])

    const links = [
        {
            link: '/',
            title: 'Home',
        },
        {
            link: '/news',
            title: 'News',
        },
        {
            link: '/podcast',
            title: 'Podcasts',
        },
        {
            link: '/resource',
            title: 'Resources',
        },
    ]

    useEffect(() => {
        setCurrent(document.location.pathname.toString())
    }, [])

    return (
        <>
            <div className={style.TopBanner}>
                <a href="https://">Subscribe to our Newsletter For New & latest Blogs and TCA <HiArrowUpRight/></a>
            </div>
            <header className={style.Header} ref={header}>
                <div className={style.Navbar}>
                    <Link to="/"><img src={DesktopLogo} alt="Desktop Logo"/></Link>
                    <nav className={style.ButtonsContainer}>
                        <ul>
                            {
                                links.map(link=> (
                                    <li key={link.title}>
                                        <Link to={link.link} className={link.link === current ? style.Active : ''} onClick={() => setCurrent(link.link)}>{link.title}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <button onClick={() => {
                        navigate('/contact')
                        setCurrent('/contact')
                    }}>Contact Us</button>
                </div>
            </header>
        </>
    )
}

export default memo(Header)