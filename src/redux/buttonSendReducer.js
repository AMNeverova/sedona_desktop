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
            mainDivClassName: 'text',
            inputType: 'text',
            className: 'input-text input-name',
            value: '',
            required: true,
            spanClassName: 'required',
            filled: true
        },
        {
            id: 2,
            mainDivClassName: 'text',
            inputType: 'text',
            className: 'input-text',
            value: '',
            required: true,
            spanClassName: 'required',
            filled: true
        },
        {
            id: 3,
            className: 'input-text',
            mainDivClassName: 'text',
            inputType: 'text',
            value: '',
            required: false,
            spanClassName: '',
            filled: true
        }
    ],
    inputPhone: {
        id: 4,
        mainDivClassName: 'phone',
        inputType: 'tel',
        spanClassName: 'required',
        logoClassName: 'phone-logo',
        value: '',
        filled: true,
        className: "input-phone"
    },
    inputEmail: {
        id: 5,
        mainDivClassName: 'mail',
        inputType: 'email',
        spanClassName: 'required',
        logoClassName: 'mail-logo',
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
        state.inputEmail.filled = !state.inputEmail.filled;

        if (!state.inputEmail.filled && state.inputEmail.className.indexOf('unfilled') == -1) {
            state.inputEmail.className = state.inputEmail.className + ' input-unfilled'
        }
        if (state.inputEmail.filled && state.inputEmail.className.indexOf('unfilled') !== -1) {
            state.inputEmail.className = state.inputEmail.className.slice(0, -15)
        }
    }
    return state
}
export default buttonSendReducer;
