import React from 'react'
import InputBlock from "../../inputBlock/InputBlock";
import {Controller, useForm} from "react-hook-form";
import style from "./style.module.css"
import PhoneInput, {CountryData} from "react-phone-input-2";

const PopupRegister = () => {
    const [file, setFile] = React.useState<File | null>()
    const { register, handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            user_image: null,
            user_name: '',
            user_email: '',
            user_password: '',
        }
    })

    const registerOptions = {
        user_name: { required: "Name is required" },
        user_email: {
            required: "Email is required",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
            }},
        user_password: { required: "Your agree is required" }
    }

    const handleRegistration = (data: any) => {
        console.log(data)
    }

    const handleImageChange = (file: FileList | null, onChange: (value: File) => void) => {
        if (file) {
            setFile(file[0])
            onChange(file[0])
        } else setFile(null)
    }

    return (
        <form onSubmit={handleSubmit(handleRegistration)} noValidate className={style.FormContainer}>
            <div>

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
            <InputBlock errors={errors} field={"user_name"} htmlFor={"user_name"} label={"Last Name"}>
            <input type='text' placeholder="Enter Name" {...register('user_name', registerOptions.user_name)}></input>
            </InputBlock>
            <InputBlock errors={errors} field={"user_email"} htmlFor={"user_email"} label={"Email"}>
                <input type='text' placeholder="Enter your Email" {...register('user_email', registerOptions.user_email)}></input>
            </InputBlock>
            <InputBlock errors={errors} field={"user_password"} htmlFor={"user_password"} label={"Password"}>
                <input type='text' placeholder="Enter your Password" {...register('user_password', registerOptions.user_password)}></input>
            </InputBlock>
            <div><button>Sign Up</button></div>
        </form>
    )
}

export default PopupRegister