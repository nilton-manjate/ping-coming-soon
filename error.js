"use strict";

const form = document.getElementsByClassName("form")[0];

const form__input = document.getElementsByClassName("form__input")[0];

const form__error = document.getElementsByClassName("form__error")[0];

function validate() {
    if (form__input.checkValidity()) {
        form__input.value = "";
        form__input.style.borderColor = "var(--pale-blue)";
        form__error.innerHTML = "";

        alert("Email sent successfully")
    } else if (form__input.value == "") {
        form__input.style.borderColor = "var(--light-red)";
        form__error.innerHTML = "Whoops! It looks like you forgot to add your email";
        form__input.value = "example@email.com";
    } else {
        form__input.style.borderColor = "var(--light-red)";
        form__error.innerHTML = "Please provide a valid email address";
        form__input.value = "example@email.com";
    }
};


