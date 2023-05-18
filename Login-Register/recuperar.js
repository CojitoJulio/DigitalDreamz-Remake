const form = document.getElementById('form');
const email = document.getElementById('email');


function checkearInputs() {

    const emailValue = email.value.trim();

    if(emailValue === '') {
        SetError(email);
    } else if(!isEmail(emailValue)) {
        SetError(email);
    } else {
        SetSuccess(email);
    }

}

function SetError(input) {
    const field = input;
    field.className = 'error';
}

function SetSuccess(input) {
    const field = input;
    field.className = 'success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}