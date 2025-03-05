// Menu Show/Hide
const navMenu = document.querySelector('.nav__menu'),
      navToggle = document.querySelector('.nav__toggle'),
      navClose = document.querySelector('.nav__close')

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// Remove Menu Mobile
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Change Header Background
function scrollHeader() {
    const header = document.querySelector('.header')
    if(this.scrollY >= 50) header.classList.add('scroll-header')
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Modal functionality
const modal = document.getElementById('codeModal');
const closeModal = document.querySelector('.close-modal');
const codeContent = document.getElementById('codeContent');

// Project code content (you'll need to replace these with your actual code)
const projectCodes = {
    'project1-html': `<!-- Your Project 1 HTML code here -->
<html>
    <!-- Replace this with your actual HTML code -->
</html>`,
    'project1-css': `/* Your Project 1 CSS code here */
.your-css {
    /* Replace this with your actual CSS code */
}`,
    'project1-js': `// Your Project 1 JavaScript code here
function yourFunction() {
    // Replace this with your actual JavaScript code
}`,
    'project2-html': `<!-- Your Project 2 HTML code here -->
<html>
    <!-- Replace this with your actual HTML code -->
</html>`,
    'project2-css': `/* Your Project 2 CSS code here */
.your-css {
    /* Replace this with your actual CSS code */
}`,
    'project2-js': `// Your Project 2 JavaScript code here
function yourFunction() {
    // Replace this with your actual JavaScript code
}`
};

function showCode(codeId) {
    codeContent.textContent = projectCodes[codeId];
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

closeModal.onclick = function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
} 