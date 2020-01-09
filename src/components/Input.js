import React, { Component } from 'react';
import { connect } from 'react-redux'
import inputAction from '../redux/input/InputAction'

class Input extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputValue : ''
        }
        this.inputChange = this.inputChange.bind(this)
    }
    render() {
        return (
            <div>
                <input  type="number" value={this.state.inputValue} onChange={this.inputChange}></input>
                <button onClick={() => this.props.submit(this.state.inputValue)}>submit</button>
            </div>
        )
    }

    inputChange(event){
        this.setState({
            inputValue: event.target.value
        })
    }
}

const matchStateToProps = state => {
    return {
        defValue : state.input.value
    }
}

const matchDispatchToProps = dispatch => {
    return {
        submit: inputValue => dispatch(inputAction.submit(inputValue))
    }

}

export default connect(matchStateToProps,matchDispatchToProps)(Input)
