import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            startValue : '',
            operator : 'button',
            operatorValue : ''
        }
        this.doOperation = this.doOperation.bind(this)
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps != this.props) {
            if(prevProps.startValue != this.props.startValue) {
                this.setState({
                    startValue : this.props.startValue,
                    operator : this.props.operator,
                    operatorValue: this.props.operatorValue
                })
            } else {
                this.setState({
                    operator : this.props.operator,
                    operatorValue: this.props.operatorValue
                })
            }
        }
    }

    render() {
        return (
            <div>
                <div>
                    <input value={this.state.startValue} disabled></input>
                    <button onClick={this.doOperation}>{this.state.operator}</button>
                </div>
            </div>
        )
    }

    doOperation (){
        if(this.state.operator === 'increment'){
            this.setState({
                startValue : Number(this.state.startValue) + Number(this.state.operatorValue)
            })
        } else if(this.state.operator === 'decrement'){
            this.setState({
                startValue : Number(this.state.startValue) - Number(this.state.operatorValue)
            })
        }
    }
}

const matchStateToProps = state => {
    return {
        startValue : state.input.value,
        operator : state.sidebar.operator,
        operatorValue : state.sidebar.operatorValue
    }
}
export default connect(matchStateToProps)(Counter)
