import React from 'react';
import PayeesGridRow from './PayeesGridRow';

const PayeesGrid = (props) => {
    const {sortPayees, payees} = props;
    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th onClick={() => sortPayees('payeeName')}>Payee Name</th>
                    <th onClick={() => sortPayees('address.city')}>City</th>
                    <th onClick={() => sortPayees('address.state')}>State</th>
                </tr>
            </thead>
            <tbody>
                {
                    payees.map(payee => <PayeesGridRow key={payee.id} payee={payee} {...props}/>)
                }
            </tbody>
        </table>
    );
}

export default PayeesGrid;
