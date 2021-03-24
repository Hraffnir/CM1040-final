function sendMessage(event) {
    var contactUsForm = document.getElementById("contact-us");
    var contactUsSentElement = document.getElementById("contact-us-sent");

    contactUsForm.classList.toggle("hidden");
    contactUsSentElement.classList.toggle("hidden");
}