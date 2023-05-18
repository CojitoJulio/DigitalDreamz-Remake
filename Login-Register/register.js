const form = document.getElementById('form');
const email = document.getElementById('email');
const user = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const terms = document.getElementById('checkbox');
  
function checkearInputs() {

    const userValue = user.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const termsValue = terms.checked;

    if(emailValue === '') {
        SetError(email);
    } else if(!isEmail(emailValue)) {
        SetError(email);
    } else {
        SetSuccess(email);
    }

    if(userValue === '') {
        SetError(user);
    } else {
        SetSuccess(user);
    }

    if(passwordValue  === '') {
        SetError(password);
    } else {
        SetSuccess(password);
    }

    if(password2Value === '') {
        SetError(password2);
    } else if(passwordValue !== password2Value){
        SetError(password2)
    } else {
        SetSuccess(password2);
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

