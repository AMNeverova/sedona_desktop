import axios from 'axios';

class Service {
    axios(data) {
        axios({
            method: 'post',
            url: '',
            data: data
        })
        .then((res) => {
            console.log(res)
        })

        .catch((error) => {
            console.log(error);
        });
    }
}

export default Service