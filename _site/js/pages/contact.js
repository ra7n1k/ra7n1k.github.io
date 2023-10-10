form.addEventListener("submit", function(event) {
    let form = document.getElementById("form");
    let inputs = form.querySelectorAll("input, textarea");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].readOnly = true;
    }
    let button = document.querySelector(".button[type='submit']");
    button.classList.add("disabled");
    button.textContent = "送信済み";
});