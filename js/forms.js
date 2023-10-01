form.addEventListener("submit", function(event) {
    let form = document.querySelector("form");
    let inputs = form.querySelectorAll("input, textarea");
    let textarea = form.querySelector("textarea");
    textarea.style.resize = "none";
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].readOnly = true;
    }
    let radioBtns = document.querySelectorAll("input[type='radio']");
    for (i = 0; i < radioBtns.length; i++) {
        radioBtns[i].setAttribute("onclick", "javascript: return false;");
      }
    let button = document.querySelector("button[type='submit']");
    button.setAttribute("disabled", "disabled");
    button.textContent = "送信済み";
});