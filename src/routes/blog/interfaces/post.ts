export interface IPost {
    id: string
    image: string
    title: string
    summery: string
    at: string | number
    tags: string[]
    writer: string
    content?: string
}