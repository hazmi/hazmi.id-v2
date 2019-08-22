import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import { NextSeo } from 'next-seo'
import Intro from '../components/intro'

const Index = () => {
  useEffect(() => {
    ReactGA.pageview('/');
  })
  return (
    <>
      <NextSeo
        title="Hazmi.ID"
        description="Hazmi's personal website. Contains Hazmi's Personal Info, Work Experiences, Past Projects and Playgrounds."
        openGraph={{
          title: 'Hazmi.ID',
          description: "Hazmi's personal website. Contains Hazmi's Personal Info, Work Experiences, Past Projects and Playgrounds.",
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
      <Intro />
    </>
  )
};

export default Index;