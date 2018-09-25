import React from 'react';
import PayeesGridRow from './PayeesGridRow';

const PayeesGrid = (props) => {
    const {sortPayees, payees} = props;



    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th onClick={() => sortPayees('payeeName')}>{'Payee Name ' + props.sortDirection.payeeName}</th>
                    <th onClick={() => sortPayees('address.city')}>{'City ' + props.sortDirection.city}</th>
                    <th onClick={() => sortPayees('address.state')}>{'State ' + props.sortDirection.state}</th>
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
