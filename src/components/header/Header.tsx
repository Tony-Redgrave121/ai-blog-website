import React, {memo, useEffect, useRef} from 'react'
import style from './style.module.css'
import './animation.css'
import {HiArrowUpRight, HiMiniUser, HiBars3BottomRight} from "react-icons/hi2"
import DesktopLogo from "../../utils/icons/logo/desktop-logo.svg"
import {useDebouncedCallback} from 'use-debounce'
import {Link, useLocation} from "react-router-dom"
import {useNavigate} from 'react-router-dom'
import {updatePopupContent, updatePopupState} from "../../store/reducers/userReducer"
import {useAppDispatch, useAppSelector} from "../../utils/hooks/redux"
import BlurHashImage from "../main/generalComponents/blurhashImage/BlurHashImage";
import {CSSTransition} from "react-transition-group";

const Header = () => {
    const header = useRef<HTMLHeadElement>(null)
    const buttonsContainer = useRef(null)
    const [isMobileOpen, setIsMobileOpen] = React.useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const [currentLocation, setCurrentLocation] = React.useState('')
    const dispatch = useAppDispatch()
    const {isAuth, userImg, userId, isMobile} = useAppSelector(state => state.user)

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
        window.scrollTo({ top: 0 })
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

    const handleEvent = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>, foo: () => void) => {
        e.preventDefault()
        setIsMobileOpen(false)
        setTimeout(foo, 100)
    }

    const RightButtons = memo(() => {
        return (
            <span>
                {isAuth ?
                    <button onClick={e => handleEvent(e, () => handleActiveProfile())} className={style.ProfileButtonActive}>
                        {userImg ?
                            <BlurHashImage imagePath={`users/${userId}/image/${userImg}`} hash='K9J8V04n00~q%MD%00-;%M' alt='profile'></BlurHashImage>
                            :
                            <img src={require('../../utils/icons/profile/default-image.webp')} alt="profile"/>
                        }
                    </button>
                    :
                    <button onClick={e => handleEvent(e, () => handleProfile())} className={style.ProfileButton}><HiMiniUser/></button>
                }
                <button onClick={e => handleEvent(e, () => navigate('/contact'))}>Contact Us</button>
            </span>
        )
    })

    const ButtonContainer = memo(React.forwardRef<HTMLDivElement>((_, ref) => {
        return (
            <nav className={style.ButtonsContainer} ref={ref}>
                <ul>
                    {
                        links.map(link => (
                            <li key={link.title}>
                                <Link to={link.link} className={link.link === currentLocation ? style.Active : ''} onClick={e => handleEvent(e, () => navigate(link.link))}>{link.title}</Link>
                            </li>
                        ))
                    }
                </ul>
                {isMobile && <RightButtons />}
            </nav>
        )
    }))

    return (
        <>
            <div className={style.TopBanner}>
                <a href="/">Subscribe to our Newsletter For New & latest Blogs and TCA <HiArrowUpRight/></a>
            </div>
            <header className={style.Header} ref={header}>
                <div className={style.Navbar}>
                    <Link to="/"><img src={DesktopLogo} alt="Desktop Logo"/></Link>
                    {!(!isMobile && <ButtonContainer />) &&
                        <button onClick={() => setIsMobileOpen(!isMobileOpen)}>
                            <HiBars3BottomRight />
                        </button>
                    }
                    <CSSTransition in={isMobileOpen} nodeRef={buttonsContainer} timeout={0} classNames="button-container-node">
                        <ButtonContainer ref={buttonsContainer}/>
                    </CSSTransition>
                    {!isMobile && <RightButtons />}
                </div>
            </header>
        </>
    )
}

export default memo(Header)