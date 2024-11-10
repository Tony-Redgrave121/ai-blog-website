import React, {useEffect, useState} from 'react'
import style from "./style.module.css"
import './animation.css'
import {HiArrowDown, HiArrowUp, HiHeart, HiOutlineEye, HiOutlineHeart} from "react-icons/hi2";
import Button from "../../buttons/Button";
import formatCompact from "../../../../../utils/formats/formatCompact";
import formatDate from "../../../../../utils/formats/formatDate";
import {VscSend} from "react-icons/vsc"
import { CSSTransition } from "react-transition-group"
import useContentBlock from "./hooks/useContentBlock"
import IBlog from '../../../../../utils/types/IBlog'

interface IBlogProps {
    blog: IBlog
}

const Information: React.FC<IBlogProps> = ({blog}) => {
    const [navigationLink, setNavigationLink] = useState([''])
    const {blockState, contentBlock, handleBlockHeight, handleLink} = useContentBlock()

    useEffect(() => {
        setNavigationLink([""])

        if (blog.content) {
            const id = [...blog.content.matchAll(/id="([^"]+)"/g)].map(match => match[1])
            setNavigationLink(id)
        }
    }, [blog.content])

    return (
        <div className={style.InformationContainer}>
            <div style={{backgroundImage: `url(${require(`../../../../../utils/icons/main/blogs/images/${blog.image}`)}`}}>
                <h1>{blog.title}</h1>
            </div>
            <div>
                <div>
                    <CSSTransition nodeRef={contentBlock} in={blockState} timeout={0} classNames="content-block-node">
                        <div ref={contentBlock} className={style.ContentBlock}>
                            <div dangerouslySetInnerHTML={{__html: blog.content}}></div>
                            <div className={style.ButtonBlock}>
                                <Button foo={() => handleBlockHeight()}>{blockState
                                    ? <>Read Short Blog <HiArrowUp/></>
                                    : <>Read Full Blog <HiArrowDown/></>}
                                </Button>
                            </div>
                        </div>
                    </CSSTransition>
                    <div className={style.SideBar}>
                        <div>
                            <div className={style.ReactionBlock}>
                                <Button foo={() => {
                                }} type={["PostButton"]}>{blog.likeState ? <HiHeart color="#FF5500"/> :
                                    <HiOutlineHeart/>} {formatCompact(blog.likeCount)}</Button>
                                <Button foo={() => {
                                }} type={["PostButton"]}><HiOutlineEye/> {formatCompact(blog.viewCount)}</Button>
                                <Button foo={() => {
                                }} type={["PostButton"]}><VscSend/> {formatCompact(blog.replyCount)}</Button>
                            </div>
                        </div>
                        <div>
                            <div>
                                <section>
                                    <div>
                                        <p>Publication Date</p>
                                        <h4>{formatDate(blog.date)}</h4>
                                    </div>
                                    <div>
                                        <p>Category</p>
                                        <h4>{blog.category}</h4>
                                    </div>
                                    <div>
                                        <p>Reading Time</p>
                                        <h4>{Math.round(blog.readingTime / 100)} Min</h4>
                                    </div>
                                    <div>
                                        <p>Author Name</p>
                                        <h4>{blog.authorName}</h4>
                                    </div>
                                </section>
                                <div>
                                    <p>Table of Contents</p>
                                    <nav>
                                        <ul>
                                            {
                                                navigationLink.map(link => (
                                                    <li key={link}><a href={`#${link}`} onClick={handleLink}>{link}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information