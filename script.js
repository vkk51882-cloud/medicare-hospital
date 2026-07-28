document.addEventListener("DOMContentLoaded", function () {
    console.log("Medicare Site Loaded Successfully!");

    // Appointment Form Validation
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you! Your appointment request has been submitted successfully.");
            contactForm.reset();
        });
    }
});