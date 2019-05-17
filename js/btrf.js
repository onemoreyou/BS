let OFFER = 5;
let FLOW = 125;

var form1 = document.querySelector('#form-1');

form1.addEventListener("submit", function (e) {
    e.preventDefault();
    pushLead(document.querySelector('#name-1').value,
        document.querySelector('#email-1').value,
        document.querySelector('#phone-1').value);
});

var form2 = document.querySelector('#form-2');

form2.addEventListener("submit", function (e) {
    e.preventDefault();
    pushLead('',
        '',
        document.querySelector('#phone-2').value);
});

var form3 = document.querySelector('#form-3');

form3.addEventListener("submit", function (e) {
    e.preventDefault();
    pushLead(document.querySelector('#name-3').value,
        document.querySelector('#email-3').value,
        document.querySelector('#phone-3').value);
});

var form4 = document.querySelector('#form-4');

form4.addEventListener("submit", function (e) {
    e.preventDefault();
    pushLead(document.querySelector('#name-4').value,
        document.querySelector('#email-4').value,
        document.querySelector('#phone-4').value);
});

function pushLead(name, email, phone) {

    let data = {
        flow: FLOW,
        offer: OFFER,
        ip: window['userIP'],
        name: name,
        email: email,
        phone: phone
    }

    var xhr = new XMLHttpRequest();
    var url = "btrf.php";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let getUrl = window.location;
            let baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
            window.location.href = `${baseUrl}/success.html`;
        }
    };

    xhr.send(JSON.stringify(data));
}