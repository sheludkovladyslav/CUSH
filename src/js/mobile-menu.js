(() => {
  const openBtn = document.querySelector('[data-open_btn]');
  const menu = document.querySelector('[data-menu]');
  openBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    menu.classList.toggle('menu-open');
    document.body.classList.toggle('no-scroll');
  }

  function closeOnLink(event) {
    if (event.target.classList.contains('links__link')) {
      menu.classList.remove('menu-open');
      document.body.classList.remove('no-scroll');
    }
  }

  menu.addEventListener('click', closeOnLink);
})();
