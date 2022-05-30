import { Image, Shimmer } from 'react-shimmer'

import React from 'react'
import useWindowDimensions from './useWindowDimensions'

const Metrics = () => {
  const { width } = useWindowDimensions()
  const src =
    width >= 768
      ? 'https://github.com/Wybxc/metrics/raw/main/github-metrics.svg'
      : 'https://github.com/Wybxc/metrics/raw/main/github-metrics-small.svg'
  return <Image src={src} fallback={<Shimmer width="100%" height={600} />} />
}

export default Metrics