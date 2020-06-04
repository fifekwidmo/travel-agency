import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
// import {formatPrice} from '../../../utils/formatPrice';
// import {calculateTotal} from '../../../utils/calculateTotal';
// import {Grid, Row, Col} from 'react-flexbox-grid';
import OrderOptionCheckboxes from './OrderOptionCheckboxes';
import OrderOptionDropdown from './OrderOptionDropdown.js';
import OrderOptionIcons from './OrderOptionIcons.js';
import OrderOptionNumber from './OrderOptionNumber.js';

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
};

const OrderOption = ({id, setOrderOption, name, type, ...otherProps}) => {
  const OptionComponent = optionTypes[type];
  if(!OptionComponent){
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent
          {...otherProps} setOptionValue={value => setOrderOption({[id]: value})}

        />
      </div>
    );
  }
};

OrderOption.propTypes = {
  tripCost: PropTypes.string,
  tripOptions: PropTypes.object,
};
export default OrderOption;
