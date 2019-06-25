import data from '../locales/data.json'

export const textContentEnglishAT = 'TEXT-CONTENT-CHANGE-TO-ENGLISH';

let initialState = data.dataRus;

let textContentReducer = (state = initialState, action) => {
    if (action.type === textContentEnglishAT) {
        if (state == data.dataRus) {
            state = data.dataEng
        } else {
            state = data.dataRus
        }
    }
    return state
}
export default textContentReducer
