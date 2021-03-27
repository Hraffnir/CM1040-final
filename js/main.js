// Simple method to handle showing and hiding the popout nav bar
// which is only displayed on lower/mobile resolutions.
function showNav(burger) {
    // We get the popout nav menu DOM element
    var element = document.getElementById("popout-nav-menu")

    // Get the element's "top" position value, if it's an empty string
    // then it's not currently visible, so display it.
    var isVisible = element.style.top == "";

    // Toggling the class of the nav menu button, which animates it
    // into a downwards pointing caret.
    burger.classList.toggle("pickup-burger");

    if (isVisible) {
        // Set the element's top position property to 100px, enough
        // to display the 2 nav links.
        element.style.top = "100px";
    } else {
        // Set to empty string, hiding the popout nav bar.
        element.style.top = "";
    }
}