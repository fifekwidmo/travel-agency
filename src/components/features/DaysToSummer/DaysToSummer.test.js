import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer';
const select = {
  title: '.title',
  countdown: '.countdown',
};
const mockProps = {
  title: 'abc',
  summerTime: 'Summer Time',
};
describe('Component DaysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });
  it('should render header and remaining days', () => {
    const component = shallow(<DaysToSummer />);
    expect(component.exists(select.title)).toBeTruthy();
    expect(component.exists(select.countdown)).toBeTruthy();
  });
  it('should render correct title', () => {
    const expectedTitle = mockProps.title;
    const component = shallow(<DaysToSummer {...mockProps} />);
    expect(component.find(select.title).text()).toEqual(expectedTitle);
  });
});
const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};
const daysToSummerDescription = ' days to summer';
const oneDayToStartSummerDescription = ' days to summer';
// const oneDayToEndSummerDescription = ' day to end summer';
const checkDescriptionAtDay = (date, expectedDate) => {
  it(`should show correct at ${date}`, () => {
    global.Date = mockDate(`${date}T00:00:00.000Z`);
    const component = shallow(<DaysToSummer {...mockProps} />);
    const renderedDays = component.find(select.countdown).text(); //issue?
    expect(renderedDays).toEqual(expectedDate);
    global.Date = trueDate;
  });
};
describe('Component HappyHourAd with mocked Date', () => {
  checkDescriptionAtDay('2020-06-20', '1' + oneDayToStartSummerDescription);
  checkDescriptionAtDay('2020-06-15', '6' + daysToSummerDescription);
  checkDescriptionAtDay('2020-06-01', '20' + daysToSummerDescription);
  checkDescriptionAtDay('2020-10-30', '255' + daysToSummerDescription);  
  checkDescriptionAtDay('2020-11-24', '290' + daysToSummerDescription);
  checkDescriptionAtDay('2020-06-30', mockProps.summerTime);
  checkDescriptionAtDay('2020-07-31', mockProps.summerTime);
  checkDescriptionAtDay('2020-08-01', mockProps.summerTime);
  checkDescriptionAtDay('2020-09-15', mockProps.summerTime);
});


