import React, {useEffect} from "react"

const useBody = (popupState: boolean, popupRef: React.RefObject<HTMLDivElement>) => {
    useEffect(() => {
        const body = document.querySelector("body")
        if (!body || !popupRef.current) return

        if (popupState) {
            document.querySelector('body')!.style.overflow = 'hidden'
            popupRef.current!.style.display = 'flex'
        } else {
            document.querySelector('body')!.style.overflow = 'visible'
            setTimeout(() => {
                if (popupRef.current) popupRef.current.style.display = 'none'
            }, 300)
        }

        return () => {
            body.style.overflow = 'visible'
        }
    }, [popupState, popupRef])
}

export default useBody