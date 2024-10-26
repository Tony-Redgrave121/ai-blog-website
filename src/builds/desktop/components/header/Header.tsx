import React from 'react'
import style from './style.module.css'
import { HiArrowUpRight } from "react-icons/hi2"
import DesktopLogo from "../../../../utils/icons/logo/desktop-logo.svg"

const Header = () => {
    return (
        <header className={style.Header}>
            <div className={style.TopBanner}>
                <a href="https://">Subscribe to our Newsletter For New & latest Blogs and Resources <HiArrowUpRight /></a>
            </div>
            <div className={style.Navbar}>
                <a href="https://"><img src={DesktopLogo} alt="Desktop Logo" /></a>
                <nav className={style.ButtonsContainer}>
                    <ul>
                        <li><a href="/Home" className={style.Active}>Home</a></li>
                        <li><a href="/News">News</a></li>
                        <li><a href="/Podcasts">Podcasts</a></li>
                        <li><a href="/Resources">Resources</a></li>
                    </ul>
                </nav>
                <button type="button">Contact Us</button>
            </div>
        </header>
    )
}

export default Header