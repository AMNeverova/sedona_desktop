export const buttonSendActionType = 'SEND-REVIEW';
export const checkboxChangeActionType = 'CHECKBOX-CHANGE';
export const inputEmailActionType = 'INPUT-EMAIL-CHANGE';
export const inputNameActionType = 'INPUT-NAME-CHANGE';
export const inputSurnameActionType = 'INPUT-SURNAME-CHANGE';
export const inputPatronymActionType = 'INPUT-PATRONYM-CHANGE';
export const inputPhoneActionType = 'INPUT-PHONE-CHANGE';
export const radioChangeActionType = 'RADIO-CHANGE';
export const textareaActionType = 'TEXTAREA-CHANGING-VALUE';

let initialState = {
    radiobutton: [{
            id: 1,
            chosen: true,
            value: 'pos',
            labelText: 'Скорее положительное'
        },
        {
            id: 2,
            chosen: false,
            value: 'neg',
            labelText: 'Скорее отрицательное'
        },
        {
            id: 3,
            chosen: false,
            value: 'diff',
            labelText: 'Затрудняюсь ответить'
        }
    ],
    inputFullname: [{
            id: 1,
            className: 'input-text input-name',
            placeholder: 'Пётр',
            value: '',
            required: true,
            spanClassName: 'required',
            labelText: 'Имя'
        },
        {
            id: 2,
            className: 'input-text',
            placeholder: 'Иванов',
            value: '',
            required: true,
            spanClassName: 'required',
            labelText: 'Фамилия'
        },
        {
            id: 3,
            className: 'input-text',
            placeholder: 'Александрович',
            value: '',
            required: false,
            spanClassName: '',
            labelText: 'Отчество'
        }
    ],
    inputPhone: {
        value: '',
    },
    inputEmail: {
        value: '',
    },
    checkbox: [{
            id: 1,
            checked: true,
            checkboxText: 'Мост Дьявола',
            checkboxValue: 'bridge',
        },
        {
            id: 2,
            checked: true,
            checkboxText: 'Гора-Колокол',
            checkboxValue: 'mountain',
        },
        {
            id: 3,
            checked: false,
            checkboxText: 'Слайд-парк',
            checkboxValue: 'park',
        },
        {
            id: 4,
            checked: false,
            checkboxText: 'Красные скалы',
            checkboxValue: 'cliff',
        }
    ],
    describeEmotions: {
        value: ''
    }
}

function buttonSendReducer(state = initialState, action) {
    if (action.type === checkboxChangeActionType) {
        state.checkbox.map((item) => {

            if (item.id == action.id) {
                item.checked = !item.checked
            }
        })
    }

    if (action.type === inputEmailActionType) {
        state.inputEmail.value = action.newText;
    }

    if (action.type === inputNameActionType) {
        state.inputFullname.map((item) => {
            if (item.labelText == 'Имя') {
                item.value = action.newText;
            }
        })
    } else if (action.type === inputSurnameActionType) {
        state.inputFullname.map((item) => {
            if (item.labelText == 'Фамилия') {
                item.value = action.newText
    }
        })
    } else if (action.type === inputPatronymActionType) {
        state.inputFullname.map((item) => {
            if (item.labelText == 'Отчество') {
            item.value = action.newText
            }
        })
    }

    if (action.type === inputPhoneActionType) {
        state.inputPhone.value = action.newText;
    }

    if (action.type === radioChangeActionType) {
        state.radiobutton.map((item) => {
            item.chosen = false;
            if (item.id == action.id) {
                item.chosen = true;
            }
        })
    }

    if (action.type === textareaActionType) {
        state.describeEmotions.value = action.newText
    }

    if (action.type === buttonSendActionType) {
        state.checkbox.map((item) => {
            item.checked = false
        });

        state.inputFullname.map((item) => {
            item.value = ''
        })

        state.radiobutton.map((item) => {
            if (item.id == 1) {
                item.chosen = true
            } else {
                item.chosen = false
            }
        })

        state.inputPhone.value = '';
        state.inputEmail.value = '';
        state.describeEmotions.value = '';
    }
    return state
}

export default buttonSendReducer;