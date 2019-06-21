import { combineReducers, createStore } from "redux";
import menuReducer from "./menuReducer";
import buttonSendReducer from "./buttonSendReducer";
import textContentReducer from "./textContentReducer";

let reducers = combineReducers({
    menu: menuReducer,
    form: buttonSendReducer,
    textContent: textContentReducer
})

let store = createStore(reducers);

// let store = {
//     state: {
//         radiobutton: [{
//                 id: 1,
//                 chosen: true,
//                 value: 'pos',
//                 labelText: 'Скорее положительное'
//             },
//             {
//                 id: 2,
//                 chosen: false,
//                 value: 'neg',
//                 labelText: 'Скорее отрицательное'
//             },
//             {
//                 id: 3,
//                 chosen: false,
//                 value: 'diff',
//                 labelText: 'Затрудняюсь ответить'
//             }
//         ],
//         inputFullname: [{
//                 id: 1,
//                 className: 'input-text input-name',
//                 placeholder: 'Пётр',
//                 value: '',
//                 required: true,
//                 spanClassName: 'required',
//                 labelText: 'Имя'
//             },
//             {
//                 id: 2,
//                 className: 'input-text',
//                 placeholder: 'Иванов',
//                 value: '',
//                 required: true,
//                 spanClassName: 'required',
//                 labelText: 'Фамилия'
//             },
//             {
//                 id: 3,
//                 className: 'input-text',
//                 placeholder: 'Александрович',
//                 value: '',
//                 required: false,
//                 spanClassName: '',
//                 labelText: 'Отчество'
//             }
//         ],
//         inputPhone: {
//             value: '',
//         },
//         inputEmail: {
//             value: '',
//         },
//         checkbox: [{
//                 id: 1,
//                 checked: true,
//                 checkboxText: 'Мост Дьявола',
//                 checkboxValue: 'bridge',
//             },
//             {
//                 id: 2,
//                 checked: true,
//                 checkboxText: 'Гора-Колокол',
//                 checkboxValue: 'mountain',
//             },
//             {
//                 id: 3,
//                 checked: false,
//                 checkboxText: 'Слайд-парк',
//                 checkboxValue: 'park',
//             },
//             {
//                 id: 4,
//                 checked: false,
//                 checkboxText: 'Красные скалы',
//                 checkboxValue: 'cliff',
//             }
//         ],
//         describeEmotions: {
//             value: ''
//         }
//     },

//     subscriber() {
//         console.log('no subscriber yet')
//     },
//     getState() {
//         return this.state
//     },
//     dispatch(action) {
//         this.state.checkbox = checkboxChangeReducer(this.state.checkbox, action);
//         this.state.radiobutton = radioReducer(this.state.radiobutton, action);
//         this.state.describeEmotions = textareaReducer(this.state.describeEmotions, action);
//         this.state.inputFullname = inputFullnameReducer(this.state.inputFullname, action);
//         this.state.inputPhone = inputPhoneReducer(this.state.inputPhone, action);
//         this.state.inputEmail = inputEmailReducer(this.state.inputEmail, action);
//         this.subscriber()
//     },

//     subscribe(observer) {
//         this.subscriber = observer
//     }
// }

export default store