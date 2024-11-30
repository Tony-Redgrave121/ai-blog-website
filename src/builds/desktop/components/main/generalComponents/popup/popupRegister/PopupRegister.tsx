import React from 'react'
import InputBlock from "../../inputBlock/InputBlock";
import {Controller, useForm} from "react-hook-form";
import style from "./style.module.css"
import {updatePopupContent, updatePopupState} from "../../../../../../../store/reducers/userReducer";
import {useAppDispatch} from "../../../../../../../utils/hooks/redux";
import {registration} from '../../../../../../../store/reducers/userReducer'

interface IRegistration {
    user_image: File | null,
    user_name: string,
    user_email: string,
    user_password: string,
}

const PopupRegister = () => {
    const [file, setFile] = React.useState<File | null>()
    const dispatch = useAppDispatch()

    const { register, handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            user_image: null,
            user_name: '',
            user_email: '',
            user_password: ''
        }
    })

    const registerOptions = {
        user_name: { required: "Name is required" },
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

    const handleRegistration = async (data: IRegistration) => {
        const formData = new FormData()
        formData.append('user_image', data.user_image as File)
        formData.append('user_name', data.user_name)
        formData.append('user_email', data.user_email)
        formData.append('user_password', data.user_password)

        const res = await dispatch(registration({formData: formData}))

        console.log(res)
    }

    const handleImageChange = (file: FileList | null, onChange: (value: File) => void) => {
        if (file) {
            setFile(file[0])
            onChange(file[0])
        } else setFile(null)
    }

    const handleFormChange = () => {
        dispatch(updatePopupState(false))

        setTimeout(() => {
            dispatch(updatePopupContent('login'))
            dispatch(updatePopupState(true))
        }, 350)
    }

    return (
        <form onSubmit={handleSubmit(handleRegistration)} noValidate className={style.FormContainer}>
            <div className={style.FileBlock}>
                <Controller
                    control={control}
                    name="user_image"
                    render={({field: {onChange}}) =>
                        <input type="file" accept="image/png, image/jpeg" id='user_image' onChange={(event) => handleImageChange(event.currentTarget.files, onChange)}/>}
                />
                <label htmlFor="user_image">
                    {file ?
                        <img src={URL.createObjectURL(file)} alt="profile"/>
                        :
                        <img src={require('../../../../../../../utils/icons/profile/default-image.jpg')} alt="profile"/>
                    }
                </label>
            </div>
            <InputBlock errors={errors} field={"user_name"} htmlFor={"user_name"} label={"Name"}>
            <input type='text' placeholder="Enter your Name" {...register('user_name', registerOptions.user_name)}></input>
            </InputBlock>
            <InputBlock errors={errors} field={"user_email"} htmlFor={"user_email"} label={"Email"}>
                <input type='email' placeholder="Enter your Email" {...register('user_email', registerOptions.user_email)}></input>
            </InputBlock>
            <InputBlock errors={errors} field={"user_password"} htmlFor={"user_password"} label={"Password"}>
                <input type='password' placeholder="Enter your Password" {...register('user_password', registerOptions.user_password)}></input>
            </InputBlock>
            <div>
                <span><button>Sign Up</button></span>
                <p onClick={() => handleFormChange()}>Already have an account?</p>
            </div>
        </form>
    )
}

export default PopupRegister