import React, {useEffect, useRef, useState} from 'react'
import style from "./style.module.css"
import {HiPlayCircle, HiPauseCircle} from "react-icons/hi2";

interface IPlayer {
    src: string
}

interface IPlayerState {
    state: boolean,
    time: string
}

const Player: React.FC<IPlayer> = ({src}) => {
    const player = useRef<HTMLVideoElement>(null)
    const [playerState, setPlayerState] = useState<IPlayerState>({
        state: false,
        time: '0'
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
        const videoPlayer = player.current;
        const handleVideoEnd = () => setPlayerState((prevState) => ({
            ...prevState,
            state: false,
        }))

        if (videoPlayer) {
            videoPlayer.addEventListener('ended', handleVideoEnd)
            return () => videoPlayer.removeEventListener('ended', handleVideoEnd)
        }
    }, [])

    return (
        <section className={style.VideoPlayer}>
            <video ref={player}>
                <source src={require(`../../../../../../utils/icons/main/videos/${src}.mp4`)} type="video/mp4"/>
            </video>
            <span>
                {playerState.state ? <HiPauseCircle onClick={handlePlay}/> : <HiPlayCircle onClick={handlePlay}/>}
                <time>{playerState.time} min</time>
            </span>
        </section>
    )
}

export default Player