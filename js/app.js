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

function addActiveClass(section) {

    const id = section.getAttribute('id');
  
    document.querySelector(`#${id}`).classList.add('your-active-class');
  }

  function removeActiveClass(section) {
    const id = section.getAttribute('id');
    document.querySelector(`#${id}`).classList.remove('your-active-class');
  }

  function makeActiveSection() {
    sections.forEach((section) => {
      
      let elementOffset = section.getBoundingClientRect();
      if (elementOffset.top <= 150 && elementOffset.bottom >= 150) {
        addActiveClass(section);
      } else {
        removeActiveClass(section);
      }
    });
  }
 
  document.addEventListener('scroll', makeActiveSection);
  //Scroll to section when Navbar link is clicked

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});