import React, { useEffect } from 'react'

import BrowserOnly from '@docusaurus/BrowserOnly'
import Giscus from '@giscus/react'
import MDXContent from '@theme-original/MDXContent'
import Tips from '@site/src/components/Tips'
import { useColorMode } from '@docusaurus/theme-common'

const PageFooter = () => {
  const { colorMode } = useColorMode()

  useEffect(() => {
    const timer = setTimeout(() => {
      const giscus = document.getElementById('giscus-comments') as any      
      giscus.requestUpdate()
    }, 1500)
    return () => clearTimeout(timer)
  }, [document.title])

  return (
    <>
      <br />
      <Giscus
        id="giscus-comments"
        repo="Wybxc/wybxc-monthly"
        repoId="R_kgDOHaWsQg"
        category="Giscus 评论"
        categoryId="DIC_kwDOHaWsQs4CPWJu"
        mapping="title"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={colorMode == 'dark' ? 'dark_protanopia' : 'light_protanopia'}
        lang="zh-CN"
        loading="eager"
        key={document.title}
      />
      <Tips />
    </>
  )
}

const MDXContentWrapper: React.FC = (props) => {
  return (
    <>
      <MDXContent {...props} />
      <BrowserOnly fallback={<div>Loading...</div>}>{() => <PageFooter />}</BrowserOnly>
    </>
  )
}

export default MDXContentWrapper
