const form = document.querySelector(".form");
const fname = document.querySelector(".input_name");
const sname = document.querySelector(".input_surname");
const email = document.querySelector("input_email");
const password = document.querySelector(".input_password");
const fields = document.querySelectorAll(".input");

const nameEl = document.querySelector(".name_warning");
const surnameEl = document.querySelector(".sname_warning");
const emailEl = document.querySelector(".email_warning");
const passwordEl = document.querySelector(".password_warning");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if ((fname.value, sname.value === "")) {
    nameEl.textContent = "First Name cannot be empty";
    surnameEl.textContent = "Last Name cannot be empty";
    $(".icon_error").show();
    $(".input").css("border", "red solid 1px");
    $(nameEl).css("color", "red");
    $(surnameEl).css("color", "red");
  } else {
    $(".icon_error").hide();
    fname.value = "";
    sname.value = "";
  }
  if (password.value === "") {
    passwordEl.textContent = "Password cannot be empty";
    $(".icon_error").show();
    $(".input").css("border", "red solid 1px");
    $(passwordEl).css("color", "red");
  } else {
    $(".icon_error").hide();
    password.value = "";
  }
  if (!isValid(email.value) || email.value === "") {
    emailEl.textContent = "Looks like this is not an email";
    $(".icon_error").show();
    $(".input").css("border", "red solid 1px");
    $(emailEl).css("color", "red");
  } else {
    emailEl.hide();
    email.value = "";
  }
});

function isValid(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
