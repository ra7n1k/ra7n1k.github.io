const mksite = document.querySelectorAll("[style='display: none;']");
for (counts = 0; counts < radios.length; counts++) {
    radios[counts].addEventListener("change", function() {
        if (this.value === "はい" || this.value === "y") {
            for (counts = 0; counts < mksite.length; counts++) {
                mksite[counts].style.display = "block";
            }
        } else {
            for (counts = 0; counts < mksite.length; counts++) {
                mksite[counts].style.display = "none";
            }
        }
    });
}