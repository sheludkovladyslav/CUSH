document.addEventListener('DOMContentLoaded', () => {
  let availableKeyWords = [
    { name: 'Про Нас', id: 'about-us' },
    { name: 'Вчителі', id: 'teachers' },
    { name: 'Найпопулярніші Курси', id: 'popular-courses' },
    { name: 'Контакти', id: 'contacts' },
    { name: 'Співпраця', id: 'coop' },
    { name: 'Курси', id: 'courses' },
  ];

  const resultBox = document.querySelector('.result');
  const inputBox = document.getElementById('searchBoxInput');
  const searchButton = document.querySelector('.search-box__find');

  let selectedSectionId = null;

  if (inputBox && resultBox && searchButton) {
    inputBox.addEventListener('keyup', () => {
      let result = [];
      let input = inputBox.value;

      if (input.length) {
        result = availableKeyWords.filter(keyword => {
          return keyword.name.toLowerCase().includes(input.toLowerCase());
        });
      }

      display(result);

      if (!result.length) {
        resultBox.innerHTML = '';
      }
    });

    searchButton.addEventListener('click', () => {
      if (selectedSectionId) {
        const section = document.getElementById(selectedSectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
          resultBox.innerHTML = '';
          inputBox.value = '';
        }
      }
    });

    function display(result) {
      const content = result.map(item => {
        return `<li data-id="${item.id}" class="${
          selectedSectionId === item.id ? 'selected' : ''
        }">${item.name}</li>`;
      });

      resultBox.innerHTML = '<ul>' + content.join(' ') + '</ul>';
    }

    resultBox.addEventListener('click', event => {
      const listItem = event.target.closest('li');
      if (listItem) {
        selectedSectionId = listItem.getAttribute('data-id');
        inputBox.value = listItem.textContent;
      }
    });
  } else {
    console.error(
      'Не вдалося знайти один або кілька елементів: перевірте селектори.'
    );
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.querySelector('.log-in__link--find');
  const searchBox = document.querySelector('.find__search-box');

  if (searchButton && searchBox) {
    searchButton.addEventListener('click', () => {
      searchBox.classList.toggle('menu-visible');
    });
  } else {
    console.error(
      'Не вдалося знайти один або кілька елементів: перевірте селектори.'
    );
  }
});
