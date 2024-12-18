import React, {memo, useEffect} from 'react'
import style from "./style.module.css"
import Button from '../generalComponents/buttons/Button'
import {HiArrowUpRight, HiOutlineHeart, HiOutlineChatBubbleOvalLeft, HiHeart} from "react-icons/hi2";
import formatCompact from "../../../utils/formats/formatCompact";
import {VscSend} from "react-icons/vsc";
import IPostLow from '../../../utils/types/IPostLow'
import {useNavigate} from "react-router-dom";
import BlurHashImage from "../generalComponents/blurhashImage/BlurHashImage";
import {useAppSelector} from "../../../utils/hooks/redux";
import isEqual from "lodash/isEqual"

interface ITabs {
    posts: Array<IPostLow> | undefined,
}

const select = ['All', 'Quantum Computing', 'AI Ethics', 'Space Exploration', 'Biotechnology', 'Renewable Energy']

const Blogs: React.FC<ITabs> = ({posts}) => {
    const [filteredPosts, setFilteredPosts] = React.useState<Array<IPostLow> | null>(null)
    const [filterParam, setFilterParam] = React.useState('All')

    const navigate = useNavigate()
    const isMobile = useAppSelector(state => state.user.isMobile)

    useEffect(() => {
        posts && setFilteredPosts(posts)
    }, [posts])

    useEffect(() => {
        if (posts) {
            const filtered = filterParam === 'All' ? posts : posts.filter(post => post.postTags.includes(filterParam))

            if (!isEqual(filtered, filteredPosts)) setFilteredPosts(filtered)
        }
    }, [filterParam, filteredPosts, posts])

    const SelectContainer: React.FC = (() => (
        <div className={style.SelectContainer}>
            <div>
                {
                    select.map(select => (
                        <Button foo={() => setFilterParam(select)} key={select} type={['SelectButton', filterParam === select ? 'ActiveSelectButton' : '']}>{select}</Button>
                    ))
                }
            </div>
        </div>
    ))

    const ReactionBlock: React.FC<{post: IPostLow}> = memo(({post}) => (
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
    ))

    const ButtonBlock: React.FC<{postId: string}> = memo(({postId}) => (
        <div>
            <Button foo={() => navigate(`blogs/${postId}`)}>View Blog <HiArrowUpRight/></Button>
        </div>
    ))

    return (
        <div className={style.TabsContainer}>
            <SelectContainer/>
            {filteredPosts && filteredPosts.map(post => (
                <div className={style.PostContainer} key={post.postId}>
                    <div>
                        <div className={style.PostContainerLeft}>
                            <BlurHashImage imagePath={`images/developers/${post.userImg}`} hash={post.hash} alt={post.userName} width={isMobile ? `60px` : `80px`} height={isMobile ? `60px` : `80px`}></BlurHashImage>
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
                            <ReactionBlock post={post}/>
                        </div>
                        <ButtonBlock postId={post.postId}/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Blogs