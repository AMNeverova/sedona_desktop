var getValue = function () {
    var elems = document.querySelectorAll('.input-radio');
    for (var i = 0; i < elems.length; i++) {
        if (elems[i].checked) {
            var value = elems[i].value;
        }
    }

    return value
}

var getSights = function () {
    var sights = [];
    var checkboxes = document.querySelectorAll('.input-checkbox');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            sights.push(checkboxes[i].value)
        }
    }
    return sights
}

var buttonReview = document.querySelector('.button-review');

buttonReview.addEventListener('click', function () {

    var name = document.getElementById('input-name').value;
    var surname = document.getElementById('input-surname').value;
    var patronym = document.getElementById('patronym').value;

    var phoneNumber = document.getElementById('phone-number').value;
    var email = document.getElementById('e-mail').value;
    var emotions = document.querySelector('.text-describe').value;

    var impression = getValue();
    var sights = getSights();

    var body = 'name=' + name + '&surname=' + surname + '&patronym=' + patronym +
        '&phoneNumber=' + phoneNumber + '&email=' + email + '&emotions=' +
        emotions + '&impression=' + impression + '&sights' + sights;

    var xhr = new XMLHttpRequest();

    xhr.open('POST', '#');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.send(body);

    xhr.onload = function () {
        if (xhr.status != 200) {
            alert(`Error' + xhr.status + ':'+ xhr.statusText`);
        } else {
            alert(`Done`);
        }
    };

    xhr.onerror = function () {
        alert("Request failed");
    };

})
