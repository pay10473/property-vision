const nav1 = document.querySelector("#menu-1-button")
const nav2 = document.querySelector("#menu-2-button")
const nav3 =document.querySelector("#menu-3-button")
const nav4 =document.querySelector("#menu-4-button")
const nav5 = document.querySelector("#menu-5-button")
const nav6 = document.querySelector("#menu-6-button")
const nav7 = document.querySelector("#menu-7-button")
const menuOne = document.querySelector("#menu-1")
const menuTwo = document.querySelector("#menu-2")
const menuThree = document.querySelector("#menu-3")
const menuFour = document.querySelector("#menu-4")
const menuFive = document.querySelector("#menu-5")
const menuSix = document.querySelector("#menu-6")
const menuSeven = document.querySelector("#menu-7")
const menuOneShow = ()=> {
menuOne.classList.toggle("show")
menuTwo.classList.remove("show")
menuThree.classList.remove("show")
menuFour.classList.remove("show")
menuFive.classList.remove("show")
menuSix.classList.remove("show")}  
menuSeven.classList.remove("show")  
nav1.addEventListener("click", menuOneShow)
const menuTwoShow = ()=> {
menuOne.classList.remove("show")
menuTwo.classList.toggle("show")
menuThree.classList.remove("show")
menuFour.classList.remove("show")}
menuFive.classList.remove("show")
menuSix.classList.remove("show")
menuSeven.classList.remove("show")
nav2.addEventListener("click", menuTwoShow)
const menuThreeShow = ()=> {
    menuOne.classList.remove("show")
    menuTwo.classList.remove("show")
    menuThree.classList.toggle("show")
    menuFour.classList.remove("show")
    menuFive.classList.remove("show")
    menuSix.classList.remove("show")
    menuSeven.classList.remove("show")}
    nav3.addEventListener("click", menuThreeShow)

    const menuFourShow = ()=> {
            menuOne.classList.remove("show")
            menuTwo.classList.remove("show")
            menuThree.classList.remove("show")
            menuFour.classList.toggle("show")
            menuFive.classList.remove("show")
            menuSix.classList.remove("show")
            menuSeven.classList.remove("show")}
            nav4.addEventListener("click", menuFourShow)
            const menuFiveShow = ()=> {
                menuOne.classList.remove("show")
                menuTwo.classList.remove("show")
                menuThree.classList.remove("show")
                menuFour.classList.remove("show")
                menuFive.classList.toggle("show")
                menuSix.classList.remove("show")
                menuSeven.classList.remove("show")}
                nav5.addEventListener("click", menuFiveShow)
            const menuSixShow = ()=>{
                menuOne.classList.remove("show")
                menuTwo.classList.remove("show")
                menuThree.classList.remove("show")
                menuFour.classList.remove("show")
                menuFive.classList.remove("show")
                menuSix.classList.toggle("show")
                menuSeven.classList.remove("show")}
                nav6.addEventListener("click", menuSixShow)
                const menuSevenShow = ()=>{
                    menuOne.classList.remove("show")
                    menuTwo.classList.remove("show")
                    menuThree.classList.remove("show")
                    menuFour.classList.remove("show")
                    menuFive.classList.remove("show")
                    menuSix.classList.remove("show")
                    menuSeven.classList.toggle("show")}
                    nav7.addEventListener("click", menuSevenShow)   

const fullName = document.querySelector("full-name")
const phoneNumber = document.querySelector("phone-number")
const emailAddress = document.querySelector("email-address")
const errors = document.querySelector("#errors")
const button = document.querySelector("#button")
const validate = (e)=>{
    e.preventDefault()
    errors.innerHTML=null
    if(fullName.value.length <5){
        const err = document.createElement("li")
        err.textContent = "Please write your full name"
        errors.append(err)
    }


}
button.addEventListener("submit", validate)

    





