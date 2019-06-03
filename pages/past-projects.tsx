import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import ProjectList from '../components/project-list'

const PastProjects = () => {
  useEffect(() => {
    ReactGA.pageview('/past-projects');
  })
  return <ProjectList />
};

export default PastProjects;