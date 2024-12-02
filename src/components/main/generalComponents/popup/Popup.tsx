import React, {useEffect} from 'react'
import style from "./style.module.css"
import "./animation.css"
import {CSSTransition} from "react-transition-group"
import {updatePopupState} from "../../../../store/reducers/userReducer"
import {useAppDispatch, useAppSelector} from "../../../../utils/hooks/redux";
import { HiOutlineXMark } from "react-icons/hi2"
import PopupRegister from "./popupRegister/PopupRegister";
import PopupLogin from "./popupLogin/PopupLogin";
import PopupProfile from "./popupProfile/PopupProfile";

const Popup = () => {
    const popupRef = React.useRef<HTMLDivElement>(null)
    const {popupState, popupContent} = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (popupState) {
            document.querySelector('body')!.style.overflow = 'hidden'
            popupRef.current!.style.display = 'flex'
        } else {
            document.querySelector('body')!.style.overflow = 'visible'
            setTimeout(() => {
                if (popupRef.current) popupRef.current.style.display = 'none'
            }, 300)
        }
    }, [popupState])

    const handleRender = () => {
        if (popupContent === 'contactSuccess') return (
            <>
                <h1>Message Sent Successfully!</h1>
                <h3>Thank you for getting in touch with AI Podcasts!</h3>
                <p>Your message has been successfully submitted, and our team will review it shortly. We appreciate your interest and will get back to you as soon as possible.</p>
                <p>If your inquiry is urgent, feel free to reach out directly via phone or email. In the meantime, stay tuned for updates, exciting content, and the latest from AI Podcasts!</p>
            </>
        )
        else if (popupContent === 'register') return <PopupRegister />
        else if (popupContent === 'login') return <PopupLogin />
        else if (popupContent === 'profile') return <PopupProfile />
    }

    return (
        <CSSTransition in={popupState} nodeRef={popupRef} timeout={0} classNames="popup-node">
            <div className={style.PopupContainer} ref={popupRef} onClick={() => dispatch(updatePopupState(false))}>
                <div className={style.Popup} onClick={el => el.stopPropagation()}>
                    <HiOutlineXMark className={style.CloseButton} size={34} onClick={() => dispatch(updatePopupState(false))}/>
                    {handleRender()}
                </div>
            </div>
        </CSSTransition>
    )
}

export default Popup