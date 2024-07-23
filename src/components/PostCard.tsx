import { Flex } from "@chakra-ui/react"
import { IPost } from "../interfaces/IPost"
import SimpleCardWrapper from "./SimpleCardWrapper"

interface PostCardProps {
  posts: IPost[]
}

const PostCard = (props: PostCardProps) => {
  return(
    <Flex direction='row' justify='center' align='center'>
      {props.posts.map((post, index) => <SimpleCardWrapper post={post} key={index} />)}
    </Flex>
  )
}

export default PostCard