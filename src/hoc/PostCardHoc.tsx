import { useQuery } from "@tanstack/react-query"
import { getPosts } from "../http/requests/post-requests"
import PostCard from "../components/PostCard"

const PostCardHoc = () => {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts()
  })

  if(error){
    //TODO: add logger
    console.error(error)
    return <p>Oops! Something Went Wrong</p>
  }

  if(isLoading){
    return <p>Loading...</p>
  }

  return <PostCard posts={posts}/>
}

export default PostCardHoc