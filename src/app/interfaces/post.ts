export interface IPost {
  id?: number
  title: string
  text: string
  cover_img: string
  post_topic: {
    name: string
  }
}
