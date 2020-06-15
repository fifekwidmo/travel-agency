import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class OrderOptionDate extends React.Component {
    static propTypes = {
      setOptionValue: PropTypes.func,
    }
    state = {
      startDate: new Date(),
    };
    handleChange = date => {
      const {setOptionValue} = this.props;
      this.setState({
        startDate: date,
      });
      setOptionValue(date);
    };
    render() {
      return (
        <DatePicker
          selected={this.state.startDate}
          dateFormat="yyyy/MM/dd"
          onChange={this.handleChange}
        />
      );
    }
}
export default OrderOptionDate;