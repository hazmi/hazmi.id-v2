import React from 'react'
import './index.scss'

const Intro = () => (
  <section className="intro">
    <p>Hello!</p>
    <p>
      My name is <strong>Hazmi Abdun Nazir</strong>.
      I create mobile apps and websites, as a hobby and for a living.
    </p>
    <section>
      <h3>Contact</h3>
      <p>
        If you need anything, I'm on <a href="https://www.linkedin.com/in/hazmi-abdun-nazir/" aria-label="Go to Hazmi's LinkedIn">LinkedIn</a>, <a href="https://github.com/hazmi" aria-label="Go to Hazmi's Github">GitHub</a> or <a href="https://twitter.com/hazmi"  aria-label="Go to Hazmi's Twitter">Twitter</a>.
      </p>
    </section>
    <section>
      <h3>About this site</h3>
      <p>This site is built using <a href="https://nextjs.org/"  aria-label="Go to Next.js website">Next.js</a>, a <a href="https://reactjs.org/" aria-label="Go to React Website">React</a> Framework. This site is still in progress, currently optimized for mobile.</p>
      <p><em>[will write more about the site]</em></p>
    </section>
  </section>
);

export default Intro;