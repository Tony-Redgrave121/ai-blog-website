import React from 'react'
import style from "./style.module.css"
import {updatePopupContent, updatePopupState, logout, deleteAccount} from "../../../../../store/reducers/userReducer";
import {useAppDispatch, useAppSelector} from "../../../../../utils/hooks/redux";
import BlurHashImage from "../../blurhashImage/BlurHashImage";
import Button from "../../buttons/Button";
import { HiOutlineKey, HiOutlineTrash } from "react-icons/hi2";

const PopupProfile = () => {
    const {userImg, userId, userName, userEmail, userState} = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()

    const handleLogOut = () => {
        dispatch(updatePopupState(false))

        setTimeout(() => {
            dispatch(logout())
            dispatch(updatePopupContent('register'))
            dispatch(updatePopupState(true))
        }, 350)
    }

    const handleDelete = () => {
        const user_id = userId
        handleLogOut()

        setTimeout(() => {
            dispatch(deleteAccount({user_id}))
        }, 350)
    }

    return (
        <div className={style.ProfileContainer}>
            <div>
                <h1>Your profile</h1>
                {userImg ?
                    <BlurHashImage imagePath={`users/${userId}/image/${userImg}`} hash='K9J8V04n00~q%MD%00-;%M' alt='profile'></BlurHashImage>
                    :
                    <img src={require('../../../../../utils/icons/profile/default-image.webp')} alt="profile"/>
                }
                <h3>{userName}</h3>
                <p>{userEmail}</p>
                <p>Account status: {userState ? "Activated" : "Unactivated"}</p>
            </div>
            <div>
                <Button foo={() => handleLogOut()}>Log Out <HiOutlineKey /></Button>
                <Button foo={() => handleDelete()}>Delete account <HiOutlineTrash /></Button>
            </div>
        </div>
    )
}

export default PopupProfile