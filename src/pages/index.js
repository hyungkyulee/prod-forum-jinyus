import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Title from '../components/title'

export default ({data}) => {
  return (
    <Layout>
      <Title text="Welcome to Jinyus" subtitle={data.site.siteMetadata.title} />
      <div>
        <Link to="/">Home</Link> | <Link to="/about">About Jinyus</Link>
      </div>
      <p>
        Jiny and Us to go to make a better world. Think, Act, and Innovate.
      </p>
    </Layout>
  );
}

export const query = graphql `query {
  site {
    siteMetadata {
      title
    }
  }
}`
