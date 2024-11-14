import React from 'react'
import style from "./style.module.css"
import ResourceContainer from "../generalComponents/resourceContainer/ResourceContainer";
import PhoneInput from 'react-phone-input-2'

const ContactForm = () => {
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
                    <form>
                        <div>
                            <div className={style.InputBlock}>
                                <label htmlFor="first-name">First Name</label>
                                <input type='text' name="first-name" placeholder="Enter First Name"></input>
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
                                <PhoneInput
                                    country={'ua'}
                                />
                                {/*<input type='tel' name="phone" placeholder="Enter Phone Number"></input>*/}
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
                                <button type='button'>Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </ResourceContainer>
    )
}

export default ContactForm