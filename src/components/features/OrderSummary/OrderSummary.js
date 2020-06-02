import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';
// import {Grid, Row, Col} from 'react-flexbox-grid';

const OrderSummary = ({tripCost, tripOptions}) => {
  const finalTripCost = calculateTotal(formatPrice(tripCost), tripOptions);
  return(
    <h2 className={styles.component}>
        Total: <strong> $ {finalTripCost}</strong></h2>
  );
};
OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  tripOptions: PropTypes.object,
};
export default OrderSummary;
