import ISwiper from "./ISwiper";

export default interface IResource extends ISwiper {
    resourceImage: string,
    resourceTitle: string,
    resourceDesc: string,
    resourceLink: string,
    resourceTopicDate?: string,
    resourceTopicCategory?: string,
    resourceTopicAuthor?: string,
}