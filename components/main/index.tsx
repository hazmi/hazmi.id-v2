import React from 'react';
import Header from './components/header/index'
import Navigation from './components/navigation/index'
import IconHome from './components/icon-home'
import IconRocket from './components/icon-rocket'
import IconCase from './components/icon-case'
import IconToy from './components/icon-toy'
import './index.scss';

interface navItem {
  id: number,
  title: string,
  link: string,
  icon: any
};
const data: navItem[] = [
  {
    id: 1,
    title: "Hazmi.ID",
    link: "/",
    icon: IconHome,
  },
  {
    id: 2,
    title: "Work Experiences",
    link: "/work-experiences",
    icon: IconCase,
  },
  {
    id: 3,
    title: "Past Projects",
    link: "/past-projects",
    icon: IconRocket,
  },
  {
    id: 4,
    title: "Playgrounds",
    link: "/playgrounds",
    icon: IconToy,
  }
];

export const Main = ({ children }) => (
  <div className="main">
    <Header data={data} />
    <Navigation data={data} />
    <div className="main__content">
      {children}
    </div>
  </div>
);

export default Main;