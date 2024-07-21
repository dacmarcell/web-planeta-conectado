import { IPost } from "../interfaces/IPost"

interface PostCardProps {
  posts: IPost[]
}

const PostCard = (props: PostCardProps) => {
  return props.posts.map((post) => {
    return(
      <div>
        <h1>{post.title}</h1>
      </div>
    )
  })
}

export default PostCard