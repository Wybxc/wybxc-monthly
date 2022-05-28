import React from 'react'
import styles from './Poem.module.css'

const Poem: React.FC = ({ children = [] }) => {
    // return <>{children}</>
  if (!(children instanceof Array)) return <>{children}</>
  const texts = children.map((child) => {
    console.log(child)
    if (typeof child === 'string') return child.split('\n')
    const childElement = child as React.ReactElement
    if (childElement.props.children) return childElement.props.children.split('\n')
    return ['']
  }) as string[][]
  const paragraphs = texts.map((paragraph, idx) => {
    return (
      <div key={idx} className={styles.paragraph}>
        {paragraph.map((text, idx) => {
          return (
            <p key={idx} className={styles.sentence}>
              {text}
            </p>
          )
        })}
      </div>
    )
  })
  return <>{paragraphs}</>
}

export default Poem
