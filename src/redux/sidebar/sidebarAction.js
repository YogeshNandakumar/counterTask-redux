import { sidebarType } from './sidebarType'

const sidebarAction = {
    changetype : (value) => {
        return {
            type : sidebarType.operatorType,
            payload : value
        }
    },
    changeValue : (value) => {
        return {
            type : sidebarType.operatorValue,
            payload: value
        }
    }
}

export default sidebarAction