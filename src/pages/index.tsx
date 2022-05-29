import HomepageFeatures from '@site/src/components/HomepageFeatures'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import React from 'react'
import clsx from 'clsx'
import styles from './index.module.css'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

const Button: React.FC<{ secondary?: boolean; to: string }> = ({ secondary, to, children }) => {
  return (
    <Link
      className={clsx(
        'button button--lg',
        secondary ? 'button--secondary' : 'button--primary',
        styles.button
      )}
      to={to}
    >
      {children as any}
    </Link>
  )
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Button to="/posts/intro">点击开始</Button>
          <Button to="/posts/category/2022年5月刊" secondary>
            最新一期
          </Button>
        </div>
      </div>
    </header>
  )
}

const Home: React.FC = () => {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  )
}

export default Home
