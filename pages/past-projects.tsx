import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import { NextSeo } from 'next-seo'
import ProjectList from '../components/project-list'

const PastProjects = () => {
  useEffect(() => {
    ReactGA.pageview('/past-projects');
  })
  return (
    <>
      <NextSeo
        title="Hazmi's Past Projects ~ Hazmi.ID"
        description="A list of past projects that Hazmi has been working with."
        openGraph={{
          title: 'Hazmi\'s Past Projects ~ Hazmi.ID',
          description: 'A list of past projects that Hazmi has been working with.',
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
      <ProjectList />
    </>
  )
};

export default PastProjects;