const radios = document.querySelectorAll("input[type='radio']");
let counts;

form.addEventListener("submit", function(event) {
    let form = document.querySelector("form");
    let inputs = form.querySelectorAll("input, textarea");
    let textarea = form.querySelector("textarea");
    textarea.style.resize = "none";
    for (counts = 0; counts < inputs.length; counts++) {
      inputs[counts].readOnly = true;
    }
    for (i = 0; i < radios.length; i++) {
        radios[i].setAttribute("onclick", "javascript: return false;");
      }
    let button = document.querySelector("button[type='submit']");
    button.setAttribute("disabled", "disabled");
    button.textContent = "Sent";
});