import React, {useEffect, useRef, useState} from 'react'
import {Blurhash} from "react-blurhash"
import {CSSTransition} from "react-transition-group";
import './animation.css'

interface IBlurHashImageProps {
    imagePath: string,
    hash: string,
}

const BlurHashImage: React.FC<IBlurHashImageProps> = ({imagePath, hash}) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const [imageBlob, setImageBlob] = useState('')
    const blurRef = useRef(null)

    useEffect(() => {
        const loadImage = async () => {
            fetch(`http://localhost:3000/server/${imagePath}`)
                .then(resolve => resolve.blob())
                .then(data => {
                    setImageBlob(URL.createObjectURL(data))
                    setImageLoaded(true)
                })
                .catch(error => console.log(error))
        }
        loadImage()
    }, [imagePath, hash])

    return (
        <>
            {!imageLoaded &&
                <Blurhash hash={hash} width={'100%'} height={'100%'} resolutionX={32} resolutionY={32} punch={1}/>
            }
            <CSSTransition in={imageLoaded} nodeRef={blurRef} timeout={1000} classNames='blur-hash-node'>
                <div ref={blurRef} style={{visibility: imageLoaded ? "visible" : "hidden"}}><img src={imageBlob} alt="blog" loading="lazy"/></div>
            </CSSTransition>
        </>
    )
}

export default BlurHashImage