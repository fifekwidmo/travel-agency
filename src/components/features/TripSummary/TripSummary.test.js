import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  const props = {
    id: 'abc',
    name: 'name',
    image: 'image',
    cost: '$999,999',
    days: 7,
    tags: ['tag1', 'tag2', 'tag3'],
  };
  const component = shallow(<TripSummary {...props}/>);
  it('should create link to proper adress based on id from props', () => {
    const expectedLink = `/trip/${props.id}`;
    const renderedLink = component.find('Link').prop('to');
    expect(renderedLink).toEqual(expectedLink);
  });
  it('should create img with proper src and alt', () => {
    const expectedAlt = props.name;
    const expectedSrc = props.image;
    const renderedAlt = component.find('img').prop('alt');
    const renderedSrc = component.find('img').prop('src');
    expect(renderedAlt).toEqual(expectedAlt);
    expect(renderedSrc).toEqual(expectedSrc);
  });
  it('should generate props name, cost days', () => {
    const expectedName = props.name;
    const expectedCost = props.cost;
    const expectedDays = props.days;
    const renderedName = component.find('.title').text();
    const renderedDays = component.find('.details span').at(0).text();
    const renderedCost = component.find('.details span').at(1).text();
   
    expect(renderedName).toEqual(expectedName);
    expect(renderedCost).toContain(expectedCost);
    expect(renderedDays).toContain(expectedDays);
  });
  it('should throw error without required props', () =>{
    expect(() => shallow(<TripSummary />)).toThrow();
  });
  it('should render tags correctly', () => {
    const expectedTags = props.tags;
    const renderedTags = [];
    renderedTags.push(
      component.find('.tag').at(0).text(),
      component.find('.tag').at(1).text(), 
      component.find('.tag').at(2).text());
    expect(renderedTags).toEqual(expectedTags);   
  });
  it('should not render tags without props with tags array', () => {
    const component = shallow( <TripSummary id={props.id} image={props.image} name={props.name} cost={props.cost} days={props.days}/>);
    expect(component.find('.tags')).toBeTruthy();
  });
});