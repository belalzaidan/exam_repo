function toggleMenu() {
    var body = document.body;
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        body.style.overflow = "auto";
    } else {
        menu.style.display = "block";
        body.style.overflow = "hidden";
    }
}