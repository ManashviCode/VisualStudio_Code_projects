const form = document.querySelector('#create-account-form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');

form.addEventListener('submit',(event)=>{
event.preventDefault();

validateForm();

});

function validateForm() {
    //USERNAME
if (usernameInput.value.trim() == '') {
      setError(usernameInput, 'Name cannot be empty');
}else if(usernameInput.value.trim().length < 5 || usernameInput.value.trim().length >15){
    setError(usernameInput, 'Name must be min 5 and max 15 characters');
}
    //Email
    //Password
    //Confirm Password

}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element){
    const parent= element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}

