export default interface IBlog {
    title: string,
    content: string,
    image: string,
    likeCount: number,
    likeState: boolean,
    viewCount: number,
    replyCount: number,
    date: string,
    category: string,
    readingTime: number,
    authorName: string
}