import Giscus from '@giscus/react'
import MDXContent from '@theme-original/MDXContent'
import React from 'react'
import Tips from '@site/src/components/Tips'
import { useColorMode } from '@docusaurus/theme-common'

const MDXContentWrapper: React.FC = (props) => {
  const { colorMode } = useColorMode()
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
        theme={colorMode == 'dark' ? 'dark_protanopia' : 'light_protanopia'}
        lang="zh-CN"
        loading="eager"
      />
      <Tips />
    </>
  )
}

export default MDXContentWrapper
