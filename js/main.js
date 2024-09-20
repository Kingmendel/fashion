const navOpen = document.querySelector('.ri-menu-line')
const navClose = document.querySelector('.ri-close-large-line')
const nav = document.querySelector('nav ul')

navOpen.addEventListener('click', function(){
    nav.style.top = '40%'
    navOpen.style.display = 'none'
    navClose.style.display = 'block'
})


navClose.addEventListener('click', function(){
    nav.style.top = '-40%'
    navOpen.style.display = 'block'
    navClose.style.display = 'none'
})
