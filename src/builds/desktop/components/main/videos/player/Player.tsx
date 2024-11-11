import React, {useEffect, useRef, useState} from 'react'
import style from "./style.module.css"
import './animation.css'
import {HiPlayCircle, HiPauseCircle} from "react-icons/hi2";
import {CSSTransition} from "react-transition-group"

interface IPlayer {
    src: string
    type?: string
}

interface IPlayerState {
    state: boolean,
    time: string,
    mouseState: boolean
}

const Player: React.FC<IPlayer> = ({src, type}) => {
    const player = useRef<HTMLVideoElement>(null)
    const playerController = useRef<HTMLSpanElement>(null)
    const [playerState, setPlayerState] = useState<IPlayerState>({
        state: false,
        time: '0',
        mouseState: false,
    })

    const handlePlay = () => {
        if (player.current) {
            if (player.current.paused || player.current.ended) player.current.play()
            else player.current.pause()

            setPlayerState({
                ...playerState,
                state: !playerState.state
            })
        }
    }

    useEffect(() => {
        const videoPlayer = player.current
        if (videoPlayer) {
            const updateDuration = () => setPlayerState((prevState) => ({
                ...prevState,
                time: (videoPlayer.duration / 100).toFixed(2),
            }))

            videoPlayer.addEventListener('loadedmetadata', updateDuration)
            return () => videoPlayer.removeEventListener('loadedmetadata', updateDuration)
        }
    }, [])

    useEffect(() => {
        const videoPlayer = player.current
        const controller = playerController.current

        const handleVideoEnd = () => setPlayerState((prevState) => ({
            ...prevState,
            state: false,
        }))

        const handleMouse = (state: boolean) => setPlayerState((prevState) => ({
            ...prevState,
            mouseState: state,
        }))

        if (videoPlayer && controller) {
            videoPlayer.addEventListener('ended', handleVideoEnd)
            controller.addEventListener('mouseenter', () => handleMouse(true))
            controller.addEventListener('mouseleave', () => handleMouse(false))

            return () => {
                videoPlayer.removeEventListener('ended', handleVideoEnd)
                controller.removeEventListener('mouseenter', () => handleMouse(true))
                controller.removeEventListener('mouseleave', () => handleMouse(false))
            }
        }
    }, [])

    return (
        <section className={style.VideoPlayer}>
            <video ref={player}>
                <source src={require(`../../../../../../utils/icons/main/${src}.mp4`)} type="video/mp4"/>
            </video>
            <CSSTransition nodeRef={playerController} in={playerState.mouseState} timeout={200} classNames="player-controller-node">
                <span className={type && style[type]} ref={playerController}>
                    {playerState.state ? <HiPauseCircle onClick={handlePlay}/> : <HiPlayCircle onClick={handlePlay}/>}
                    {!type && <time>{playerState.time} min</time>}
                </span>
            </CSSTransition>
        </section>
    )
}

export default Player