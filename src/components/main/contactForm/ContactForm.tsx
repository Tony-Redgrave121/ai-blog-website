import React from 'react'
import style from "./style.module.css"
import './phoneBlockStyle.css'
import ResourceContainer from "../generalComponents/resourceContainer/ResourceContainer";
import PhoneInput, {CountryData} from 'react-phone-input-2'
import { useForm, Controller } from "react-hook-form"
import {validatePhoneNumberLength, formatIncompletePhoneNumber, CountryCode } from 'libphonenumber-js'
import {updatePopupContent, updatePopupState} from '../../../store/reducers/userReducer'
import {useAppDispatch} from "../../../utils/hooks/redux"
import InputBlock from "../generalComponents/inputBlock/InputBlock"

const ContactForm = () => {
    const { register, control, handleSubmit, formState: {errors }} = useForm()
    const dispatch = useAppDispatch()

    const sendingOptions = {
        firstName: { required: "First name is required" },
        lastName: { required: "Last name is required" },
        email: {
            required: "Email is required",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
            }},
        message: { required: "Message is required" },
        agree: { required: "Your agree is required" }
    }

    const handleRegistration = () => {
        dispatch(updatePopupContent('contactSuccess'))
        dispatch(updatePopupState(true))
    }

    const [phoneCountry, setPhoneCountry] = React.useState('UA')
    const [phone, setPhone] = React.useState('')

    const phoneValidation = () => {
        const country = phoneCountry as CountryCode
        const phoneNumber = formatIncompletePhoneNumber(phone, country)
        const validation = validatePhoneNumberLength(phoneNumber, country)

        if (validation === undefined) return true
        else if (validation === 'NOT_A_NUMBER' || validation === 'INVALID_COUNTRY') return 'Phone number is required'
        else return 'Invalid phone number'
    }

    return (
        <ResourceContainer>
            <div>
                <div className={style.ResourceContainerLeft}>
                    <div>
                        <img src={require(`../../../utils/icons/main/contact/image_1.svg`).default} alt="Contact Form"/>
                        <h1>Get in Touch with AI Podcasts</h1>
                    </div>
                </div>
                <div className={style.ResourceContainerRight}>
                    <form onSubmit={handleSubmit(handleRegistration)} noValidate>
                        <div>
                            <InputBlock errors={errors} field={"firstName"} htmlFor={"first-name"} label={"First Name"}>
                                <input type='text' placeholder="Enter First Name" {...register('firstName', sendingOptions.firstName)}></input>
                            </InputBlock>
                            <InputBlock errors={errors} field={"lastName"} htmlFor={"last-name"} label={"Last Name"}>
                                <input type='text' placeholder="Enter Last Name" {...register('lastName', sendingOptions.lastName)}></input>
                            </InputBlock>
                        </div>
                        <div>
                            <InputBlock errors={errors} field={"email"} htmlFor={"email"} label={"Email"}>
                                <input type='email' placeholder="Enter your Email" {...register('email', sendingOptions.email,
                                )}></input>
                            </InputBlock>
                            <InputBlock errors={errors} field={"phone"} htmlFor={"phone"} label={"Phone Number"}>
                                <Controller
                                    control={control}
                                    name="phone"
                                    rules={{ validate: () => phoneValidation() }}
                                    render={({field: { onChange }}) => <PhoneInput country={'ua'} onChange={(value, country) => {
                                        const countryData = country as CountryData
                                        setPhoneCountry(countryData.countryCode.toUpperCase())
                                        onChange(value)
                                        setPhone(value)
                                    }}/>}
                                />
                            </InputBlock>
                        </div>
                        <div className={style.WideBlock}>
                            <InputBlock errors={errors} field={"message"} htmlFor={"message"} label={"Message"}>
                                <textarea rows={4} placeholder="Enter your Message" {...register('message', sendingOptions.message)}></textarea>
                            </InputBlock>
                        </div>
                        <div className={style.WideBlock}>
                            <div>
                                <span>
                                    <input type='checkbox' {...register('agree', sendingOptions.agree)}></input>
                                    <label htmlFor="checkbox">I agree with Terms of Use and Privacy Policy</label>
                                    <small>
                                        {errors.agree && errors.agree.message?.toString() + '*'}
                                    </small>
                                </span>
                                <button>Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </ResourceContainer>
    )
}

export default ContactForm