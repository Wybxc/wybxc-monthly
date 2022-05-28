import React from 'react'
import styles from './HeiMu.module.css'

const HM: React.FC = (props) => {
  return <div className={styles.HeiMu}>{props.children}</div>
}

export default HM
