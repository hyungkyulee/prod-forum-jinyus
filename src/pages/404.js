import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import styles from "./404.module.scss"

export default () => {
  return (
    <Layout>
      <h1>About Jinyus</h1>
      <div>
        <Link to="/">Home</Link> | <Link to="/about">About Jinyus</Link>
      </div>
      <div className={styles.content}>
        <h1 className={styles.header}>Page not found</h1>
        <p className={styles.errorMessage}>
          The page you are looking for does not exists.
        </p>
      </div>
    </Layout>
  );
}