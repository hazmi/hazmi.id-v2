import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import PlaygroundList from '../components/playground-list'

const Playgrounds = () => {
  useEffect(() => {
    ReactGA.pageview('/playgrounds');
  })
  return <PlaygroundList />
};

export default Playgrounds;