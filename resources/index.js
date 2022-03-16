
function toggleBtn(elementId) {
    const listCon = document.querySelector("#list__con"+elementId);
    if (listCon.style.display === "block" ) {
        listCon.style.display = "none";
    } else {
        listCon.style.display = "block";
        
    }
}

function toggleIcon(elementId) {
    const icon =  document.querySelector("#down__arrow"+elementId);
    if (icon.style.transform === "rotate(180deg)") {
        icon.style.transform = "";
    } else {
        icon.style.transform = "rotate(180deg)";
    }
}

function toggleSvg() {
    const menu = document.querySelector("#menu");
    if (menu.getAttribute('src') === "/resources/images/icon-hamburger.svg") {
        menu.setAttribute('src',"/resources/images/icon-close.svg")
    } else {
        menu.setAttribute('src', "/resources/images/icon-hamburger.svg");
    }
}

function toggleSub() {
    const sub = document.querySelector("#sub__menu");
    const icon =  document.querySelector("#down__arrow");
    if (sub.style.display ==="block") {
        sub.style.display = "none";
        icon.style.transform = "rotate(180deg)";
    } else {
        sub.style.display = "block"
    }
}

function collapse() {
    const tab = document.querySelector("")
}