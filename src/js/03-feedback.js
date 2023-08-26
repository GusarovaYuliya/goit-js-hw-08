// import

// const feedbackForm = document.querySelector(".feedback-form");
// const emailInput  = document.querySelector(".email");
// const messageInput  = document.querySelector(".message");

// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message
// const saveToLocalStorage =

// у яких зберігай поточні значення полів форми
// emailInput.addEventListener('input', saveToLocalStorage);
// messageInput.addEventListener('input', saveToLocalStorage);

// Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// const savedData  = localStorage.getItem("feedback-form-state");
// if(savedData) {
//     const { email, message } = JSON.parse(savedData);

    
// }

// Під час сабміту форми очищуй сховище і поля форми,

// feedbackForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     localStorage.removeItem("feedback-form-state");
//     emailInput.value = "";
//     messageInput.value = "";
// })


//  а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.

// console.log(emailInput.value);
// console.log(messageInput.value)