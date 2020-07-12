import React from "react"
import { Link } from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ArticleSelector from "../components/ArticleSelector"

export default () => {
  return (
    <div>
      <Header></Header>
        <div className="container">
          <ArticleSelector />
        </div>
      <Footer></Footer>
    </div>
  );
}