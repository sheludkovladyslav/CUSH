const july = [
  [
    { numberOfDay: 1, dayName: 'Понеділок' },
    { numberOfDay: 2, dayName: 'Понеділок' },
    { numberOfDay: 3, dayName: 'Понеділок' },
    { numberOfDay: 4, dayName: 'Понеділок' },
    { numberOfDay: 5, dayName: 'Понеділок' },
  ],
  [
    { numberOfDay: 1, dayName: 'Вівторок' },
    { numberOfDay: 2, dayName: 'Вівторок' },
    { numberOfDay: 3, dayName: 'Вівторок' },
    { numberOfDay: 4, dayName: 'Вівторок' },
    { numberOfDay: 5, dayName: 'Вівторок' },
  ],
  [
    { numberOfDay: 1, dayName: 'Середа' },
    { numberOfDay: 2, dayName: 'Середа' },
    { numberOfDay: 3, dayName: 'Середа' },
    { numberOfDay: 4, dayName: 'Середа' },
    { numberOfDay: 5, dayName: 'Середа' },
  ],
  [
    { numberOfDay: 1, dayName: 'Четвер' },
    { numberOfDay: 2, dayName: 'Четвер' },
    { numberOfDay: 3, dayName: 'Четвер' },
    { numberOfDay: 4, dayName: 'Четвер' },
    { numberOfDay: 5, dayName: 'Четвер' },
  ],
  [
    { numberOfDay: 1, dayName: "П'ятниця" },
    { numberOfDay: 2, dayName: "П'ятниця" },
    { numberOfDay: 3, dayName: "П'ятниця" },
    { numberOfDay: 4, dayName: "П'ятниця" },
    { numberOfDay: 5, dayName: "П'ятниця" },
  ],
  [
    { numberOfDay: 1, dayName: 'Субота' },
    { numberOfDay: 2, dayName: 'Субота' },
    { numberOfDay: 3, dayName: 'Субота' },
    { numberOfDay: 4, dayName: 'Субота' },
    { numberOfDay: 5, dayName: 'Субота' },
  ],
  [
    { numberOfDay: 1, dayName: 'Неділя' },
    { numberOfDay: 2, dayName: 'Неділя' },
    { numberOfDay: 3, dayName: 'Неділя' },
    { numberOfDay: 4, dayName: 'Неділя' },
    { numberOfDay: 5, dayName: 'Неділя' },
  ],
];

const calendarCards = document.querySelector('.table__cards');

calendarCards.innerHTML = july
  .map(
    dayArray =>
      `<div class="table__day">
         ${dayArray
           .map(
             day =>
               `<div class="table__card">
                  <p class="table__numberofday">${day.numberOfDay}</p>
                  <p class="table__nameofday ${
                    day.numberOfDay === 1 ? 'table__nameofday--first' : ''
                  }">
                    ${day.dayName}
                  </p>
                  <p class="table__nameofevent">${
                    day.event ? day.event : ''
                  }</p>
                </div>`
           )
           .join('')}
       </div>`
  )
  .join('');
