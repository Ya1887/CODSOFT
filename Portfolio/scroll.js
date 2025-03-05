// Show Scroll Up Button
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll')
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// Active Link on Scroll
function scrollActive() {
    const sections = document.querySelectorAll('section[id]')
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__link[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__link[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive) 