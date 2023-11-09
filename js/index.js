const menu = document.getElementById("floating-menu")
menu.style.display = 'none';

const phone_icon = document.getElementById("logo-phone")
const tablet_icon = document.getElementById("logo-tablet")
const computer_icon = document.getElementById("logo-computer")
const television_icon = document.getElementById("logo-television")

const phone = document.getElementById("phone")
const tablet = document.getElementById("tablet")
const computer = document.getElementById("computer")
const television = document.getElementById("television")

window.addEventListener("resize", () => {
    if (menu.style.display != 'none') {
        menu.style.display = 'none'
    }
});

function exchangeContent (content) {
    const show = document.getElementById(content)
    const show_icon = document.getElementById("logo-" + content)

    phone.style.display = 'none'
    tablet.style.display = 'none'
    computer.style.display = 'none'
    television.style.display = 'none'

    phone_icon.style.display = 'none'
    tablet_icon.style.display = 'none'
    computer_icon.style.display = 'none'
    television_icon.style.display = 'none'
    
    show.style.display = 'block'
    show_icon.style.display = 'block'

    menu.style.display = 'none'
}

function showMenu () {
    if (menu.style.display == 'none') {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}