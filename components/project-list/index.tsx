import React from 'react'
import './index.scss'

const ProjectList = () => (
  <div className="project-list">
    <div className="project-list__item">
      <h3 className="project-list__title">MUTUCare</h3>
      <div className="project-list__image">
        <img src="/static/project/mutucare.jpg" alt="MUTUCare" width="100%" />
        <span />
      </div>
      <div className="project-list__content">
        <p>2018 &middot; A hazard awareness mobile application and website &middot; React, React Native, MapBox, MapBox GL, Leaflet.</p>
      </div>
    </div>
    <div className="project-list__item">
      <h3 className="project-list__title">Connect33</h3>
      <div className="project-list__image">
        <img src="/static/project/connect33.jpg" alt="Connect33" width="100%" />
        <span />
      </div>
      <div className="project-list__content">
        <p>2018 &middot; A HR mobile application &middot;  React Native, React, Yii, MySQL, AWS.</p>
      </div>
    </div>
    <div className="project-list__item">
      <h3 className="project-list__title">CelliHealth</h3>
      <div className="project-list__image">
        <img src="/static/project/cellihealth.jpg" alt="CelliHealth" width="100%" />
        <span />
      </div>
      <div className="project-list__content">
        <p>2016 &middot; A healthcare mobile application &middot; React Native, React, Yii, MySQL, AWS, Jenkins.</p>
      </div>
    </div>
    <div className="project-list__item">
      <h3 className="project-list__title">Vidio</h3>
      <div className="project-list__image">
        <img src="/static/project/vidio.jpg" alt="Vidio" width="100%" />
        <span />
      </div>
      <div className="project-list__content">
        <p>2016 &middot; A social vidio sharing website &middot; JS + CSS/SASS, Rails</p>
      </div>
    </div>
    <div className="project-list__item">
      <h3 className="project-list__title">Liputan6</h3>
      <div className="project-list__image">
        <img src="/static/project/liputan6.jpg" alt="Liputan6" width="100%" />
        <span />
      </div>
      <div className="project-list__content">
        <p>2015 &middot; A news publishing website &middot; JS + CSS/LESS PHP/Laravel + XHP</p>
      </div>
    </div>
    <div className="project-list__item">
      <h3 className="project-list__title">IN2NITE</h3>
      <div className="project-list__image">
        <img src="/static/project/in2nite.jpg" alt="IN2NITE" width="100%" />
        <span />
      </div>
      <div className="project-list__content">
        <p>2013 &middot; A last minute hotel booking mobile application &middot; PhoneGap, PHP/Yii, MongoDB, AWS.</p>
      </div>
    </div>
    <div className="project-list__item">
      <h3 className="project-list__title">Kitook</h3>
      <div className="project-list__image">
        <img src="/static/project/kitook.jpg" alt="Kitook" width="100%" />
        <span />
      </div>
      <div className="project-list__content">
        <p>2012 &middot;  An Online Travel Agent (OTA) website &middot; PHP/CodeIgniter, MySQL, MongoDB, AWS.</p>
      </div>
    </div>
    <div className="project-list__item">
      <h3 className="project-list__title">X-Worlds</h3>
      <div className="project-list__image">
        <img src="/static/project/x-worlds.jpg" alt="X-Worlds" width="100%" />
        <span />
      </div>
      <div className="project-list__content">
        <p>2010 &middot; A website that transform kids drawing into reality &middot; WordPress + Custom Theme.</p>
      </div>
    </div>
  </div>
);

export default ProjectList;