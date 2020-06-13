import React from 'react';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
// import styles from './OrderForm.scss';
import {Row, Col} from 'react-flexbox-grid';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';
import settings from '../../../data/settings';
const sendOrder = (options, tripCost, tripName, tripId, tripCountryCode) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));
  if ((options.name !== '') && (options.contact !== '')) {
    const payload = {
      ...options,
      totalCost,
      tripName,
      tripId,
      tripCountryCode,
    };
    const url = settings.db.url + '/' + settings.db.endpoint.orders;
    const fetchOptions = {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };
    fetch(url, fetchOptions)
      .then(function(response){
        return response.json();
      }).then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
      });
  } else {
    window.alert('Blank name and contact. Please provide before send');
  }
};
const OrderForm = ({tripName, tripId, tripCountryCode,options, tripCost, setOrderOption}) => (  
  <Row>
    {pricing.map(option =>
      (<Col md={4} key={option.id}>
        <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption}/>
      </Col>))}
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} tripOptions={options}/>
    </Col>
    <Button onClick={() => sendOrder(options, tripCost,  tripName, tripId, tripCountryCode)}>Order now!</Button>
  </Row>
);
OrderForm.propTypes = {
  tripCost: PropTypes.string,
  tripName: PropTypes.string,
  tripId: PropTypes.string,
  tripCountryCode: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};
export default OrderForm;
  