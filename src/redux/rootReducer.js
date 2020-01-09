import {combineReducers} from 'redux'
import inputReducer from './input/InputReducer'
import counterReducer from './counter/counterReducer'
import sidebarReducer from './sidebar/sidebarReducer'


const rootReducer = combineReducers({
    input : inputReducer,
    counter : counterReducer,
    sidebar : sidebarReducer
})

export default rootReducer