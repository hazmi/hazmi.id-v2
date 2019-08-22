import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import { NextSeo } from 'next-seo'
import ExperienceList from '../components/experience-list'

const WorkExperiences = () => {
  useEffect(() => {
    ReactGA.pageview('/work-experiences');
  })
  return (
    <>
      <NextSeo
        title="Hazmi's Work Experience ~ Hazmi.ID"
        description="A list of experience that Hazmi has been working with."
        openGraph={{
          title: 'Hazmi\'s Work Experience ~ Hazmi.ID',
          description: 'A list of experience that Hazmi has been working with.',
          images: [
            {
              url: 'https://hazmi.id/static/hazmi.jpg',
              width: 128,
              height: 128,
              alt: 'Hazmi.ID',
            },
          ],
          site_name: 'Hazmi.ID',
        }}
      />
      <ExperienceList />
    </>
  )
};

export default WorkExperiences;