import {ReduceStore} from 'flux/utils';
import PayeesDispatcher from './PayeesDispatcher';
import ActionTypes from './PayeesActionTypes';
import _sortBy from 'lodash/sortBy';

class PayeesStore extends ReduceStore {
    constructor() {
        super(PayeesDispatcher);
    }

    getInitialState() {
        return {lastUpdated: Date.now(), status: 'INIT', payees: [], sortField: ''};
    }

    reduce(state, action) {
        const baseState = {lastUpdated: action.lastUpdated, status: action.status, payees: [], sortField:''};

        switch(action.type) {
            case ActionTypes.REQUEST_PAYEES:
                return {...baseState};
            case ActionTypes.REQUEST_PAYEES_SUCCESS:
                return {...baseState, payees: action.payees};
            case ActionTypes.REQUEST_PAYEES_ERROR:
                return {...baseState, error: action.error};
            case ActionTypes.SORT_PAYEES:
                let sortField = action.sortField;
                let payees = _sortBy(state.payees, [sortField]);
                if(sortField === state.sortField) {
                    sortField='';
                    payees.reverse();
                    //return {...baseState, payees: payees.reverse(), sortField: ''};
                }
                return {...baseState, payees, sortField };
            default:
                return state;
        }
    }
}

export default new PayeesStore();