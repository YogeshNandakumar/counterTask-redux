import { inputType } from './InputType'
import intialState  from '../reduxState'

const inputReducer = (state = intialState, action) => {
    switch(action.type) {
        case inputType.input : return {
            ...state,
            value:action.payload
        }
        default : return state
    }
}

export default inputReducer