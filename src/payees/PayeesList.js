import React, { Component } from 'react';
import PayeesGrid from './PayeesGrid';

export default class PayeesList extends Component {
  constructor(props) {
    super(props);
    this.props.fetchPayees();
    //this.sortPayeesMethod = this.sortPayeesMethod.bind(this);
  }

  sortPayeesMethod() {
    // Placeholder
  }

  render() {
    // const displayPayees = _sortBy(this.props.payees, [this.state.sortField]);

    return (
      <div>
        <h3>PayeesList</h3>
        <button className="btn btn-primary" onClick={this.props.fetchPayees}>Refresh Payees...</button>
        <PayeesGrid {...this.props} />
      </div>
    )
  }
}
