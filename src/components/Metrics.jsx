import { Image, Shimmer } from 'react-shimmer'

import React from 'react'
import useIsBrowser from '@docusaurus/useIsBrowser'
import useWindowDimensions from './useWindowDimensions'

const ResponsiveMetrics = () => {
  const { width } = useWindowDimensions()
  const src =
    width >= 768
      ? 'https://github.com/Wybxc/metrics/raw/main/github-metrics.svg'
      : 'https://github.com/Wybxc/metrics/raw/main/github-metrics-small.svg'
  return <Image src={src} fallback={<Shimmer width="100%" height={600} />} />
}

const Metrics = () => {
  const isBrowser = useIsBrowser()
  return isBrowser ? <ResponsiveMetrics /> : <Shimmer width="100%" height={600} />
}

export default Metrics
