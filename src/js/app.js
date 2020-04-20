import API from './Api';
import Messenger from './Messenger';

const api = new API('https://webchat-hw8.herokuapp.com/users');

const nickNamePopup = document.querySelector('.nickname-popup');
const mickNameSubmitBtn = document.querySelector('#nickname-submit');
const errorPopup = document.querySelector('#error');
const errorOkBtn = document.querySelector('#error-ok-btn');
let userName = '';

function conectToChat() {
  const messenger = new Messenger(userName);
  messenger.init();
}

mickNameSubmitBtn.addEventListener('click', async () => {
  const nickNameField = document.querySelector('#nickname-field');
  userName = nickNameField.value;

  if (userName) {
    const response = await api.load();
    const users = await response.json();

    if (users.findIndex((item) => item.name === userName) === -1) {
      await api.add({ name: userName });
      nickNamePopup.classList.add('hidden');
      nickNameField.value = '';
      conectToChat();
      return;
    }
    errorPopup.classList.remove('hidden');
  }
});

errorOkBtn.addEventListener('click', () => {
  errorPopup.classList.add('hidden');
});
