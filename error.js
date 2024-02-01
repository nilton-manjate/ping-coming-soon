"use strict";

const form = document.getElementsByClassName("form")[0];

const form__input = document.getElementsByClassName("form__input")[0];

const form__error = document.getElementsByClassName("form__error")[0];

function validate() {
    if (form__input.checkValidity()) {
        form__error.style.display = "none";
        form__input.value = "";
        form__input.style.borderColor = "var(--pale-blue)";

        alert("Email sent successfully")
    } else {
        form__input.style.borderColor = "var(--light-red)";
        form__error.style.display = "block";
        form__input.value = "example@email.com";
    }
};


