import React from 'react';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
// import styles from './OrderForm.scss';
import {Row, Col} from 'react-flexbox-grid';
import OrderOption from '../OrderOption/OrderOption';


const OrderForm = ({options, tripCost, setOrderOption}) => (  
  <Row>
    {pricing.map(option =>
      (<Col md={4} key={option.id}>
        <OrderOption {...option}>
        currentValue={options[option.id]}
        setOrderOption={setOrderOption}
        </OrderOption>
      </Col>))}
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} tripOptions={options}/>
    </Col>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,

};

export default OrderForm;
  