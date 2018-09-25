import ActionTypes from './PayeesActionTypes';
import PayeesDispatcher from './PayeesDispatcher';

const setStatus = (status) => ({
    status,
    lastUpdated: Date.now()
})

const PayeesActions =  {
    requestPayeesSuccess(payees) {
        PayeesDispatcher.dispatch({
            type: ActionTypes.REQUEST_PAYEES_SUCCESS,
            payees,
            ...setStatus('SUCCESS')
        });
    },

    requestPayeesError(error) {
        PayeesDispatcher.dispatch({
            type: ActionTypes.REQUEST_PAYEES_ERROR,
            error,
            ...setStatus('ERROR')
        });
    },

    requestPayees() {
        PayeesDispatcher.dispatch({
            type: ActionTypes.REQUEST_PAYEES,
            ...setStatus('FETCHING')
        });
    },

    fetchPayees() {
        this.requestPayees();
        fetch('http://localhost:8000/payees')
        .then(res => {
            return res.ok ? res.json(): Promise.reject(res);
        })
        .then(payees => this.requestPayeesSuccess(payees))
        .catch(error => this.requestPayeesError(error));
    },

    sortPayees(sortField) {
        PayeesDispatcher.dispatch({
            type: ActionTypes.SORT_PAYEES,
            sortField,
        });
    }
}

PayeesActions.fetchPayees = PayeesActions.fetchPayees.bind(PayeesActions);

export default PayeesActions;