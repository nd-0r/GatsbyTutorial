import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { nodeName } from 'min-document'

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <p>This is where my blogs will be blogged</p>
      <ul>
        {
          data.allFile.nodes.map(node => (
            <li key={nodeName}>
              {node.name}
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export default BlogPage