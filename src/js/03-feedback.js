import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextArea = feedbackForm.querySelector('textarea[name="message"]');
const feedbackFormStateKey = 'feedback-form-state';

const saveFormStateToStorage = throttle(() => {
  const formState = {
    email: emailInput.value,
    message: messageTextArea.value,
  };
  localStorage.setItem(feedbackFormStateKey, JSON.stringify(formState));
}, 500);

const loadFormStateFromStorage = () => {
  const formStateJson = localStorage.getItem(feedbackFormStateKey);
  if (formStateJson) {
    const formState = JSON.parse(formStateJson);
    emailInput.value = formState.email;
    messageTextArea.value = formState.message;
  } else {
    emailInput.value = '';
    messageTextArea.value = '';
  }
};

const clearFormStateAndStorage = () => {
  localStorage.removeItem(feedbackFormStateKey);
  emailInput.value = '';
  messageTextArea.value = '';
  console.log('Form submitted with state:');
  console.log({
    email: emailInput.value,
    message: messageTextArea.value,
  });
};

feedbackForm.addEventListener('input', event => {
  if (event.target === emailInput || event.target === messageTextArea) {
    saveFormStateToStorage();
  }
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  clearFormStateAndStorage();
});

loadFormStateFromStorage();
