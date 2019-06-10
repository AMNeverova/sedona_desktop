const mobileMenuClickActionType = 'MOBILE-MENU-CLICK';

let initialState = [
    {
        "id": "1",
        "itemText": "главная",
        "itemClassName": "item",
        "subItems": [
            "пункт 1.1",
            "пункт 1.2",
            "пункт 1.3"
        ]
    },
    {
        "id": "2",
        "itemText": "фото и видео",
        "itemClassName": "item",
        "subItems": [
            "пункт 2.1",
            "пункт 2.2",
            "пункт 2.3"
        ]
    },
    {
        "id": "3",
        "itemText": null,
        "itemClassName": "item item-3",
        "subItems": []
    },
    {
        "id": "4",
        "itemText": "форма отзыва",
        "itemClassName": "item",
        "subItems": [
            "пункт 3.1",
            "пункт 3.2",
            "пункт 3.3"
        ]
    },
    {
        "id": "5",
        "itemText": "html academy",
        "itemClassName": "item",
        "subItems": [
            "пункт 4.1",
            "пункт 4.2",
            "пункт 4.3"
        ]
    }
]

const menuReducer = (state = initialState, action) => {
    if (action.type == mobileMenuClickActionType) {
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