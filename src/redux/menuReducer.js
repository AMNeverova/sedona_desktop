import data from './data_rus.json'

export const mobileMenuClickActionType = 'MOBILE-MENU-CLICK';

let initialState = data.menu;

const menuReducer = (state = initialState, action) => {
    if (action.type === mobileMenuClickActionType) {
        state.map((item) => {
            if (item.itemClassName =='item') {
                item.itemClassName = 'item visible'
            } else if (item.itemClassName.indexOf('visible') !== -1) {
                item.itemClassName = 'item'
            }
        })
    }
    return state
}

export default menuReducer;