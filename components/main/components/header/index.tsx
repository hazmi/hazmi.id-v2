import React from 'react';
import Link from 'next/link'
import { withRouter } from 'next/router'
import './index.scss'

export const Header = ({ data, router }) => {
  let title: string;
  data.map(item => {
    if (router.pathname === item.link) {
      title = item.title;
    }
  });
  return (
    <div className="header">
      <img className="header__avatar" src='/static/pp.jpg' width={32} height={32} />
      <h1 className="header__title">{title}</h1>
    </div>
  );
}

export default withRouter(Header);