import React, {memo, useEffect, useRef} from 'react'
import style from './style.module.css'
import {HiArrowUpRight, HiMiniUser} from "react-icons/hi2"
import DesktopLogo from "../../../../utils/icons/logo/desktop-logo.svg"
import {useDebouncedCallback} from 'use-debounce'
import {Link, useLocation} from "react-router-dom"
import {useNavigate} from 'react-router-dom'
import {updatePopupContent, updatePopupState} from "../../../../store/reducers/userReducer"
import {useAppDispatch, useAppSelector} from "../../../../utils/hooks/redux"
import BlurHashImage from "../main/generalComponents/blurhashImage/BlurHashImage";

const Header = () => {
    const header = useRef<HTMLHeadElement>(null)
    const navigate = useNavigate()
    const location = useLocation()
    const [currentLocation, setCurrentLocation] = React.useState('')
    const dispatch = useAppDispatch()
    const {isAuth, userImg, userId} = useAppSelector(state => state.user)

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
        dispatch(updatePopupContent('register'))
        dispatch(updatePopupState(true))
    }

    const handleActiveProfile = () => {
        dispatch(updatePopupContent('profile'))
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
                                links.map(link => (
                                    <li key={link.title}>
                                        <Link to={link.link}
                                              className={link.link === currentLocation ? style.Active : ''}>{link.title}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <span>
                        {isAuth ?
                            <button onClick={() => handleActiveProfile()} className={style.ProfileButtonActive}>
                                {userImg ?
                                    <BlurHashImage imagePath={`users/${userId}/image/${userImg}`}
                                                   hash='K9J8V04n00~q%MD%00-;%M' alt='profile'></BlurHashImage>
                                    :
                                    <img src={require('../../../../utils/icons/profile/default-image.jpg')}
                                         alt="profile"/>
                                }
                            </button>
                            :
                            <button onClick={() => handleProfile()} className={style.ProfileButton}><HiMiniUser/>
                            </button>
                        }
                        <button onClick={() => navigate('/contact')}>Contact Us</button>
                    </span>
                </div>
            </header>
        </>
    )
}

export default memo(Header)