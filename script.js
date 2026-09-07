const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector("nav ul");
hamburger.addEventListener('click', function() {
    console.log('Hamburger menu clicked');
        navLinks.classList.toggle("show");
});


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

const personalizedForm = document.querySelector("personalized-form");
personalizedForm.addEventListener("submit", function(event){
    event.preventDefault();
});

const userNameInput = document.querySelector("#user-name");
const userName = userNameInput.value;

const userAgeInput = document.querySelector("user-age");
const userAge = Number(userAgeInput.value);

localStorage.setItem("userName", userName);

localStorage.setItem("userAge, userAge");

localStorage.getItem("userName");
localStorage.getItem("userAge");

const greeting = `Welcome to Savanna Table, ${savedName}`;
const savedName = "Sarah";

console.log(greeting);


let name = "";
let age = 0;

if (age >= 18) {
    console.log("You can access adult content.");
}else {
    console.log("You are too young for adult content.");
}
//create a function to display a personalized greeting using template literals.
function greetUser(name) {
    console.log(`Hello, ${name}! Welcome to Savanna Table.`);
}
greetUser("John Mwangi");

function calculateAgeInMonths(age){
    return(age)*12;
}
console.log(calculateAgeInMonths(30));

for (let i=0; i<5; i++) {
    console.log("We can do it!");
    }
