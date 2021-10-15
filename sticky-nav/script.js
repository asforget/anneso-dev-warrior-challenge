const links = document.querySelectorAll('.link')
const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

links.forEach((link) => {
    link.addEventListener('click',() => {
        removeActiveClasses()
        link.classList.add('current')
    })
})

function removeActiveClasses(){
    links.forEach((link) => {
        link.classList.remove('current')
    })
}
