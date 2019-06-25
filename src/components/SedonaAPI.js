import axios from 'axios';

class SedonaAPI {
    submitForm(state) {
        let radiobuttonValue = state.chooseImpressionRadiobutton.map((item) => {
            return (
                item.chosen ? item.value : null
            )
        });

        let checkboxValues = state.chooseSightsCheckbox.map((item) => {
            return (
                item.checked ? item.checkboxValue : null
            )
        });

        let fullnameValues = state.inputFullname.map((item) => {
            return (
                item.value ? item.value : null
            )
        });

        let filledForm = {
            "impression": radiobuttonValue,
            "visitedSights": checkboxValues,
            "fullname": fullnameValues,
            "phoneNumber": state.inputPhone.value,
            "email": state.inputEmail.value,
            "emotions": state.describeEmotions.value
        }
        require('es6-promise').polyfill();
        if (filledForm.fullname[0] && filledForm.fullname[1] && filledForm.phoneNumber && filledForm.email) {
            axios({
                    method: 'post',
                    url: '',
                    data: filledForm
                })
                .then((res) => {
                    console.log(res)
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
}
export default SedonaAPI
