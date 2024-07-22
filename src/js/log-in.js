(() => {
  const openBtn = document.querySelector('[data-login-open]');
  const closeBtn = document.querySelector('[data-login-close]');
  const menu = document.querySelector('[data-login-menu]');

  openBtn.addEventListener('click', () => {
    menu.classList.remove('hidden');
    document.body.classList.toggle('no-scroll');
  });

  closeBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    document.body.classList.remove('no-scroll');
  });
})();
