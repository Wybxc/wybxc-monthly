import CodeBlock from '@theme-original/CodeBlock'
import Poem from '@site/src/components/Poem'
import React from 'react'

export default function CodeBlockWrapper(props) {
  if (props.className == 'language-poem') return <Poem>{props.children.split(/\n{2,}/)}</Poem>

  return <CodeBlock {...props} />
}
