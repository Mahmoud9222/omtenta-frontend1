function checkCode() {
    let resultat = document.querySelector("#resultat");
    let input = document.querySelector("input");
    if (isNaN(input.value)) {
        resultat.textContent = "Värdet är inte ett nummer.";
    } else if (input.value == 1337) {
        resultat.textContent = "Korrekt kod!";
    } else if (input.value < 1337) {
        resultat.textContent = "Koden är fel, koden är ett högre nummer.";
    } else {
        resultat.textContent = "Koden är fel, koden är ett lägre nummer.";
    }
}
