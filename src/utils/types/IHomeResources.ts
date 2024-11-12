import IResource from "./IResource";

export default interface IHomeResources extends IResource {
    resourceDownloads: number,
    resourceTotal: number,
    resourceExpertise: string,
}