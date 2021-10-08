import { gql, GraphQLClient } from 'graphql-request'
import { Flex } from '@chakra-ui/layout'
import styles from '../styles/Home.module.css'
import SwitchPreview from './components/SwitchPreview'

export default function Home(props) {
  return (
    <Flex backgroundColor={'#f9fafb'} alignItems={'center'} justifyContent={'space-around'} paddingTop={10} flexWrap={'wrap'} flexShrink={'revert'}>
      {props.data.switches.map((Switch, idx) => (
        <SwitchPreview title={Switch.title} type={Switch.type} key={idx} slug={Switch.slug} image={Switch.image}/>
      ))}
    </Flex>
  )
}

// Data Fetching
export const getStaticProps = async () => {
  const url = `https://api-ap-northeast-1.graphcms.com/v2/${process.env.API_ID}/master`
  const graphQlClient = new GraphQLClient(url)

  const query = gql`
    query {
      switches {
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

  const data = await graphQlClient.request(query)

  return {
    props: {
      data
    }
  }
}