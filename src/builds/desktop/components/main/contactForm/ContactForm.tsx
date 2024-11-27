import React from 'react'
import style from "./style.module.css"
import './phoneBlockStyle.css'
import ResourceContainer from "../generalComponents/resourceContainer/ResourceContainer";
import PhoneInput, {CountryData} from 'react-phone-input-2'
import { useForm, Controller } from "react-hook-form";
import {validatePhoneNumberLength, formatIncompletePhoneNumber, CountryCode } from 'libphonenumber-js'
import {updatePopupContent, updatePopupState} from '../../../../../store/reducers/userReducer'
import {useAppDispatch} from "../../../../../utils/hooks/redux";

const ContactForm = () => {
    const { register, control, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useAppDispatch()

    const registerOptions = {
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

    const handleRegistration = (data: any) => {
        console.log(data)

        dispatch(updatePopupContent(`   
             <h1>Message Sent Successfully!</h1>
             <h3>Thank you for getting in touch with AI Podcasts!</h3>
             <p>Your message has been successfully submitted, and our team will review it shortly. We appreciate your interest and will get back to you as soon as possible.</p>
             <p>If your inquiry is urgent, feel free to reach out directly via phone or email. In the meantime, stay tuned for updates, exciting content, and the latest from AI Podcasts!</p> 
        `))
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
                        <img src={require(`../../../../../utils/icons/main/contact/image_1.svg`).default} alt="Contact Form"/>
                        <h1>Get in Touch with AI Podcasts</h1>
                    </div>
                </div>
                <div className={style.ResourceContainerRight}>
                    <form onSubmit={handleSubmit(handleRegistration)} noValidate>
                        <div>
                            <div className={style.InputBlock}>
                                <label htmlFor="first-name">First Name</label>
                                <input type='text' placeholder="Enter First Name" {...register('firstName', registerOptions.firstName)}></input>
                                <small>
                                    {errors.firstName && errors.firstName.message?.toString() + '*'}
                                </small>
                            </div>
                            <div className={style.InputBlock}>
                                <label htmlFor="last-name">Last Name</label>
                                <input type='text' placeholder="Enter Last Name" {...register('lastName', registerOptions.lastName)}></input>
                                <small>
                                    {errors.lastName && errors.lastName.message?.toString() + '*'}
                                </small>
                            </div>
                        </div>
                        <div>
                            <div className={style.InputBlock}>
                                <label htmlFor="email">Email</label>
                                <input type='email' placeholder="Enter your Email" {...register('email', registerOptions.email,
                                )}></input>
                                <small>
                                    {errors.email && errors.email.message?.toString() + '*'}
                                </small>
                            </div>
                            <div className={style.InputBlock}>
                                <label htmlFor="phone">Phone Number</label>
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
                                <small>
                                    {errors.phone && errors.phone.message?.toString() + '*'}
                                </small>
                            </div>
                        </div>
                        <div className={style.WideBlock}>
                            <div className={style.InputBlock}>
                                <label htmlFor="message">Message</label>
                                <textarea rows={4} placeholder="Enter your Message" {...register('message', registerOptions.message)}></textarea>
                                <small>
                                    {errors.message && errors.message.message?.toString() + '*'}
                                </small>
                            </div>
                        </div>
                        <div className={style.WideBlock}>
                            <div>
                                <span>
                                    <input type='checkbox' {...register('agree', registerOptions.agree)}></input>
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