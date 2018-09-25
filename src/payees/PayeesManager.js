import React from 'react';
import {Container} from 'flux/utils';
import PayeesList from './PayeesList';
import Actions from './PayeesActions';
import PayeesStore from './PayeesStore';

class PayeesManager extends React.Component {

    static getStores() {
        return [PayeesStore];
    }

    static calculateState() {
        const {payees, sortField, sortDirection} = PayeesStore.getState();
        const {fetchPayees, sortPayees} = Actions;
        return {
            payees,
            fetchPayees,
            sortPayees,
            sortField,
            sortDirection
        }
    }

    render() {
        return (
            <React.Fragment>
                <h2>Payees Manager</h2>
                <PayeesList {...this.state}/>
            </React.Fragment>
        );
    }
}

export default Container.create(PayeesManager);