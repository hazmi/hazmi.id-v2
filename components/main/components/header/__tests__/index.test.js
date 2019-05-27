import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import Header from '../index'

const data = [
  {
    id: 1,
    title: "",
    link: "/",
    icon: <span />,
  },
  {
    id: 2,
    title: "Work Experiences",
    link: "/work-experiences",
    icon: <span />,
  }
];

describe('With Enzyme', () => {
  it('Show the site name', () => {
    const router = {
      pathname: '/'
    };
    const wrapper = shallow(<Header data={data} router={router} />)
    expect(wrapper.dive().find('h1').text()).toEqual('Hazmi.ID')
  })
  it('Show the correct breadcrumbs in title', () => {
    const router = {
      pathname: '/work-experiences'
    };
    const wrapper = shallow(<Header data={data} router={router} />)
    expect(wrapper.dive().find('h1').text()).toEqual('Hazmi.ID / Work Experiences')
  })
})

describe('With Snapshot Testing', () => {
  it('It show the site name', () => {
    const router = {
      pathname: '/'
    };
    const component = renderer.create(<Header data={data} router={router} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('It show the correct breadcrumbs', () => {
    const router = {
      pathname: '/work-experiences'
    };
    const component = renderer.create(<Header data={data} router={router} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})