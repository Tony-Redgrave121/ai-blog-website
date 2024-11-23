import React from 'react'
import style from "./style.module.css"
import ResourceContainer from "../generalComponents/resourceContainer/ResourceContainer";
import PhoneInput from 'react-phone-input-2'
import './phoneBlockStyle.css'
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const registerOptions = {
        firstName: { required: "First name is required" },
        lastName: { required: "Last name is required" },
        email: { required: "Email is required" },
        phone: { required: "Phone number is required" },
        message: { required: "Message is required" },
        agree: { required: "Your agree is required" },
    }

    const handleRegistration = (data: any) => console.log(data);
    const handleError = (errors: any) => {};

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
                    <form onSubmit={handleSubmit(handleRegistration, handleError)}>
                        <div>
                            <div className={style.InputBlock}>
                                <label htmlFor="first-name">First Name</label>
                                <input type='text' placeholder="Enter First Name" {...register('firstName', registerOptions.firstName) }></input>
                                <small className="text-danger">
                                    {errors.firstName && errors.firstName.message?.toString()}
                                </small>
                            </div>
                            <div className={style.InputBlock}>
                                <label htmlFor="last-name">Last Name</label>
                                <input type='text' name="last-name" placeholder="Enter Last Name"></input>
                            </div>
                        </div>
                        <div>
                            <div className={style.InputBlock}>
                                <label htmlFor="email">Email</label>
                                <input type='email' name="email" placeholder="Enter your Email"></input>
                            </div>
                            <div className={style.InputBlock}>
                                <label htmlFor="phone">Phone Number</label>
                                <PhoneInput country={'ua'} />
                            </div>
                        </div>
                        <div className={style.WideBlock}>
                            <div className={style.InputBlock}>
                                <label htmlFor="message">Message</label>
                                <textarea rows={4} name="message" placeholder="Enter your Message"></textarea>
                            </div>
                        </div>
                        <div className={style.WideBlock}>
                            <div>
                                <span>
                                    <input type='checkbox' name="checkbox"></input>
                                    <label htmlFor="checkbox">I agree with Terms of Use and Privacy Policy</label>
                                </span>
                                <button >Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </ResourceContainer>
    )
}

export default ContactForm