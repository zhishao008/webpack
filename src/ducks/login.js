/**
 * 一般都会声明reducer常量
 */
const CHANGE_NAME = "CHANGE_NAME";
/**
 * 初始化state
 */
const initialState = {
    name: "admin"
}
/**
 * 声明reducers
 */
export const login = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return Object.assign({},state,{name: action.name})
        default:
            return state
    }
}

/**
 * 声明action
 */
export const changeName = name => ({
    type: 'CHANGE_NAME',
    name: name
})