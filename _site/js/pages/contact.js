const form = document.getElementById("form");
const inputs = form.querySelectorAll("input, textarea");
const button = document.querySelector(".button[type='submit']");

form.addEventListener("submit", function(event) {
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].readOnly = true;
    }
    button.classList.add("disabled");
    button.textContent = "送信済み";
});

function enableButton() {
  button.classList.remove("disabled");
}

function disableButton() {
  button.classList.add("disabled");
}