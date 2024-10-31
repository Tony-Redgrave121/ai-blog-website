import React, {useEffect, useRef} from 'react'
import style from './style.module.css'
import {HiArrowUpRight} from "react-icons/hi2"
import DesktopLogo from "../../../../utils/icons/logo/desktop-logo.svg"
import {useDebouncedCallback} from 'use-debounce'

const Header = () => {
    const header = useRef<HTMLHeadElement>(null)

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

    return (
        <>
            <div className={style.TopBanner}>
                <a href="https://">Subscribe to our Newsletter For New & latest Blogs and TCA <HiArrowUpRight/></a>
            </div>
            <header className={style.Header} ref={header}>
                <div className={style.Navbar}>
                    <a href="https://"><img src={DesktopLogo} alt="Desktop Logo"/></a>
                    <nav className={style.ButtonsContainer}>
                        <ul>
                            <li><a href="/Home" className={style.Active}>Home</a></li>
                            <li><a href="/News">News</a></li>
                            <li><a href="/Podcasts">Podcasts</a></li>
                            <li><a href="/Resources">TCA</a></li>
                        </ul>
                    </nav>
                    <button type="button">Contact Us</button>
                </div>
            </header>
        </>
    )
}

export default Header