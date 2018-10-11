let leftArrow = document.getElementById('left-arrow')
let rightArrow = document.getElementById('right-arrow')
let filmsList = document.querySelector('.films-list')
let filmItems = document.querySelectorAll('.film-item')
let move = 0
let lastItem = filmItems.item(filmItems.length - 1)
let block = false

onResize()

function onResize(event) {
    for (let i = 0; i < filmItems.length; i++) {
        filmItems.item(i).style.left = (i * 180 - 180) + 'px'
    }
}

window.onresize = (event) => {
    onResize(event)
}


rightArrow.addEventListener("click", () => {
    if(!block) {
        for (let i = 0; i < filmItems.length; i++) {
            let item = filmItems.item(i)
            setTimeout(() => {
                item.style.left = (parseInt(item.style.left) - 180) + 'px'
            }, 80)
        }
        filmItems.item(move).style.left = (parseInt(filmItems.item((filmItems.length - 1 + move) % filmItems.length).style.left) + 180) + 'px'
        console.log(filmItems.item(move).style.left)
        filmItems.item(move).classList.remove('film-item--transition')
        filmItems.item(move).style.visibility = "hidden"
        setTimeout(() => {
            filmItems.item(move).style.visibility = "visible"
            filmItems.item(move).classList.add('film-item--transition')
            block = false
            if (move === filmItems.length - 1) {
                move = 0
            } else {
                move += 1
            }
        },200)  
        block = true
        console.log(filmItems.item((filmItems.length - 1 + move) % filmItems.length).style.left)
    }
    
    

})

leftArrow.addEventListener("click", () => {
    for (let i = 0; i < filmItems.length - 1; i++) {
        let item = filmItems.item(i)

    }
})