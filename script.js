const randomPass = document.getElementById("password");

const rangeInput = document.getElementById("rangeInput");
const currentValue = document.getElementById("currentValue");

rangeInput.addEventListener("input", function () {
  currentValue.textContent = rangeInput.value;
});

const allChars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}[]<>?/|~`.,";

document.getElementById("generate").addEventListener("click", function () {
  let password = "";
  while (currentValue.textContent > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  randomPass.value = password;
});

const copyPass = document.getElementById("copy");
copyPass.addEventListener("click", function () {
  randomPass.select();
  navigator.clipboard.writeText(randomPass.value);
});
