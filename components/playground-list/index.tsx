import React from 'react'
import './index.scss';

export const PlaygroundList = () => {
  return (
    <div className="playground-list">
      <section className="playground-list__item">
        <h3 className="playground-list__item-header">
          <a href="https://todomvc.hazmi.now.sh/">TodoMVC - Next.js</a>
        </h3>
        <div className="playground-list__item-content">
          <img src="/static/playground/todo-nextjs.jpg" width="100%" />
          <p>Another TodoMVC app. Written using <a href="https://nextjs.org/">Next.js</a> framework.</p>
        </div>
        <div className="playground-list__item-action">
          <a href="https://github.com/hazmi/todomvc-nextjs/blob/master/README.md" className="playground-list__item-readme">Readme</a>
          <a href="https://github.com/hazmi/todomvc-nextjs" className="playground-list__item-source">Source</a>
          <a href="https://todomvc.hazmi.now.sh/" className="playground-list__item-demo">Demo</a>
        </div>
      </section>
      <section className="playground-list__item">
        <h3 className="playground-list__item-header">
          <a href="https://cra-todomvc.netlify.com/#/">TodoMVC - Create React App</a>
        </h3>
        <div className="playground-list__item-content">
          <img src="/static/playground/todo-cra.jpg" width="100%" />
          <p>Another TodoMVC app. Written using <a href="https://facebook.github.io/create-react-app/">Create React App</a> framework.</p>
        </div>
        <div className="playground-list__item-action">
          <a href="https://github.com/hazmi/todomvc-cra/blob/master/README.md" className="playground-list__item-readme">Readme</a>
          <a href="https://github.com/hazmi/todomvc-cra" className="playground-list__item-source">Source</a>
          <a href="https://cra-todomvc.netlify.com/#/" className="playground-list__item-demo">Demo</a>
        </div>
      </section>
    </div>
  )
};

export default PlaygroundList;