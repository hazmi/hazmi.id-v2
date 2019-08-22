import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import { NextSeo } from 'next-seo'
import PlaygroundList from '../components/playground-list'

const Playgrounds = () => {
  useEffect(() => {
    ReactGA.pageview('/playgrounds');
  })
  return (
    <>
      <NextSeo
        title="Hazmi's Playground ~ Hazmi.ID"
        description="A list of experiments projects."
        openGraph={{
          title: 'Hazmi\'s Playground ~ Hazmi.ID',
          description: 'A list of experiments projects.',
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
      <PlaygroundList />
    </>
  );
};

export default Playgrounds;