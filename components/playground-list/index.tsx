import React from 'react'
import './index.scss';

export const PlaygroundList = () => {
  return (
    <div className="playground-list">
      <section className="playground-list__item">
        <h3 className="playground-list__item-header">
          <a
            href="https://todomvc.hazmi.now.sh/"
            aria-label="Go to TodoMVC - Next.js demo page"
          >
            TodoMVC - Next.js
          </a>
        </h3>
        <div className="playground-list__item-image">
          <img src="/static/playground/todo-nextjs.jpg" alt="TodoMVC in Next.js" width="100%" />
        </div>
        <div className="playground-list__item-action">
          <a
            href="https://github.com/hazmi/todomvc-nextjs/blob/master/README.md"
            className="playground-list__item-readme"
            aria-label="Go to TodoMVC - Next.js readme page"
          >
            Readme
          </a>
          <a
            href="https://github.com/hazmi/todomvc-nextjs"
            className="playground-list__item-source"
            aria-label="Go to TodoMVC - Next.js source on Github"
          >
            Source
          </a>
          <a
            href="https://todomvc.hazmi.now.sh/"
            className="playground-list__item-demo"
            aria-label="Go to TodoMVC - Next.js demo page"
          >
            Demo
          </a>
        </div>
        <p>Another TodoMVC app. Written using <a href="https://nextjs.org/" aria-label="Go to Next.js framework website">Next.js</a> framework.</p>
      </section>
      <section className="playground-list__item">
        <h3 className="playground-list__item-header">
          <a
            href="https://cra-todomvc.netlify.com/#/"
          >
            TodoMVC - Create React App
          </a>
        </h3>
        <div className="playground-list__item-image">
          <img src="/static/playground/todo-cra.jpg" alt="TodoMVC in CRA" width="100%" />
        </div>
        <div className="playground-list__item-action">
          <a
            href="https://github.com/hazmi/todomvc-cra/blob/master/README.md"
            className="playground-list__item-readme"
            aria-label="Go to TodoMVC - Create React App readme page"
          >
            Readme
          </a>
          <a
            href="https://github.com/hazmi/todomvc-cra"
            className="playground-list__item-source"
            aria-label="Go to TodoMVC - Create React App source on Github"
          >
            Source
          </a>
          <a
            href="https://cra-todomvc.netlify.com/#/"
            className="playground-list__item-demo"
            aria-label="Go to TodoMVC - Create React App demo page"
          >
            Demo
          </a>
        </div>
        <p>Another TodoMVC app. Written using <a href="https://facebook.github.io/create-react-app/" aria-label="Go to Create React App Framework website">Create React App</a> framework.</p>
      </section>
    </div>
  )
};

export default PlaygroundList;