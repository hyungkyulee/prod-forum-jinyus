import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Title from '../components/title'
import ArticleList from '../components/article-list'

export default () => {
  return (
    <Layout>
      <Title text="Welcome to Jinyus" />
      <div>
        <Link to="/">Home</Link> | <Link to="/about">About Jinyus</Link> | <Link to="/admin">Admin</Link>
      </div>
      <p>
        Jiny and Us to go to make a better world. Think, Act, and Innovate.
      </p>

      {/* <ArticleList /> */}
       
    </Layout>
  );
}