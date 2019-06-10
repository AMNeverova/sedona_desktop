import { buttonSendActionType, checkboxChangeActionType, inputEmailActionType, 
        inputNameActionType, inputSurnameActionType, inputPatronymActionType, 
        inputPhoneActionType, radioChangeActionType, textareaActionType } from "./buttonSendReducer";

import mobileMenuClickActionType from './menuReducer';


export const buttonSendActionCreator = (state) => {
    return {
        type: buttonSendActionType,
        state: state
    }
}

export const CheckboxChangeActionCreator = (id) => {
    return {
        type: checkboxChangeActionType,
        id: id
    }
}

export const inputEmailActionCreator = (newText) => {
    return {
        type: inputEmailActionType,
        newText: newText
    }
}

export const inputNameActionCreator = (newText) => {
    return {
        type: inputNameActionType,
        newText: newText
    }
}

export const inputSurnameActionCreator = (newText) => {
    return{
    type: inputSurnameActionType,
    newText: newText
    }
}

export const inputPatronymActionCreator = (newText) => {
    return {
        type: inputPatronymActionType,
        newText: newText
    }
}

export const inputPhoneActionCreator = (newText) => {
    return {
        type: inputPhoneActionType,
        newText: newText
    }
}

export const radioChangeActionCreator= (id) => {
    return {
        type: radioChangeActionType,
        id: id
    }
}

export const textareaActionCreator = (newText) => {
    return {
        type: textareaActionType,
        newText: newText
    }
}

export function mobileMenuActionCtreator() {
    return {
        type: mobileMenuClickActionType
    }
}

