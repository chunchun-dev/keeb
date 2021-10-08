import React from 'react'
import { gql, GraphQLClient } from 'graphql-request'
import { Flex, Text, Heading, Badge, Box } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

function Switch({data}) {
    return (
        <Flex p={10} flexWrap={'wrap'} width={'100%'} height={'max'}>
            <Image src={data.switch.image.url} width={[300, '70%', '50%']}/>
            <Flex flexDir={'column'} width={['100%','50%']}>
                <Heading marginBottom={'4'}>{data.switch.title}</Heading>
                <Badge marginBottom={'10'} width={'min-content'} colorScheme={data.switch.type == 'Linear' ? 'red' : 'teal'}>{data.switch.type}</Badge>
                <Text>{data.switch.description}</Text>
            </Flex>
        </Flex>
    )
}

export default Switch


export const getServerSideProps = async (context) => {
    const url = `https://api-ap-northeast-1.graphcms.com/v2/${process.env.API_ID}/master`
    const graphQlClient = new GraphQLClient(url)
    const pageSlug = context.query.slug
  
    const query = gql`
      query($pageSlug: String!) {
        switch(where: {
            slug:$pageSlug
        }) {
          id
          title
          description
          slug
          type
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
    console.log(data)

    return {
        props: {
            data
        }
    }
}