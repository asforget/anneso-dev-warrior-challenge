// const boxes = document.querySelectorAll('.box, .img') 

// window.addEventListener('scroll', checkBoxes)

// checkBoxes()

// function checkBoxes() {
//     const triggerBottom = window.innerHeight / 5 * 4

//     boxes.forEach(box => {
//         const boxTop = box.getBoundingClientRect().top 

//         if(boxTop < triggerBottom) {
//             box.classList.add('show')
//         } else {
//             box.classList.remove('show')
//         }
//     })
// }

const boxes = document.querySelectorAll('.box, .img')
const boxesBounds = []
const triggerBottom = window.innerHeight / 5 * 4

cacheBoxes()
checkBoxes()

window.addEventListener('scroll', checkBoxes)
window.addEventListener('resize', cacheBoxes)

function checkBoxes() {
    boxes.forEach((box, index) => {
        if(boxesBounds[index] - window.pageYOffset < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}

function cacheBoxes() {
  boxes.forEach(box => {
    boxesBounds.push(window.pageYOffset + box.getBoundingClientRect().top)
  })
}