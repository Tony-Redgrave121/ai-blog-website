import React from 'react'
import InputBlock from "../../inputBlock/InputBlock";
import {useForm} from "react-hook-form";
import style from "../popupRegister/style.module.css"
import {login, updatePopupContent, updatePopupState} from "../../../../../../../store/reducers/userReducer";
import {useAppDispatch} from "../../../../../../../utils/hooks/redux";

interface ILogin {
    user_email: string,
    user_password: string,
}

const PopupLogin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            user_email: '',
            user_password: ''
        }
    })
    const dispatch = useAppDispatch()

    const [errorForm, setErrorForm] = React.useState<string | null>()
    const loginOptions = {
        user_email: {
            required: "Email is required",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
            }},
        user_password: {
            required: "Password is required",
            pattern: {
                value: /^.{8,}$/,
                message: "Password must be at least 8 characters long"
            }
        }
    }

    const handleLogin = async (data: ILogin) => {
        const formData = new FormData()
        formData.append('user_email', data.user_email)
        formData.append('user_password', data.user_password)

        const res = await dispatch(login({formData: formData})) as any

        if (res.payload.message) setErrorForm(res.payload.message)
        else dispatch(updatePopupState(false))
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
                <input type='email' placeholder="Enter your Email" {...register('user_email', loginOptions.user_email)}></input>
            </InputBlock>
            <InputBlock errors={errors} field={"user_password"} htmlFor={"user_password"} label={"Password"}>
                <input type='password' placeholder="Enter your Password" {...register('user_password', loginOptions.user_password)}></input>
            </InputBlock>
            <div>
                <span><button>Sign In</button></span>
                <p onClick={() => handleFormChange()}>Don't have an account yet?</p>
                <small>
                    {errorForm && errorForm}
                </small>
            </div>
        </form>
    )
}

export default PopupLogin