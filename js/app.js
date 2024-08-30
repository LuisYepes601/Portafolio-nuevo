document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById("email");

    // Escuchar el evento 'input' para aplicar estilos según la validez
    inputField.addEventListener("input", function() {
        if (inputField.value === "") {
            inputField.style.border = "none";
        } else if (inputField.checkValidity()) {
            inputField.style.border = "2px solid #3FA2F6";
        } else {
            inputField.style.border = "2px solid red";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById("name");

    // Escuchar el evento 'input' para aplicar estilos según la validez
    inputField.addEventListener("input", function() {
        if (inputField.value === "") {
            inputField.style.border = "none";
        } else if (inputField.checkValidity()) {
            inputField.style.border = "2px solid #3FA2F6";
        } else {
            inputField.style.border = "2px solid red";
        }
    });
});