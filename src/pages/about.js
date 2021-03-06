import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Title from '../components/title'

export default () => {
  return (
    <Layout>
      <Title text="About Jinyus" />
      <div>
        <Link to="/">Home</Link> | <Link to="/about">About Jinyus</Link>
      </div>
      <p>
        Jiny and Us to go to make a better world. Think, Act, and Innovate.
      </p>
    </Layout>
  );
}