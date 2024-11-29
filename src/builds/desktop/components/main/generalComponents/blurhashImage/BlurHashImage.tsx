import React, {useEffect, useRef, useState} from 'react'
import {Blurhash} from "react-blurhash"
import {CSSTransition} from "react-transition-group";
import './animation.css'
import Player from "../../videos/player/Player";

interface IBlurHashImageProps {
    imagePath: string,
    hash: string,
    alt?: string,
    width?: string,
    height?: string,
    type?: string,
}

const BlurHashImage: React.FC<IBlurHashImageProps> = ({imagePath, hash, alt, width= '100%', height = '100%', type}) => {
    const [fileLoaded, setFileLoaded] = useState(false)
    const [fileBlob, setFileBlob] = useState('')
    const blurRef = useRef(null)

    useEffect(() => {
        const loadImage = async () => {
            fetch(`http://localhost:5000/${imagePath}`)
                .then(resolve => resolve.blob())
                .then(data => {
                    setFileBlob(URL.createObjectURL(data))
                    setFileLoaded(true)
                })
                .catch(error => console.log(error))
        }
        loadImage()
    }, [imagePath, hash])

    return (
        <>
            {!fileLoaded &&
                <Blurhash hash={hash} width={width} height={height} resolutionX={32} resolutionY={32} punch={1}/>
            }
            <CSSTransition in={fileLoaded} nodeRef={blurRef} timeout={1000} classNames='blur-hash-node'>
                <div ref={blurRef} style={{display: fileLoaded ? "block" : "none"}}>
                    { !imagePath.includes('.mp4') ?
                        <img src={fileBlob} alt={alt}/>
                        :
                        fileBlob && <Player src={fileBlob} type={type}/>
                    }
                </div>
            </CSSTransition>
        </>
    )
}

export default BlurHashImage