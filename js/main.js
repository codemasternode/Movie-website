let leftArrow = document.getElementById('left-arrow')
let rightArrow = document.getElementById('right-arrow')
let filmsList = document.querySelector('.films-list')
let filmItems = document.querySelectorAll('.film-item')

window.onresize = (event) => {
    for (let i = 0; i < filmItems.length; i++) {
        console.log(filmsList.clientWidth)
        console.log(i * 170)
        if(i * 180 > filmsList.clientWidth) {
            filmItems.item(i).style.display = "none"
        }else{
            filmItems.item(i).style.left = i * 180 + 'px'
        }
    }
}



leftArrow.addEventListener("click", () => {
    // // filmsList.style.left = (filmsList.offsetLeft + 30).toString() + "px"
    // filmsList.children.item(0).parentNode.insertBefore(filmsList.children.item(filmsList.children.length - 1),filmsList.children.item(0))
    // // filmsList.children.item(filmsList.children.length - 1).remove()

    

})

rightArrow.addEventListener("click", () => {
    // // filmsList.style.left = (filmsList.offsetLeft).toString() + "px"
    // filmsList.children.item(filmsList.children.length - 1).parentNode.insertBefore(filmsList.children.item(0),filmsList.children.item(filmsList.children.length - 1).nextSibling)
})