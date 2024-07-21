import { useQuery } from "@tanstack/react-query"
import { IPost } from "../interfaces/IPost"
import { getPosts } from "../http/requests/post-requests"



const PostList = () => {

  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts()
  })

  if(error){
    console.log(error)
    return <p>Oops! Something Went Wrong</p>
  }

  if(isLoading){
    return <p>Loading...</p>
  }

  return posts?.map((post: IPost) => {
    return <h1>{post.title}</h1>
  })
}

export default PostList