import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default () => {
  return (
    <Layout>
      <h1>About Jinyus</h1>
      <div>
        <Link to="/">Home</Link> | <Link to="/about">About Jinyus</Link>
      </div>
      <p>
        Jiny and Us to go to make a better world. Think, Act, and Innovate.
      </p>
    </Layout>
  );
}