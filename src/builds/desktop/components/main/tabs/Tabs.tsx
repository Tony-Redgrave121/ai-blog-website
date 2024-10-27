import React from 'react'
import style from "./style.module.css"
import Button from '../../buttons/Button'
import {HiArrowUpRight} from "react-icons/hi2";
// interface ICrossing {
//     desc: string,
//     title: string,
//     children?: React.ReactNode,
// }

const Tabs = () => {
    const select = ['All', 'Quantum Computing', 'AI Ethics', 'Space Exploration', 'Biotechnology', 'Renewable Energy']

    return (
        <div className={style.TabsContainer}>
            <div className={style.SelectContainer}>
                {
                    select.map((select, index) => (
                        <Button foo={() => {}} key={select} type={['SelectButton', index === 0 ? 'ActiveSelectButton' : '']}>{select}</Button>
                    ))
                }
            </div>
            <div className={style.PostContainer}>
                <div className={style.PostContainerLeft}>
                    <img src={require("../../../../../utils/icons/main/developers/developer_2.png")} alt="developer"/>
                    <div>
                        <h3>John Techson</h3>
                        <p>Quantum Computing</p>
                    </div>
                </div>
                <div className={style.PostContainerRight}>
                    <div>
                        <p>October 15, 2023</p>
                        <div className="">
                            <h1>The Quantum Leap in Computing</h1>
                            <p>Explore the revolution in quantum computing, its applications, and its potential impact
                                on various industries.</p>
                        </div>
                        <div className="">
                            <button>100</button>
                            <button>50</button>
                            <button>25</button>
                        </div>
                    </div>
                </div>
                <div>
                    <Button foo={() => {}}>View Blog <HiArrowUpRight/></Button>
                </div>
            </div>
        </div>
    )
}

export default Tabs