function openMenu() {
    document.getElementById("sideMenu").classList.add("open");
    document.getElementById("overlay").style.display = "block";
}

function closeMenu() {
    document.getElementById("sideMenu").classList.remove("open");
    document.getElementById("overlay").style.display = "none";
}

function openMenuPage() {
    window.location.href = "menu.html";
}

function goTo(page) {
    window.location.href = page;
}
