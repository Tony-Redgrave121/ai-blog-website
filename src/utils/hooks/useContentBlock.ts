import {useRef, useState} from "react"

const useContentBlock = () => {
    const [blockState, setBlockState] = useState(false)
    const contentBlock = useRef<HTMLDivElement>(null)

    const handleBlockHeight = () => {
        if (contentBlock.current) {
            contentBlock.current.scrollIntoView()
            setBlockState(!blockState)
        }
    }

    const handleLink = () => {
        if (contentBlock.current && !blockState) {
            setBlockState(!blockState)
        }
    }

    return {
        blockState,
        contentBlock,
        handleBlockHeight,
        handleLink
    }
}

export default useContentBlock