import {ReduceStore} from 'flux/utils';
import PayeesDispatcher from './PayeesDispatcher';
import ActionTypes from './PayeesActionTypes';
import _sortBy from 'lodash/sortBy';

class PayeesStore extends ReduceStore {
    constructor() {
        super(PayeesDispatcher);
    }

    getInitialState() {
        return {lastUpdated: Date.now(), status: 'INIT', payees: [], sortField: '', sortDirection:
        {payeeName: '',
        city: '',
        state: ''}};
    }

    reduce(state, action) {
        const baseState = {lastUpdated: action.lastUpdated, status: action.status, payees: [], sortField:'', sortDirection: state.sortDirection};

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
                let sortDirection;
                switch(sortField) {
                    case 'payeeName':
                        sortDirection = {
                            payeeName: state.sortDirection.payeeName === 'v' ? '^' : 'v',
                            city: '',
                            state: ''
                        }
                        break;
                    case 'address.city':
                        sortDirection = {
                            payeeName: '',
                            city: state.sortDirection.city === 'v' ? '^' : 'v',
                            state: ''
                        }
                        break;
                    case 'address.state':
                        sortDirection = {
                            payeeName: '',
                            city: '',
                            state: state.sortDirection.state === 'v' ? '^' : 'v',
                        }
                        break;
                }
                if(sortField === state.sortField) {
                    

                    sortField='';
                    payees.reverse();
                    //return {...baseState, payees: payees.reverse(), sortField: ''};
                }
                return {...baseState, payees, sortField, sortDirection };
            default:
                return state;
        }
    }
}

export default new PayeesStore();