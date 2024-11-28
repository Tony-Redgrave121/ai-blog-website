import React, {memo, useEffect, useRef} from 'react'
import style from './style.module.css'
import {HiArrowUpRight, HiMiniUser } from "react-icons/hi2"
import DesktopLogo from "../../../../utils/icons/logo/desktop-logo.svg"
import {useDebouncedCallback} from 'use-debounce'
import {Link, useLocation} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {updatePopupContent, updatePopupState} from "../../../../store/reducers/userReducer";
import {useAppDispatch} from "../../../../utils/hooks/redux";

const Header = () => {
    const header = useRef<HTMLHeadElement>(null)
    const navigate = useNavigate()
    const location = useLocation()
    const [currentLocation, setCurrentLocation] = React.useState('')
    const dispatch = useAppDispatch()

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
        // window.scrollTo({ top: 0 })
        setCurrentLocation(document.location.pathname)
    }, [location])

    const handleProfile = () => {
        dispatch(updatePopupContent(`   
             <h1>Message Sent Successfully!</h1>
             <h3>Thank you for getting in touch with AI Podcasts!</h3>
             <p>Your message has been successfully submitted, and our team will review it shortly. We appreciate your interest and will get back to you as soon as possible.</p>
             <p>If your inquiry is urgent, feel free to reach out directly via phone or email. In the meantime, stay tuned for updates, exciting content, and the latest from AI Podcasts!</p> 
        `))
        dispatch(updatePopupState(true))
    }

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
                                        <Link to={link.link} className={link.link === currentLocation ? style.Active : ''}>{link.title}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <span>
                        <button onClick={() => handleProfile()}><HiMiniUser/></button>
                        <button onClick={() => navigate('/contact')}>Contact Us</button>
                    </span>
                </div>
            </header>
        </>
    )
}

export default memo(Header)