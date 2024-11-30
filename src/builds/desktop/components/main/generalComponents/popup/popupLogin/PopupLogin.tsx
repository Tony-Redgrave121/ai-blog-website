import React from 'react'
import InputBlock from "../../inputBlock/InputBlock";
import {useForm} from "react-hook-form";
import style from "../popupRegister/style.module.css"
import {registration, updatePopupContent, updatePopupState} from "../../../../../../../store/reducers/userReducer";
import {useAppDispatch} from "../../../../../../../utils/hooks/redux";

interface ILogin {
    user_image: File | null,
    user_name: string,
    user_email: string,
    user_password: string,
}

const PopupLogin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useAppDispatch()

    const loginOptions = {
        user_email: {
            required: "Email is required",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
            }},
        user_password: { required: "Password is required" }
    }

    const handleLogin = async (data: any) => {
        const formData = new FormData()
        formData.append('user_email', data.user_email)
        formData.append('user_password', data.user_password)

        const res = await dispatch(registration({formData: formData}))
        console.log(res)
    }

    const handleFormChange = () => {
        dispatch(updatePopupState(false))

        setTimeout(() => {
            dispatch(updatePopupContent('register'))
            dispatch(updatePopupState(true))
        }, 350)
    }

    return (
        <form onSubmit={handleSubmit(handleLogin)} noValidate className={style.FormContainer}>
            <InputBlock errors={errors} field={"user_email"} htmlFor={"user_email"} label={"Email"}>
                <input type='text' placeholder="Enter your Email" {...register('user_email', loginOptions.user_email)}></input>
            </InputBlock>
            <InputBlock errors={errors} field={"user_password"} htmlFor={"user_password"} label={"Password"}>
                <input type='text' placeholder="Enter your Password" {...register('user_password', loginOptions.user_password)}></input>
            </InputBlock>
            <div>
                <span><button>Sign In</button></span>
                <p onClick={() => handleFormChange()}>Don't have an account yet?</p>
            </div>
        </form>
    )
}

export default PopupLogin