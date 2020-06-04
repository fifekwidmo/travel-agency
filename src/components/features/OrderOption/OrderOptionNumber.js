import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';

const OrderOptionNumber = ({currentValue, limits, setOptionValue, price}) => ( 
  <div className = {styles.number}>
    <input 
      type="number" 
      className={styles.inputSmall}
      value={currentValue} 
      max={limits.max} 
      min={limits.min} 
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
    {formatPrice(price)}
  </div>

);

OrderOptionNumber.propTypes = {
  price: PropTypes.string,
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
  limits: PropTypes.object,
};

export default OrderOptionNumber;