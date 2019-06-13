import data from './data_rus.json'

export const mobileMenuClickActionType = 'MOBILE-MENU-CLICK';

let initialState = data.menu;

const menuReducer = (state = initialState, action) => {
    if (action.type === mobileMenuClickActionType) {
        state.map((item) => {
            if (item.itemClassName.indexOf('visible') == -1 && item.itemClassName.indexOf('3') == -1) {
                item.itemClassName = item.itemClassName + ' visible'
            } else if (item.itemClassName.indexOf('visible') !== -1) {
                item.itemClassName = item.itemClassName.slice(0,12)
            }
        })
    }

    return state
}

export default menuReducer;