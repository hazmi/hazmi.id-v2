import React from 'react';
import { withRouter } from 'next/router'
import './index.scss'

export const Header = ({ data, router }) => {
  let title: string = 'Hazmi.ID';
  data.map(item => {
    if (item.title && router.pathname === item.link) {
      title = `Hazmi.ID / ${item.title}`;
    }
  });
  return (
    <div className="header">
      <img className="header__avatar" alt="Avatar Image" src='/static/hazmi.jpg' width={32} height={32} />
      <h1 className="header__title">{title}</h1>
    </div>
  );
}

export default withRouter(Header);