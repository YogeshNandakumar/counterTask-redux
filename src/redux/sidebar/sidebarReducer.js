import intialState from '../reduxState'
import {sidebarType} from './sidebarType'

const sidebarReducer = (state = intialState,action) => {
    switch(action.type) {
        case sidebarType.operatorType : return {
            ...state,
            operator : action.payload
        }
        case sidebarType.operatorValue : return {
            ...state,
            operatorValue : action.payload
        }
        default : return state
    }
}

export default sidebarReducer