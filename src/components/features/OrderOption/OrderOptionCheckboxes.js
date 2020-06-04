import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionCheckboxes = () => {
  return(
    <div className={styles.checkboxes}></div>
  );
};

OrderOptionCheckboxes.propTypes = {
  price: PropTypes.string,
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
  limits: PropTypes.object,
};

export default OrderOptionCheckboxes;
