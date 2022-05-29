import React from 'react'
import styles from './HeiMu.module.css'

const HM: React.FC = (props) => {
  return <span title="你知道的太多了" className={styles.HeiMu}>{props.children}</span>
}

export default HM
