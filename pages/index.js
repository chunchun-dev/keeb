import { gql, GraphQLClient } from 'graphql-request'
import styles from '../styles/Home.module.css'
import SwitchPreview from './components/SwitchPreview'

export default function Home(props) {
  return (
    <div>
      {props.data.switches.map((Switch, idx) => (
        <SwitchPreview title={Switch.title} type={Switch.type} key={idx} slug={Switch.slug}/>
      ))}
    </div>
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