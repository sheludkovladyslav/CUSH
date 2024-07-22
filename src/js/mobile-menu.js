(() => {
  const openBtn = document.querySelector('[data-open_btn]');
  const menu = document.querySelector('[data-menu]');
  openBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    menu.classList.toggle('menu-open');
    document.body.classList.toggle('no-scroll');
  }
})();
