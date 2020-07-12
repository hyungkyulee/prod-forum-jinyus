import React from 'react'
import styles from './layout.module.scss'
import Header from './Header'
import Footer from './Footer'

export default ({children}) => {
  return (
    <div className={styles.container}>
      <Header />
        <div className={styles.content}>
          {children}
        </div>
        <Footer>
          
        </Footer>
    </div>
  );
}