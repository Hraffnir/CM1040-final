function showNav(burger) {
    var element = document.getElementById("popout-nav-menu")
    var isVisible = element.style.top == "";

    burger.classList.toggle("pickup-burger");

    if (isVisible) {
        element.style.top = "100px";
    } else {
        element.style.top = "";
    }
}