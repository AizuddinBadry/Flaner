import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group';

import CustomerInformation from './CustomerInformation';

export default class PaymentContainer extends Component {
  render() {
    return (
      <div className="wrapper">
        <div
          className="panel shadow"
          style={{ height: '700px', width: '700px' }}
        >
          <CustomerInformation />
        </div>
      </div>
    );
  }
}
