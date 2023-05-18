const form = document.getElementById('form');
const user = document.getElementById('username');
const password = document.getElementById('password');

function checkearInputs() {

    const userValue = user.value.trim();
    const passwordValue = password.value.trim();

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

}

function SetError(input) {
    const field = input;
    field.className = 'error';
}

function SetSuccess(input) {
    const field = input;
    field.className = 'success';
}
