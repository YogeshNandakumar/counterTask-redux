# counterTask-redux

The task is incrementing or decrementing the given value with the help of redux.

The task will consists of three components. they are 1)input 2)sidebar 3)counter

Input : In this component user can enter the desired input, after that when user click on submit by using matchDispatchToProps method we store entered value in redux.

sidebar : In this component user can select operator type (increment/decrement) and user can enter operator value. after that we store these values in to redux.

counter: In this first we set the state on componentDidMount when props change. after that whenever user click on selected operator by using state value we perform that particular operation and update the value of operatorValue.

Redux : In redux we completed this task with help of actions,reducers and store.
