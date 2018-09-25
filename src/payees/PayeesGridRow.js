import React from 'react';

const PayeesGridRow = ({payee, selectPayee}) => {
  return (
    <tr onClick={() => selectPayee(payee)}>
        <td>{payee.payeeName}</td>
        <td>{payee.address && payee.address.city}</td>
        <td>{payee.address && payee.address.state}</td>
    </tr>
  )
}

export default PayeesGridRow;
