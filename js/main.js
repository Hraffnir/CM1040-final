function showNav(burger) {
    var element = document.getElementById("popout-nav-menu")
    var isVisible = element.style.top == "";

    burger.classList.toggle("pickup-burger");

    // TODO: Slide-out animation.
    if (isVisible) {
        element.style.top = "100px";
    } else {
        element.style.top = "";
    }
}


// TODO: page navigation and pagination

// TODO: Fake an ajax loader when navigating between articles?