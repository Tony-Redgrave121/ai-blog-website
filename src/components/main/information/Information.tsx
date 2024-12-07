import React, {useEffect, useState} from 'react'
import style from "./style.module.css"
import './animation.css'
import {HiArrowDown, HiArrowUp, HiHeart, HiOutlineEye, HiOutlineHeart} from "react-icons/hi2";
import {VscSend} from "react-icons/vsc"
import Button from "../generalComponents/buttons/Button";
import formatCompact from "../../../utils/formats/formatCompact";
import formatDate from "../../../utils/formats/formatDate";
import { CSSTransition } from "react-transition-group"
import useContentBlock from "../../../utils/hooks/useContentBlock"
import IBlog from '../../../utils/types/IBlog'
import BlurHashImage from "../generalComponents/blurhashImage/BlurHashImage";
import {useParams} from "react-router-dom";

interface IBlogProps {
    blog: IBlog
}

interface IReactionBlockProps {
    likeState: boolean,
    likeCount: number,
    viewCount: number,
    replyCount: number
}

const Information: React.FC<IBlogProps> = ({blog}) => {
    const [navigationLink, setNavigationLink] = useState([''])
    const {blockState, contentBlock, handleBlockHeight, handleLink} = useContentBlock()
    const params = useParams()

    useEffect(() => {
        setNavigationLink([""])

        if (blog.content) {
            const id = [...blog.content.matchAll(/id="([^"]+)"/g)].map(match => match[1])
            setNavigationLink(id)
        }
    }, [blog.content])

    const ReactionBlock: React.FC<IReactionBlockProps> = (({likeState, likeCount, viewCount, replyCount}) => {
        return (
            <div className={style.ReactionBlock}>
                <Button foo={() => {
                }} type={["PostButton"]}>{likeState ? <HiHeart color="#FF5500"/> :
                    <HiOutlineHeart/>} {formatCompact(likeCount)}</Button>
                <Button foo={() => {
                }} type={["PostButton"]}><HiOutlineEye/> {formatCompact(viewCount)}</Button>
                <Button foo={() => {
                }} type={["PostButton"]}><VscSend/> {formatCompact(replyCount)}</Button>
            </div>
        )
    })

    return (
        <div className={style.InformationContainer}>
            <div>
                <BlurHashImage imagePath={`blogs/${params.id}/${blog.image}`} hash={blog.hash}></BlurHashImage>
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
                            <ReactionBlock likeState={blog.likeState} likeCount={blog.likeCount} viewCount={blog.viewCount} replyCount={blog.replyCount}/>
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