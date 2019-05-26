import React from 'react'
import { withRouter } from 'next/router'
import './index.scss';

const className = "navigation__item"
export const Navigation = ({ data, router }) => {
  let activeNav = 0;
  return (
    <div className="navigation">
      {data.map(item => {
        const curClassName: string = router.pathname === item.link ? `${className} ${className}_active` : className;
        if (activeNav === 0 && router.pathname === item.link) {
          activeNav = item.id;
        }
        return (
          <a
            key={item.link}
            href={item.link}
            onClick={e => {
              e.preventDefault();
              router.push(item.link);
            }}
            className={curClassName}
          >
            <item.icon />
          </a>
        )
      })}
      <span className={`navigation__active-link navigation__active-link_${activeNav}`} />
    </div>
  )
};

export default withRouter(Navigation);