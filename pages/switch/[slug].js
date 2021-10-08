import React from 'react'
import { gql, GraphQLClient } from 'graphql-request'

function Switch({data}) {
    return (
        <div>
        </div>
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
  
    return {
        props: {
            data
        }
    }
}