import React from "react"
import { Link } from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default () => {
  return (
    <div>
      <Header></Header>
        <div className="container">
          <p>
          Jiny and Us to go to make a better world. Think, Act, and Innovate.
          </p>
        </div>
      <Footer></Footer>
    </div>
  );
}