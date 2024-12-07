import React from 'react'
import style from "./style.module.css"
import ResourceContainer from "../generalComponents/resourceContainer/ResourceContainer";
import {HiArrowUpRight} from "react-icons/hi2";
import Button from "../generalComponents/buttons/Button";
import DescBlock from "./DescBlock";

const FAQ = () => {
    const questions = [
        {
            title: "What is AI?",
            desc: "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making."
        },
        {
            title: "How can I listen to your podcasts?",
            desc: "You can listen to our podcasts through popular streaming platforms like Spotify, Apple Podcasts, and Google Podcasts. Simply search for our podcast name, and you can start listening to episodes instantly."
        },
        {
            title: "Are your podcasts free to listen to?",
            desc: "Yes, all of our podcast episodes are free to listen to. You can stream or download them at no cost from any of the major podcast platforms we’re available on."
        },
        {
            title: "Can I download episodes to listen offline?",
            desc: "Absolutely! Most podcast platforms allow you to download episodes for offline listening. Just find the download option on the episode page, and you can enjoy our content anywhere, even without an internet connection."
        },
        {
            title: "How often do you release new episodes?",
            desc: "We release new episodes every week. Each episode explores fresh topics and insightful conversations, so be sure to subscribe to stay updated on the latest releases."
        },
    ]

    return (
        <ResourceContainer>
            <div>
                <div className={style.ResourceContainerLeft}>
                    <div>
                        <img src={require(`../../../utils/icons/main/contact/image_2.svg`).default} alt="Contact Form"/>
                        <h1>Asked question</h1>
                        <p>If the question is not available on our FAQ section, Feel free to contact us personally, we will resolve your respective doubts. </p>
                        <span>
                            <Button foo={() => {}}>Ask Question <HiArrowUpRight/></Button>
                        </span>
                    </div>
                </div>
                <div className={style.ResourceContainerRight}>
                    {
                        questions.map(question => (
                            <DescBlock question={question} key={question.title}/>
                        ))
                    }
                </div>
            </div>
        </ResourceContainer>
    )
}

export default FAQ