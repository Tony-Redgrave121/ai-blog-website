import React from 'react'
import style from "./style.module.css"
import ResourceContainer from "../generalComponents/resourceContainer/ResourceContainer";
import {HiArrowUpRight, HiOutlinePlus} from "react-icons/hi2";
import Button from "../../buttons/Button";

const FAQ = () => {
    const questions = [
        {
            title: "What is AI?",
            desc: "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making."
        },
        {
            title: "How can I listen to your podcasts?",
            desc: "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making."
        },
        {
            title: "Are your podcasts free to listen to?",
            desc: "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making."
        },
        {
            title: "Can I download episodes to listen offline?",
            desc: "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making."
        },
        {
            title: "How often do you release new episodes?",
            desc: "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making."
        },
    ]

    return (
        <ResourceContainer>
            <div>
                <div className={style.ResourceContainerLeft}>
                    <div>
                        <img src={require(`../../../../../utils/icons/main/contact/image_2.svg`).default} alt="Contact Form"/>
                        <h1>Asked question</h1>
                        <p>If the question is not available on our FAQ section, Feel free to contact us personally, we will resolve your respective doubts. </p>
                        <span>
                            <Button foo={() => {}}>Ask Qustion <HiArrowUpRight/></Button>
                        </span>
                    </div>
                </div>
                <div className={style.ResourceContainerRight}>
                    {
                        questions.map(question => (
                            <div>
                                <span><h2>{question.title}</h2> <HiOutlinePlus /></span>
                                <p>{question.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </ResourceContainer>
    )
}

export default FAQ