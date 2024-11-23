import React, {useEffect, useMemo} from 'react'
import style from "./style.module.css"
import Button from '../../buttons/Button'
import {HiArrowUpRight, HiOutlineHeart, HiOutlineChatBubbleOvalLeft, HiHeart} from "react-icons/hi2";
import formatCompact from "../../../../../utils/formats/formatCompact";
import {VscSend} from "react-icons/vsc";
import IPostLow from '../../../../../utils/types/IPostLow'
import {useNavigate} from "react-router-dom";

interface ITabs {
    posts: Array<IPostLow> | undefined,
}

const Blogs: React.FC<ITabs> = ({posts}) => {
    const [filteredPosts, setFilteredPosts] = React.useState<Array<IPostLow>>([])
    const [filterParam, setFilterParam] = React.useState('All')
    const select = useMemo(() => ['All', 'Quantum Computing', 'AI Ethics', 'Space Exploration', 'Biotechnology', 'Renewable Energy'], [])
    const navigate = useNavigate()

    useEffect(() => {
        posts && setFilteredPosts(posts)
    }, [posts])

    useEffect(() => {
        if (posts) {
            if (filterParam !== 'All') setFilteredPosts(posts.filter(post => post.postTags.includes(filterParam)))
            else setFilteredPosts(posts)
        }
    }, [filterParam, posts])

    return (
        <div className={style.TabsContainer}>
            <div className={style.SelectContainer}>
                <div>
                    {
                        select.map(select => (
                            <Button foo={() => setFilterParam(select)} key={select} type={['SelectButton', filterParam === select ? 'ActiveSelectButton' : '']}>{select}</Button>
                        ))
                    }
                </div>
            </div>
            {filteredPosts && filteredPosts.map(post => (
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
                            <Button foo={() => navigate(`blog/${post.postId}`)}>View Blog <HiArrowUpRight/></Button>
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
    )
}

export default Blogs