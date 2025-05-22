const formulario = document.getElementById('formulario-registro');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const texto = document.getElementById('texto');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    let esValido = true;

    if (nombre.value.trim() === '') {
        alert('Por favor, ingresa tu nombre');
        nombre.focus();
        esValido = false;
        return;
    }

    if (texto.value.trim() === '') {
        alert('Por favor, indica por qué deseas contactarme');
        texto.focus();
        esValido = false;
        return;
    }

    if (email.value.trim() === '') {
        alert('Por favor, ingresa tu correo electrónico');
        email.focus();
        esValido = false;
        return;
    }

    if (esValido) {
        alert('¡Formulario enviado con éxito!');
        formulario.reset();
    }
});
