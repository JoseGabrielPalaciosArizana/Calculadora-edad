const formulario = document.getElementById('formularioEdad');
const inputFecha = document.getElementById('fechaNacimiento');
const divResultado = document.getElementById('resultado');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault(); 
    const valorFecha = inputFecha.value;
    divResultado.style.display = 'none';
    divResultado.className = '';
    if (!valorFecha) {
        mostrarResultado("Por favor, selecciona una fecha.", "error");
        return;
    }
    const fechaNacimiento = new Date(valorFecha);
    const hoy = new Date();
    if (fechaNacimiento > hoy) {
        mostrarResultado("La fecha de nacimiento no puede ser en el futuro.", "error");
        return;
    }
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }
    mostrarResultado(`Tienes aproximadamente <strong>${edad}</strong> años.`, "exito");
});
function mostrarResultado(mensaje, tipoClase) {
    divResultado.innerHTML = mensaje;
    divResultado.className = tipoClase;
    divResultado.style.display = 'block';
}