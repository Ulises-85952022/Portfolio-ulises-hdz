document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".formcontato__form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const nombre = form.nombre.value.trim();
        const email = form.email.value.trim();
        const asunto = form.asunto.value.trim();
        const mensaje = form.mensaje.value.trim();

        if (nombre === "") {
            alert("Por favor, ingresa tu nombre.");
            return;
        }

        if (email === "") {
            alert("Por favor, ingresa tu email.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Por favor, ingresa un email válido.");
            return;
        }

        if (asunto === "") {
            alert("Por favor, ingresa un asunto.");
            return;
        }

        if (mensaje === "") {
            alert("Por favor, ingresa un mensaje.");
            return;
        }

        // Si todas las validaciones pasan, enviar el formulario (simulación)
        alert("Mensaje enviado correctamente!");
        form.reset(); // Limpiar el formulario
    });
});

// Función para validar el formato del email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
