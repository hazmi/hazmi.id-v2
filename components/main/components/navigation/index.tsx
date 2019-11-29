import React from 'react'
import { withRouter } from 'next/router'
import './index.scss';

const className = "navigation__item"
export const Navigation = ({ data, router }) => {
  let activeNav = 0;
  return (
    <nav className="navigation">
      <ul>
        {data.map(item => {
          const curClassName: string = router.pathname === item.link ? `${className} ${className}_active` : className;
          if (activeNav === 0 && router.pathname === item.link) {
            activeNav = item.id;
          }
          return (
            <li key={item.link}>
              <a
                href={item.link}
                aria-label={`Go to ${item.title} page`}
                onClick={e => {
                  e.preventDefault();
                  router.push(item.link);
                }}
                className={curClassName}
              >
                <item.icon />
                <span>{item.title}</span>
              </a>
            </li>
          )
        })}
        <span className={`navigation__active-link navigation__active-link_${activeNav}`} />
      </ul>
    </nav>
  )
};

export default withRouter(Navigation);