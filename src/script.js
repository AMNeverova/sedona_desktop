window.onload = function () {



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

        var name = document.querySelector('.input-name').value;
        var surname = document.querySelector('.input-surname').value;
        var patronym = document.querySelector('.patronym').value;

        var phoneNumber = document.querySelector('.input-phone').value;
        var email = document.querySelector('.input-email').value;
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

    var menuIcon = document.querySelector('.icon-menu');

    menuIcon.addEventListener('click', function () {
        var items = document.querySelectorAll('.item:not(.item-3)');
        for (var i = 0; i < items.length; i++) {
            items[i].classList.toggle('visible');
            console.log(items[i].classList)
        }
    })
};