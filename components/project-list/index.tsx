import React from 'react'
import './index.scss'

const ProjectList = () => (
  <div className="project-list">
    <div className="project-list__item">
      <h3 className="project-list__title">Connect33</h3>
      <div className="project-list__image">
        <img src="/static/project/connect33.jpg" alt="Connect33" width="100%" />
        <span />
      </div>
      <div className="project-list__content">
        <p>A HR mobile application.</p>
      </div>
    </div>
    <div className="project-list__item">
      <h3 className="project-list__title">MUTUCare</h3>
      <div className="project-list__image">
        <img src="/static/project/mutucare.jpg" alt="MUTUCare" width="100%" />
        <span />
      </div>
      <div className="project-list__content">
        <p>A hazard awareness mobile application.</p>
      </div>
    </div>
    <div className="project-list__item">
      <h3 className="project-list__title">CelliHealth</h3>
      <div className="project-list__image">
        <img src="/static/project/cellihealth.jpg" alt="CelliHealth" width="100%" />
        <span />
      </div>
      <div className="project-list__content">
        <p>A healthcare mobile application.</p>
      </div>
    </div>
    <div className="project-list__item">
      <h3 className="project-list__title">IN2NITE</h3>
      <div className="project-list__image">
        <img src="/static/project/in2nite.jpg" alt="IN2NITE" width="100%" />
        <span />
      </div>
      <div className="project-list__content">
        <p>A last minute hotel booking mobile application.</p>
      </div>
    </div>
    <div className="project-list__item">
      <h3 className="project-list__title">Kitook</h3>
      <div className="project-list__image">
        <img src="/static/project/kitook.jpg" alt="Kitook" width="100%" />
        <span />
      </div>
      <div className="project-list__content">
        <p>An Online Travel Agent (OTA) website.</p>
      </div>
    </div>
  </div>
);

export default ProjectList;