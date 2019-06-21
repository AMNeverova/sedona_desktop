import data from '../locales/data.json'

export const checkboxChangeActionType = 'CHECKBOX-CHANGE';
export const inputEmailActionType = 'INPUT-EMAIL-CHANGE';
export const inputNameActionType = 'INPUT-NAME-CHANGE';
export const inputSurnameActionType = 'INPUT-SURNAME-CHANGE';
export const inputPatronymActionType = 'INPUT-PATRONYM-CHANGE';
export const inputPhoneActionType = 'INPUT-PHONE-CHANGE';
export const radioChangeActionType = 'RADIO-CHANGE';
export const textareaActionType = 'TEXTAREA-CHANGING-VALUE';
export const filledInputActionType = 'FILLED-FULLNAME';
export const filledInputPhoneType = 'FILLED-PHONE';
export const filledInputMailType = 'FILLED-MAIL'


let initialState = {
    chooseImpressionRadiobutton: [{
            id: 1,
            chosen: true,
            value: 'pos',
        },
        {
            id: 2,
            chosen: false,
            value: 'neg',
        },
        {
            id: 3,
            chosen: false,
            value: 'diff',
        }
    ],
    inputFullname: [{
            id: 1,
            className: 'input-text input-name',
            value: '',
            required: true,
            spanClassName: 'required',
            filled: true
        },
        {
            id: 2,
            className: 'input-text',
            value: '',
            required: true,
            spanClassName: 'required',
            filled: true
        },
        {
            id: 3,
            className: 'input-text',
            value: '',
            required: false,
            spanClassName: '',
            filled: true
        }
    ],
    inputPhone: {
        value: '',
        filled: true,
        className: "input-phone"
    },
    inputEmail: {
        value: '',
        filled: true,
        className: "input-email"
    },
    chooseSightsCheckbox: [{
            id: 1,
            checked: true,
            checkboxValue: 'bridge',
        },
        {
            id: 2,
            checked: true,
            checkboxValue: 'mountain',
        },
        {
            id: 3,
            checked: false,
            checkboxValue: 'park',
        },
        {
            id: 4,
            checked: false,
            checkboxValue: 'cliff',
        }
    ],
    describeEmotions: {
        value: '',
    }
}

function buttonSendReducer(state = initialState, action) {
    if (action.type === checkboxChangeActionType) {
        state.chooseSightsCheckbox.map((item) => {

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
            if (item.id == 1) {
                item.value = action.newText;
            }
        })
    } else if (action.type === inputSurnameActionType) {
        state.inputFullname.map((item) => {
            if (item.id == 2) {
                item.value = action.newText
    }
        })
    } else if (action.type === inputPatronymActionType) {
        state.inputFullname.map((item) => {
            if (item.id == 3) {
            item.value = action.newText
            }
        })
    }

    if (action.type === inputPhoneActionType) {
        state.inputPhone.value = action.newText;
    }

    if (action.type === radioChangeActionType) {
        state.chooseImpressionRadiobutton.map((item) => {
            item.chosen = false;
            if (item.id == action.id) {
                item.chosen = true;
            }
        })
    }

    if (action.type === textareaActionType) {
        state.describeEmotions.value = action.newText
    }

    if (action.type === filledInputActionType) {
        state.inputFullname.map((item) => {
            if (item.id == action.id) {
                item.filled = !item.filled;
            }

            if (!item.filled && item.className.indexOf('unfilled') == -1) {
                item.className = item.className + ' input-unfilled'
            }
            if (item.filled && item.className.indexOf('unfilled') !== -1) {
                item.className = item.className.slice(0, -15)
            }
        })
    }

    if (action.type === filledInputPhoneType) {
        state.inputPhone.filled = !state.inputPhone.filled

        if (!state.inputPhone.filled && state.inputPhone.className.indexOf('unfilled') == -1) {
            state.inputPhone.className = state.inputPhone.className + ' input-unfilled'
        }
        if (state.inputPhone.filled && state.inputPhone.className.indexOf('unfilled') !== -1) {
            state.inputPhone.className = state.inputPhone.className.slice(0, -15)
        }

    }

    if (action.type === filledInputMailType) {
        state.inputEmail.filled = !state.inputEmail.filled
    }

      return state
}

export default buttonSendReducer;