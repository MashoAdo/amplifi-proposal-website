const navMenu = document.getElementById("nav-menu")
const navClose = document.getElementById("close-menu")
const menuBtn = document.getElementById("menu-btn")
const navLink = document.getElementsByClassName("nav-link")
const navLinkArr = [...navLink]
console.log(navLinkArr)
// console.log("hellll")

menuBtn.addEventListener('click',() => {
    navMenu.classList.add("show-menu")
    console.log("hellll")
})

navLinkArr.forEach(link => { link.addEventListener('click',() => {
    navMenu.classList.remove("show-menu")
})
    
});

navClose.addEventListener('click',() => {
    navMenu.classList.remove("show-menu")
})
