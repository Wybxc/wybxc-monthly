import Link from '@docusaurus/Link'
import React from 'react'
import clsx from 'clsx'
import styles from './Intro.module.css'

const Intro: React.FC<{ latest: string }> = ({ latest }) => {
  return (
    <div className={styles.intro}>
      <h1>忘忧北萱草月刊</h1>
      <p>来了解一下最新最热的忘忧北萱草吧！</p>
      <Link className={clsx('button button--primary button--md', styles.button)} to={latest}>
        最新一期
      </Link>
      <Link className={clsx('button button--secondary button--md', styles.button)} to="/featured">
        往期精选
      </Link>
    </div>
  )
}

export default Intro
