import { throttle } from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const KEY_FORM_INPUT = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInputData,500));
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
  
    const emailTrim = email.value.trim();
    const messageTrim = message.value.trim();
    if (emailTrim === "" || messageTrim === "") {
        alert("Заповніть всі поля")
        return;
    }
    const outputData = { email: emailTrim, message: messageTrim };
    console.log(outputData);
    // console.log(email.value);
    // console.log(message.value);
    evt.currentTarget.reset()
    localStorage.removeItem(KEY_FORM_INPUT)
}
  
// const saveFormState = () => {
//   const emailInput = document.querySelector('input[name="email"]');
//   const messageTextarea = document.querySelector('textarea[name="message"]');
  
//   const formState = {
//     email: emailInput.value,
//     message: messageTextarea.value,
//   };
  
//   localStorage.setItem('feedback-form-state', JSON.stringify(formState));
// };
// const fillFormFields = () => {
//   const savedState = localStorage.getItem('feedback-form-state');
  
//   if (savedState) {
//     const { email, message } = JSON.parse(savedState);
//     const emailInput = document.querySelector('input[name="email"]');
//     const messageTextarea = document.querySelector('textarea[name="message"]');
    
//     emailInput.value = email;
//     messageTextarea.value = message;
//   }
// };
// const clearStorageAndFields = () => {
//   localStorage.removeItem('feedback-form-state');
//   const emailInput = document.querySelector('input[name="email"]');
//   const messageTextarea = document.querySelector('textarea[name="message"]');
//   emailInput.value = '';
//   messageTextarea.value = '';
// };
// const form = document.querySelector('.feedback-form');
// form.addEventListener('input', throttle(saveFormState, 500));
// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   clearStorageAndFields();
  
//   const emailInput = document.querySelector('input[name="email"]');
//   const messageTextarea = document.querySelector('textarea[name="message"]');
  
//   const formData = {
//     email: emailInput.value,
//     message: messageTextarea.value,
//   };
  
//     console.log(formData);
// });
    