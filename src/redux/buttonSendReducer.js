import data from './data_rus.json'

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
            labelText: data.impression.chooseImpression1
        },
        {
            id: 2,
            chosen: false,
            value: 'neg',
            labelText: data.impression.chooseImpression2
        },
        {
            id: 3,
            chosen: false,
            value: 'diff',
            labelText: data.impression.chooseImpression3
        }
    ],
    inputFullname: [{
            id: 1,
            className: 'input-text input-name',
            placeholder: data.present.inputName.placeholder,
            value: '',
            required: true,
            spanClassName: 'required',
            labelText: data.present.inputName.labelText,
            filled: true
        },
        {
            id: 2,
            className: 'input-text',
            placeholder: data.present.inputSurname.placeholder,
            value: '',
            required: true,
            spanClassName: 'required',
            labelText: data.present.inputSurname.labelText,
            filled: true
        },
        {
            id: 3,
            className: 'input-text',
            placeholder: data.present.inputPatronym.placeholder,
            value: '',
            required: false,
            spanClassName: '',
            labelText: data.present.inputPatronym.labelText,
            filled: true
        }
    ],
    inputPhone: {
        value: '',
        placeholder: data.inputPhone.placeholder,
        labelText: data.inputPhone.labelText,
        textForError: data.inputPhone.textForError,
        filled: true
    },
    inputEmail: {
        value: '',
        placeholder: data.inputEmail.placeholder,
        labelText: data.inputEmail.labelText,
        filled: true
    },
    chooseSightsCheckbox: [{
            id: 1,
            checked: true,
            checkboxText: data.checkboxes.labelText1,
            checkboxValue: 'bridge',
        },
        {
            id: 2,
            checked: true,
            checkboxText: data.checkboxes.labelText2,
            checkboxValue: 'mountain',
        },
        {
            id: 3,
            checked: false,
            checkboxText: data.checkboxes.labelText3,
            checkboxValue: 'park',
        },
        {
            id: 4,
            checked: false,
            checkboxText: data.checkboxes.labelText4,
            checkboxValue: 'cliff',
        }
    ],
    describeEmotions: {
        value: '',
        placeholder: data.describeEmotions.placeholder
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
                item.filled = !item.filled
            }
        })
    }

    if (action.type === filledInputPhoneType) {
        state.inputPhone.filled = !state.inputPhone.filled
    }

    if (action.type === filledInputMailType) {
        state.inputEmail.filled = !state.inputEmail.filled
    }

      return state
}

export default buttonSendReducer;