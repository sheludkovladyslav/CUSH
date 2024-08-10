document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const courseCards = document.querySelectorAll('.courses__card');

  searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.toLowerCase();

    courseCards.forEach(card => {
      const courseTitle = card
        .querySelector('.cours__title')
        .textContent.toLowerCase();
      if (courseTitle.includes(searchValue)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const courseCards = document.querySelectorAll('.courses__card');
  const findCourseForm = document.getElementById('findCourseForm');
  const courseSelection = document.getElementById('course-selection');
  const coursesSection = document.querySelector('.courses');

  // Function to filter courses based on the selected course
  const filterCourses = selectedCourse => {
    if (selectedCourse.trim() === '') {
      courseCards.forEach(card => {
        card.style.display = 'block'; // Show all courses
      });
    } else {
      courseCards.forEach(card => {
        const courseTitle = card
          .querySelector('.cours__title')
          .textContent.toLowerCase();
        if (courseTitle.includes(selectedCourse)) {
          card.style.display = 'block'; // Show course
        } else {
          card.style.display = 'none'; // Hide course
        }
      });
    }
  };

  // Find course form submission
  findCourseForm.addEventListener('submit', event => {
    event.preventDefault();
    const selectedCourse =
      courseSelection.options[courseSelection.selectedIndex].text.toLowerCase(); // Get selected course name
    console.log('Selected Course:', selectedCourse); // Debugging log

    filterCourses(selectedCourse); // Apply the filter based on selected course

    // Scroll to the courses section
    coursesSection.scrollIntoView({ behavior: 'smooth' });
  });

  // Make sure only the "Find Course" button triggers the script
  const buttons = document.querySelectorAll('.hero__button');
  buttons.forEach(button => {
    if (button.textContent.trim() === 'Знайти курс') {
      button.addEventListener('click', () => {
        const selectedCourse =
          courseSelection.options[
            courseSelection.selectedIndex
          ].text.toLowerCase(); // Get selected course name
        console.log('Selected Course:', selectedCourse); // Debugging log

        filterCourses(selectedCourse); // Apply the filter based on selected course

        // Scroll to the courses section
        coursesSection.scrollIntoView({ behavior: 'smooth' });
      });
    }
  });
});
