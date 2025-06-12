function procesa_envio (event) 
{
    event.preventDefault();
    console.log("Procesando envio!!!");

    let salida = document.getElementById("salida");

    let nombre = document.getElementById("nombre");

    if (nombre.value.length < 2) {
        salida.value = "El nombre debe tener al menos 2 caracteres";
        
        nombre.style.color = "#ff0000";
        nombre.style.border = "1px solid red #ff0000";
        salida.style.color = "#ff0000";

        nombre.focus();
        
        return false;
    }


    document.getElementById("form_contacto").submit();
}