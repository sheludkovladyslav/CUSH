(() => {
  const openBtn = document.querySelector('[data-teacher-open]');
  const closeBtn = document.querySelector('[data-teacher-close]');
  const menu = document.querySelector('[data-teacher-menu]');
  const sendBtn = document.querySelector('[data-teacher-button]');
  const teacherHide = document.querySelector('[data-teacher-hide]');
  const teacherSuccess = document.querySelector('[data-success]');
  const backdrop = document.querySelector('[data-backdrop-teacher]');

  openBtn.addEventListener('click', () => {
    menu.classList.remove('hidden');
    document.body.classList.toggle('no-scroll');
    backdrop.classList.toggle('backdrop');
  });

  closeBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    document.body.classList.remove('no-scroll');
    backdrop.classList.remove('backdrop');
  });

  sendBtn.addEventListener('click', () => {
    teacherHide.classList.toggle('hidden');
    teacherSuccess.classList.remove('hidden');
    backdrop.classList.remove('backdrop');
  });
})();
