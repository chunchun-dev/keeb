import React from 'react'
import { gql, GraphQLClient } from 'graphql-request'
import { Flex, Text, Heading, Badge, Box } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

function BoardDetails({data}) {
    return (
        <Flex p={10} flexWrap={'wrap'} width={'100%'} height={'max'}>
            <Image src={data.keyboard.image.url} width={[300, '70%', '50%']}/>
            <Flex flexDir={'column'} width={['100%','50%']}>
                <Heading marginBottom={'4'}>{data.keyboard.title}</Heading>
                <Text>{data.keyboard.description}</Text>
            </Flex>
        </Flex>
    )
}

export default BoardDetails


export const getServerSideProps = async (context) => {
    const url = `https://api-ap-northeast-1.graphcms.com/v2/${process.env.API_ID}/master`
    const graphQlClient = new GraphQLClient(url)
    const pageSlug = context.query.slug
  
    const query = gql`
      query($pageSlug: String!) {
        keyboard(where: {
            slug:$pageSlug
        }) {
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

    const variables = {
        pageSlug
    }
  
    const data = await graphQlClient.request(query, variables)

    return {
        props: {
            data
        }
    }
}