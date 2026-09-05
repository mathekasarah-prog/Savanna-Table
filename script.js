const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector("nav ul");
hamburger.addEventListener('click', function() {
    console.log('Hamburger menu clicked');
        navLinks.classList.toggle("show");
});

const guests = Number(document.querySelector("#guests").value);


const bookingForm = document.querySelector("#booking-form");
bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log('Form submitted');
});


