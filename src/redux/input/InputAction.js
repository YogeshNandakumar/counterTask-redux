import {inputType} from './InputType';

const InputAction = {
    submit : (value) => {
        return {
            type : inputType.input,
            payload : value
        }
    } 
}

export default InputAction