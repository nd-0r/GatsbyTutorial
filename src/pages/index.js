import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'

const CenterImage = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '500px',
  height: 'auto'
}

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>I'm making this using the Gatsby tutorial.</p>
      <StaticImage src="https://www.gannett-cdn.com/media/USATODAY/USATODAY/2013/05/07/gatsby-mti-jacket-16_9.jpg" alt="gatsby" style={CenterImage}></StaticImage>
    </Layout>
  )
}

export default IndexPage
