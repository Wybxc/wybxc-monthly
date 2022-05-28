import Giscus from '@giscus/react'
import MDXContent from '@theme-original/MDXContent'
import React from 'react'

const MDXContentWrapper: React.FC = (props) => {
  return (
    <>
      <MDXContent {...props} />
      <br />
      <Giscus
        repo="Wybxc/wybxc-monthly"
        repoId="R_kgDOHaWsQg"
        category="Giscus 评论"
        categoryId="DIC_kwDOHaWsQs4CPWJu"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="zh-CN"
        loading="lazy"
      />
    </>
  )
}

export default MDXContentWrapper
