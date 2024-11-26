import React, {useEffect, useRef, useState} from 'react'
import {Blurhash} from "react-blurhash"
import {CSSTransition} from "react-transition-group";
import './animation.css'

interface IBlurHashImageProps {
    imagePath: string,
    hash: string,
    alt?: string,
    width?: string,
    height?: string,
}

const BlurHashImage: React.FC<IBlurHashImageProps> = ({imagePath, hash, alt, width= '100%', height = '100%'}) => {
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
                <Blurhash hash={hash} width={width} height={height} resolutionX={32} resolutionY={32} punch={1}/>
            }
            <CSSTransition in={imageLoaded} nodeRef={blurRef} timeout={1000} classNames='blur-hash-node'>
                <div ref={blurRef} style={{display: imageLoaded ? "block" : "none"}}><img src={imageBlob} alt={alt}/></div>
            </CSSTransition>
        </>
    )
}

export default BlurHashImage