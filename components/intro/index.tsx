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
      <h2>Contact</h2>
      <p>
        If you need anything, I'm on <a href="https://www.linkedin.com/in/hazmi-abdun-nazir/" aria-label="Go to Hazmi's LinkedIn">LinkedIn</a>, <a href="https://github.com/hazmi" aria-label="Go to Hazmi's Github">GitHub</a>, <a href="https://twitter.com/hazmi" aria-label="Go to Hazmi's Twitter">Twitter</a> and <a aria-label="Go to Hazmi's CodePen" href="https://codepen.io/hazmi">Codepen</a>.
      </p>
    </section>
    <section>
      <h2>About this site</h2>
      <p>This site is built using <a href="https://nextjs.org/"  aria-label="Go to Next.js website">Next.js</a>, a <a href="https://reactjs.org/" aria-label="Go to React website">React</a> framework. The framework has few option, including the SSR (Server Side Rendering) and static option that makes the site plays well with search engine. I like it.</p>
      <p>Yes, I know that <a href="https://developers.google.com/search/docs/guides/javascript-seo-basics" aria-label="Go to Google's article about JavaScript SEO">Google can crawl and index JavaScript</a> website, but still they recommend the server side or pre-rendering for various reasons.</p>
      <figure>
        <img src="/static/lighthouse-audit.jpg" alt="Lighthouse Audit" />
        <figcaption>
          <a href="https://developers.google.com/web/tools/lighthouse/#devtools" aria-label="Go to Google Lighthouse website">Google Lighthouse</a> audit result in Chrome.
        </figcaption>
      </figure>
      <p>The other feature this site has is the full offline support. <a href="https://github.com/hanford/next-offline" arial-label="Go to next offline plugin page">A service worker via Google's workbox</a> combined with <a href="https://github.com/ragingwind/next-manifest" aria-label="Go to next manifest website">Web Manifest</a> makes a good <a href="https://developers.google.com/web/progressive-web-apps/" aria-label="PWA article on Google">PWA (Progressive Web App)</a> website.</p>
      <p>This means, you can do "Add to Home Screen" in iOS or Android, then can still browse the site in airplane mode.</p>
    </section>
    <section>
      <p>Do enjoy the site, may you find something useful here.</p>
      <p>Cheers!</p>
    </section>
  </section>
);

export default Intro;