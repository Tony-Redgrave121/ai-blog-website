import React, {memo, useEffect, useRef} from 'react'
import style from './style.module.css'
import './animationBackground.css'
import './animationNav.css'
import {HiArrowUpRight, HiMiniUser, HiBars3BottomRight} from "react-icons/hi2"
import DesktopLogo from "../../utils/icons/logo/desktop-logo.svg"
import {useDebouncedCallback} from 'use-debounce'
import {Link, useLocation} from "react-router-dom"
import {useNavigate} from 'react-router-dom'
import {updatePopupContent, updatePopupState} from "../../store/reducers/userReducer"
import {useAppDispatch, useAppSelector} from "../../utils/hooks/redux"
import {CSSTransition} from "react-transition-group";
import useBody from "../../utils/hooks/useBody"
import fetchImg from "../../utils/fetch/fetchImg";

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

const Header = memo(() => {
    const header = useRef<HTMLHeadElement>(null)
    const backgroundRef = useRef(null)
    const navRef = useRef(null)
    const [isMobileOpen, setIsMobileOpen] = React.useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const [currentLocation, setCurrentLocation] = React.useState('')
    const [profile, setProfile] = React.useState('')
    const dispatch = useAppDispatch()
    const {isAuth, userImg, userId, isMobile} = useAppSelector(state => state.user)
    useBody(isMobileOpen, backgroundRef)

    useEffect(() => {
        const loadImage = async () => {
            const picture = await fetchImg(`users/${userId}/image/${userImg}`)
            setProfile(URL.createObjectURL(picture))
        }

        userImg && loadImage()
    }, [userId, userImg])

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

    useEffect(() => {
        window.scrollTo({ top: 0 })
        setCurrentLocation(document.location.pathname)
    }, [location])

    const handleEvent = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>, foo: () => void) => {
        e.preventDefault()
        setIsMobileOpen(false)
        setTimeout(foo, 100)
    }

    const RightButtons = () => {
        const handleProfile = (popup: string) => {
            dispatch(updatePopupContent(popup))
            dispatch(updatePopupState(true))
        }

        return (
            <span>
                {isAuth ?
                    <button onClick={e => handleEvent(e, () => handleProfile('profile'))} className={style.ProfileButtonActive}>
                        <img src={(userImg && profile) ? profile : require('../../utils/icons/profile/default-image.webp')} alt="profile"/>
                    </button>
                    :
                    <button onClick={e => handleEvent(e, () => handleProfile('register'))} className={style.ProfileButton}><HiMiniUser/></button>
                }
                <button onClick={e => handleEvent(e, () => navigate('/contact'))}>Contact Us</button>
            </span>
        )
    }

    const ButtonContainer = memo(React.forwardRef<HTMLDivElement>((_, ref) => {
        return (
            <nav className={style.ButtonContainer} ref={ref} onClick={event => event.stopPropagation()}>
                <ul>
                    {
                        links.map(link => (
                            <li key={link.title}>
                                <Link to={link.link} className={link.link === currentLocation ? style.Active : ''} onClick={e => handleEvent(e, () => navigate(link.link))}>{link.title}</Link>
                            </li>
                        ))
                    }
                </ul>
                {isMobile && <RightButtons/>}
            </nav>
        )
    }))

    const TopBanner = memo(() =>
        <div className={style.TopBanner}>
            <a href="/">Subscribe to our Newsletter For New & latest Blogs and TCA <HiArrowUpRight/></a>
        </div>
    )

    return (
        <>
            <TopBanner />
            <header className={style.Header} ref={header}>
                <div className={style.Navbar}>
                    <Link to="/"><img src={DesktopLogo} alt="Desktop Logo"/></Link>
                    {isMobile &&
                        <>
                            <ButtonContainer/>
                            <button onClick={() => setIsMobileOpen(!isMobileOpen)}><HiBars3BottomRight /></button>
                            <CSSTransition in={isMobileOpen} nodeRef={backgroundRef} timeout={0} classNames="background-node">
                                <div className={style.Background} ref={backgroundRef} onClick={() => setIsMobileOpen(false)}>
                                    <CSSTransition in={isMobileOpen} nodeRef={navRef} timeout={0} classNames="nav-node">
                                        <ButtonContainer ref={navRef}/>
                                    </CSSTransition>
                                </div>
                            </CSSTransition>
                        </>
                    }
                    {!isMobile &&
                        <>
                            <ButtonContainer ref={navRef}/>
                            <RightButtons />
                        </>
                    }
                </div>
            </header>
        </>
    )
})

export default Header