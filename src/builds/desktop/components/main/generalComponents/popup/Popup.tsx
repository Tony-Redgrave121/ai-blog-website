import React, {useEffect} from 'react'
import style from "./style.module.css"
import "./animation.css"
import {CSSTransition} from "react-transition-group"
import {updatePopupState} from "../../../../../../store/reducers/userReducer"
import {useAppDispatch, useAppSelector} from "../../../../../../utils/hooks/redux";

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
            setTimeout(() => popupRef.current!.style.display = 'none', 300)
        }
    }, [popupState])

    return (
        <CSSTransition in={popupState} nodeRef={popupRef} timeout={0} classNames="popup-node">
            <div className={style.PopupContainer} ref={popupRef} onClick={() => dispatch(updatePopupState(false))}>
                <div className={style.Popup} dangerouslySetInnerHTML={{__html: popupContent}}></div>
            </div>
        </CSSTransition>
    )
}

export default Popup