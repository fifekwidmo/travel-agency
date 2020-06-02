import React from 'react';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';
// import styles from './OrderForm.scss';
import {Row, Col} from 'react-flexbox-grid';

const OrderForm = ({options, tripCost}) => (  
  <Row>
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} tripOptions={options}/>
    </Col>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;
  