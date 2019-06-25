export const mobileMenuClickActionType = 'MOBILE-MENU-CLICK';

let initialState = [
    {
        "id": 1,
        "itemClassName":  "item item-1",
        "subitemIds": [1, 2, 3]
    },
    {
        "id": 2,
        "itemClassName": "item item-2",
        "subitemIds": [1, 2, 3]
    },
    {
        "id": 3,
        "itemClassName": "item item-3",
        "subitemIds": []
    },
    {
        "id": 4,
        "itemClassName": "item item-4",
        "subitemIds": [1, 2, 3]
    },
    {
        "id": 5,
        "itemClassName": "item item-5",
        "subitemIds": [1, 2, 3]
    }
]

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
