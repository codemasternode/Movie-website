let leftArrow = document.getElementById('left-arrow')
let rightArrow = document.getElementById('right-arrow')
let filmsList = document.querySelector('.films-list')


leftArrow.addEventListener("click", () => {
    filmsList.style.left = (filmsList.offsetLeft - 250).toString() + "px" 
})

rightArrow.addEventListener("click",() => {
    filmsList.style.left = (filmsList.offsetLeft + 250).toString() + "px" 
})