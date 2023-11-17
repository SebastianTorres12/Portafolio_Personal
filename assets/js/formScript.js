function mostrarAlerta() {
    // Obtener valores de los campos
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var asunto = document.getElementById('asunto').value;
    var mensaje = document.getElementById('mensaje').value;

    // Mostrar alert con los datos
    var mensajeAlerta = "Nombre: " + nombre + "\nCorreo: " + correo + "\nAsunto: " + asunto + "\nMensaje: " + mensaje;
    alert("Datos enviados:\n\n" + mensajeAlerta);
}

function enviarFormulario() {
    // Preguntar por confirmación
    var confirmacion = confirm("¿Estás seguro de enviar estos datos?");

    // Si se confirma, mostrar la alerta y restablecer los campos
    if (confirmacion) {
        mostrarAlerta();
        document.getElementById('form-contacto').reset();
    }
}
