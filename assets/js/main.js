//Modifica alerta al enviar mensaje en contacto usando Sweetalert
function enviCont() {
    var text = document.getElementById("mensaje").value;
    if (text != "") {
      swal("Supercompara", "Mensaje enviado con exito ", "success", {button: "Vale!"});
    } else {
      swal("Supercompara", "No se ha enviado el mensaje", "error");
    }
}

//Modifica alerta al enviar mensaje en registro usando Sweetalert
function enviRegistro() {
  var text = document.getElementById("mensaje").value;
  if (text != "") {
    swal("Supercompara", "Registro realizado con exito", "success", {button: "Vale!"});
  } else {
    swal("Supercompara", "No se ha enviado el mensaje", "error");
  }
}
