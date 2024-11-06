//haciendo uso de las funciones de tipo closure 
//ejercicio1
//pedir al usuario su nombre y su edad, verificar que su edad sea mayor a 18 años en ese caso mostraremos un mensaje de bienvenida mas el nombre que ingreso el usuario

function pedirDatos() {
    return function() {
      const nombre = prompt("¿Cuál es tu nombre?");
      const edad = parseInt(prompt("Cuál es tu edad"), 10);
      if (edad > 18) {
        alert(`Bienvenida, ${nombre}`);
      } else {
        alert("Lo siento, debes ser mayor de 18 años para continuar.");
      }
    };
  }
const verificarEdad = pedirDatos();
verificarEdad();
