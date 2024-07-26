(() => {
  const openBtn = document.querySelector('[data-login-open]');
  const closeBtn = document.querySelector('[data-login-close]');
  const menu = document.querySelector('[data-login-menu]');
  const loginButton = document.querySelector('[data-login-button]');

  openBtn.addEventListener('click', () => {
    menu.classList.remove('hidden');
    document.body.classList.toggle('no-scroll');
  });

  closeBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    document.body.classList.remove('no-scroll');
  });

  loginButton.addEventListener('click', () => {
    const inputName = document.querySelector('[data-login-name]').value;
    const inputEmail = document.querySelector('[data-login-email]').value;

    document.body.classList.remove('no-scroll');
    menu.classList.toggle('hidden');
    openBtn.innerHTML = inputName;
  });
})();
