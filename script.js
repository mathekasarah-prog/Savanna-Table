const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector("nav ul");
hamburger.addEventListener('click', function() {
    console.log('Hamburger menu clicked');
        navLinks.classList.toggle("show");
});

const guests = Number(document.querySelector("#guests-number").value);


const bookingForm = document.querySelector("#booking-form");
bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();
     const fullNameInput = document.querySelector("#full-name");
     const emailInput = document.querySelector("#email");
     const phoneInput = document.querySelector("#phone");
     const guestsInput = document.querySelector("#guests-number");
     const dateInput = document.querySelector("#reservation-date");
     const timeInput = document.querySelector("#reservation-time");
     const seatingInput = document.querySelector("#seating");
     const specialRequestsInput = document.querySelector("#special-requests");

    console.log(fullNameInput.value);
    console.log(emailInput.value);
    console.log(phoneInput.value);
    console.log(guestsInput.value);
    console.log(dateInput.value);
    console.log(timeInput.value);
    console.log(seatingInput.value);
    console.log(specialRequestsInput.value);
});


