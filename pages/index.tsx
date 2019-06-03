import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import Intro from '../components/intro'

const Index = () => {
  useEffect(() => {
    ReactGA.pageview('/');
  })
  return <Intro />
};

export default Index;