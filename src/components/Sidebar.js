import React, { Component } from 'react'
import sidebarAction from '../redux/sidebar/sidebarAction'
import {connect} from 'react-redux'

class Sidebar extends Component {
    render() {
        return (
            <div>
                <button value='increment' onClick={() => this.props.operatorType(event.target.value)}>Increment</button>
                <button value="decrement" onClick={() => this.props.operatorType(event.target.value)}>Decrement</button>
                <input type="number" name="test" value={this.props.operatorvalue} onChange={() => this.props.operatorValue(event.target.value)}></input>
            </div>
        )
    }
}

const matchStateToProps = state => {
    return {
        operatorvalue : state.sidebar.operatorValue
    }
}

const matchDispatchToProps = dispatch => {
    return {
        operatorType :  (value) => dispatch(sidebarAction.changetype(value)),
        operatorValue : (value) => dispatch(sidebarAction.changeValue(value))
    }
}
export default connect(matchStateToProps,matchDispatchToProps)(Sidebar)
