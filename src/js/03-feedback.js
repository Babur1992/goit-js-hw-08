// імпортуємо функцію throttle з lodash
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

// функція для збереження значень полів форми в локальне сховище
const saveFormState = () => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
};

// функція для заповнення полів форми з локального сховища
const loadFormState = () => {
  const formState = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (formState) {
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  }
};

// викликаємо функцію при завантаженні сторінки
loadFormState();

// викликаємо функцію збереження форми в локальне сховище з допомогою throttle
form.addEventListener('input', throttle(saveFormState, 500));

// викликаємо функцію очищення форми і локального сховища при сабміті форми
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formState);
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
});
