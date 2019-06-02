import React from 'react'
import renderer from 'react-test-renderer'
import WorkExperiences from '../pages/work-experiences'

describe('With Snapshot Testing', () => {
  it('show the correct work experiences page', () => {
    const component = renderer.create(<WorkExperiences />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})