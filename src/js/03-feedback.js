import { throttle } from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const KEY_FORM_INPUT = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInputData, 500));
console.dir(form);
console.dir(form.elements.email.value);

showData();

function onInputData(evt) {
    const {
        elements: { email, message },
    } = form;
    
    const dataForm = { email: email.value, message: message.value };
    localStorage.setItem(KEY_FORM_INPUT, JSON.stringify(dataForm));
    // console.log(email.value);
    // console.log(message.value);
}

function showData() {
    let dataForm = JSON.parse(localStorage.getItem(KEY_FORM_INPUT));
    if (dataForm) {
        const {
            elements: { email, message },
        } = form;
        email.value = dataForm.email; 
        message.value = dataForm.message;
    }
    console.log(dataForm);
} 

function onFormSubmit(evt) {
    evt.preventDefault();
    const {
        elements: { email, message },
    } = evt.currentTarget;

    if (email.value.trim() === "" || message.value.trim() === "") {
        alert("Заповніть всі поля")
        return;
    }
    const outputData = { email: email.value.trim(), message: message.value.trim() };
    console.log(outputData);
    // console.log(email.value);
    // console.log(message.value);
    evt.currentTarget.reset()
    localStorage.removeItem(KEY_FORM_INPUT)
}
