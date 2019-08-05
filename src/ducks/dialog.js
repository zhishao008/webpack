/**
 * 一般都会声明reducer常量
 */
const CHANGE_STATUS = "CHANGE_STATUS";
/**
 * 初始化state
 */
const initialState = {
    status: false
}
/**
 * 声明reducers
 */
export const dialog = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_STATUS':
            return Object.assign({},state,{status: action.status})
        default:
            return state
    }
}

/**
 * 声明action
 */
export const changeStatus = status => ({
    type: 'CHANGE_STATUS',
    status: status
})