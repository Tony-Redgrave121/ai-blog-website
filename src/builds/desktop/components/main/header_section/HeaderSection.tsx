import React from 'react'
import style from "./style.module.css"
import {HiHeart, HiOutlineHeart} from "react-icons/hi2";
import formatCompact from "../../../../../utils/formats/formatCompact";
import Button from "../../buttons/Button";
import { VscSend } from "react-icons/vsc";

// interface ICrossing {
//     title: string,
//     subTitle: string,
//     desc: string,
// }

const HeaderSection = () => {
    return (
        <section className={style.HeaderSection}>
            <div>
                <img src={require("../../../../../utils/icons/main/header_section/img.png")} alt="1"/>
                <div>
                    <div>
                        <h2>Global Climate Summit Addresses Urgent Climate Action</h2>
                        <p>World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets.</p>
                    </div>
                    <div className={style.StatContainer}>
                        <div>
                            <p>Category</p>
                            <p>Environment</p>
                        </div>
                        <div>
                            <p>Publication Date</p>
                            <p>October 10, 2023</p>
                        </div>
                        <div>
                            <p>Author</p>
                            <p>Jane Smith</p>
                        </div>
                    </div>
                    <div>
                        <span>
                            <Button foo={() => {
                            }} type={["PostButton"]}>{0 ? <HiHeart color="#FF5500"/> :
                                <HiOutlineHeart/>} {formatCompact(14000)}</Button>
                            <Button foo={() => {
                            }} type={["PostButton"]}><VscSend/> {formatCompact(204)}</Button>
                        </span>
                        <Button foo={() => {}}>Read More</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderSection