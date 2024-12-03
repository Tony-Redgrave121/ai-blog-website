import React, {useEffect} from 'react'
import AppRouter from "./router/AppRouter"
import {BrowserRouter} from 'react-router-dom'
import {useAppDispatch, useAppSelector} from "./utils/hooks/redux";
import {updateIsLoading, updateIsMobile, userCheckAuth} from "./store/reducers/userReducer"
import {useDebouncedCallback} from "use-debounce";

function App() {
    const isLoading = useAppSelector(state => state.user.isLoading)
    const dispatch = useAppDispatch()

    const handleResize = useDebouncedCallback(() => {
        if (window.innerWidth <= 1240) dispatch(updateIsMobile(true))
        else dispatch(updateIsMobile(false))
    }, 100)

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', () => handleResize())
        return () => window.removeEventListener('resize', () => handleResize)
    }, [handleResize])

    useEffect(() => {
        if (localStorage.getItem('token')) dispatch(userCheckAuth())
        else dispatch(updateIsLoading(false))
    }, [dispatch])

    if (isLoading) return <h1>Loading...</h1>

    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    )
}

export default App
