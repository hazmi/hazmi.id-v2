import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import ExperienceList from '../components/experience-list'

const WorkExperiences = () => {
  useEffect(() => {
    ReactGA.pageview('/work-experiences');
  })
  return <ExperienceList />
};

export default WorkExperiences;