const navigation = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

//Navigation Menu

const buildMainNav = () => {
  for (const section of sections) {
      const ul = document.querySelector('ul#navbar__list');
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = section.getAttribute('data-nav');
      a.setAttribute('class', 'menu__link');

      a.href = `#${section.id}`;
      li.appendChild(a);
      ul.appendChild(li);
  }

};

document.addEventListener('DOMContentLoaded', () => {
  buildMainNav();
});


//Main function

