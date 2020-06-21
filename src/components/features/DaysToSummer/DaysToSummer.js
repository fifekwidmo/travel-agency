
import React from 'react';
import PropTypes from 'prop-types';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    summerTime: PropTypes.string,
  };
  daysToSummer(){
    const currentTime = new Date();
    // array -1 in months
    const summerStart = new Date(Date.UTC(currentTime.getUTCFullYear(), 5, 21));
    const summerEnd = new Date(Date.UTC(currentTime.getUTCFullYear(), 8, 22));
    const oneDayToStartSummer = new Date(Date.UTC(currentTime.getUTCFullYear(), 5, 20));
    const oneDayToEndSummer = new Date(Date.UTC(currentTime.getUTCFullYear(), 8, 21));
    const daysToSummerDescription = ' days to summer';
    const oneDayToStartSummerDescription = ' day to summer';
    const oneDayToEndSummerDescription = ' day to end summer';
    let daysDifference;
    const day = 24 * 60 * 60 * 1000; 
    if (currentTime<summerStart){
      daysDifference = Math.round(Math.abs(currentTime - summerStart)/day) + daysToSummerDescription;
    }else if (currentTime > summerEnd){
      daysDifference = Math.round(Math.abs(currentTime - summerStart)/day) + daysToSummerDescription;
    }else if(currentTime === oneDayToStartSummer){
      daysDifference = Math.round(Math.abs(currentTime - summerStart)/day) + oneDayToStartSummerDescription;
    }else if(currentTime === oneDayToEndSummer){
      daysDifference = Math.round(Math.abs(currentTime - summerEnd)/day) + oneDayToEndSummerDescription;
    }
    return daysDifference;
  }
  render() {
    const {title, summerTime} = this.props;
    const daysToSummer = this.daysToSummer();
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.countdown}>
          {daysToSummer ? daysToSummer : summerTime}
        </div>
      </div>
    );
  }
}
export default DaysToSummer; 
