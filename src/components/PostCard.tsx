import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Grid, GridItem, Heading, Image, Stack, Text } from "@chakra-ui/react"
import { IPost } from "../interfaces/IPost"

interface PostCardProps {
  posts: IPost[]
}

const PostCard = (props: PostCardProps) => {
  <div>
    <Grid gap={6}>
      {props.posts.map((post, index) => (
        <GridItem w='100%' h='10' bg='blue.500'>
          <Box m={20}>
            <Card maxW='sm' key={index}>
              <CardBody>
                <Image
                  src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                  fallbackSrc="https://placehold.co/600x400"
                  fallbackStrategy="beforeLoadOrError"
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>Living room Sofa</Heading>
                  <Text>
                    This sofa is perfect for modern tropical spaces, baroque inspired
                    spaces, earthy toned spaces and for people who love a chic design with a
                    sprinkle of vintage design.
                  </Text>
                  <Text color='blue.600' fontSize='2xl'>
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Button variant='solid' colorScheme='blue'>
                    Buy now
                  </Button>
                  <Button variant='ghost' colorScheme='blue'>
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </Box>
        </GridItem>
      ))}
    </Grid>
  </div>
}

export default PostCard