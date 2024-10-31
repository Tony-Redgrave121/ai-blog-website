import React from 'react'
import style from "./style.module.css"
import Button from '../../buttons/Button'
import { HiArrowUpRight, HiOutlineHeart, HiOutlineChatBubbleOvalLeft, HiHeart  } from "react-icons/hi2";
import formatCompact from "../../../../../utils/formats/formatCompact";
import { VscSend } from "react-icons/vsc";
import IPostLow from '../../../../../utils/types/IPostLow'

interface ITabs {
    posts?: Array<IPostLow>,
}

const Blogs: React.FC<ITabs> = ({posts}) => {
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
            { posts && posts.map(post => (
                <div className={style.PostContainer} key={post.postId}>
                    <div>
                        <div className={style.PostContainerLeft}>
                            <img src={require(`../../../../../utils/icons/main/developers/${post.userImg}`)}
                                 alt={post.userName}/>
                            <div>
                                <h3>{post.userName}</h3>
                                <p>{post.userDesc}</p>
                            </div>
                        </div>
                        <div className={style.PostContainerRight}>
                            <p>{post.postDate}</p>
                            <div>
                                <h1>{post.postTitle}</h1>
                                <p>{post.postDesc}</p>
                            </div>
                            <div>
                                <Button foo={() => {
                                }} type={["PostButton"]}>{post.postState ? <HiHeart color="#FF5500"/> :
                                    <HiOutlineHeart/>} {formatCompact(post.postLikeCount)}</Button>
                                <Button foo={() => {
                                }} type={["PostButton"]}><HiOutlineChatBubbleOvalLeft/> {formatCompact(post.postCommentCount)}
                                </Button>
                                <Button foo={() => {
                                }} type={["PostButton"]}><VscSend/> {formatCompact(post.postReplyCount)}</Button>
                            </div>
                        </div>
                        <div>
                            <Button foo={() => {
                            }}>View Blog <HiArrowUpRight/></Button>
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
    )
}

export default Blogs