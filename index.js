let navBar = document.querySelector('.navbar')
let allLi = document.querySelectorAll('li') 

allLi.forEach(  (li, index) => {
    li.addEventListener("click", e => {
        navBar.querySelector(".active-list").classList.remove("active-list")
        li.classList.add("active-list")

        let indicator = document.querySelector(".indicator")
        indicator.style.transform = `translateX(calc(${index * 90}px))`
    })
})