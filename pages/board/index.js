import React from 'react'
import { gql, GraphQLClient } from 'graphql-request'
import { Flex } from '@chakra-ui/layout'
import BoardPreview from '../components/BoardPreview'

export default function Board(props) {
    return (
        <Flex backgroundColor={'#f9fafb'} alignItems={'center'} justifyContent={'space-around'} paddingTop={10} flexWrap={'wrap'} flexShrink={'revert'}>
            {props.data.keyboards.map((keyboard, idx) => (
              <BoardPreview title={keyboard.title} image={keyboard.image.url} slug={keyboard.slug} key={idx}/>
            ))}
        </Flex>
    )
}

export const getStaticProps = async () => {
    const url = `https://api-ap-northeast-1.graphcms.com/v2/${process.env.API_ID}/master`
    const graphQlClient = new GraphQLClient(url)
  
    const query = gql`
      query {
        keyboards {
          id
          title
          description
          slug
          size
          image {
            url
          }
        }
      }
    `
  
    const data = await graphQlClient.request(query)
  
    return {
      props: {
        data
      }
    }
  }