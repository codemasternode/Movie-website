let leftArrow = document.getElementById('left-arrow')
let rightArrow = document.getElementById('right-arrow')
let filmsList = document.querySelector('.films-list')
let filmItems = document.querySelectorAll('.film-item')
let move = 1

onResize()

function onResize(event) {
    for (let i = 0; i < filmItems.length; i++) {
        console.log(filmsList.clientWidth)
        console.log(i * 170)
        filmItems.item(i).style.left = i * 180 + 'px'
        // if (i * 180 > filmsList.clientWidth) {
        //     // filmItems.item(i).style.display = "none"
        // } else {

        // }
    }
    filmItems.item(filmItems.length - 1).style.left = "-180px"
    // filmItems.item(filmItems.length - 1).style.display = "block"
}

window.onresize = (event) => {
    onResize(event)
}



leftArrow.addEventListener("click", () => {
    // // filmsList.style.left = (filmsList.offsetLeft + 30).toString() + "px"
    // filmsList.children.item(0).parentNode.insertBefore(filmsList.children.item(filmsList.children.length - 1),filmsList.children.item(0))
    // // filmsList.children.item(filmsList.children.length - 1).remove()
    for (let i = 0; i < filmItems.length; i++) {
        let item = filmItems.item(i)
        if (i === filmItems.length - move) {
            item.style.display = "none"
            item.style.left = "-180px"
            item.style.display = "block"
            move += 1
            if (move === filmItems.length) {
                move = 1
            }
        }
        item.style.left = (parseInt(item.style.left) + 180) + 'px'
    }


})

rightArrow.addEventListener("click", () => {
    // // filmsList.style.left = (filmsList.offsetLeft).toString() + "px"
    // filmsList.children.item(filmsList.children.length - 1).parentNode.insertBefore(filmsList.children.item(0),filmsList.children.item(filmsList.children.length - 1).nextSibling)
})