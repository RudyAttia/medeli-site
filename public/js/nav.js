const eventListener = (e) => {
    let target = e.target
    if (target.id === "mobileNav" || target.id==="imgMobileNav" || target.id === "navigation" || target.id === "navList" || target.id === "pageHere" || target.classList.contains("pageLink")) {
        return
    }
    openNav()
}

const openNav = () => {
    if (document.getElementById('navigation').classList.contains('navClose')) {
        document.getElementById('navigation').classList.remove('navClose')
        document.getElementById('navigation').classList.add('navOpen')
        document.addEventListener("click",eventListener)
    }
    else {
        document.getElementById('navigation').classList.remove('navOpen')
        document.getElementById('navigation').classList.add('navClose')
        document.removeEventListener("click",eventListener)
    }
}