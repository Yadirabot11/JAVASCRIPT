//Ejercicio
//crear una funcion que me de un saludo de bienvenida
function saludoBienvenida(){
    console.log("Bienvenido")
}
//funcion como valor
//let saludo=function(){
    console.log("bienvenido");
//}
saludo()
// binding en javaScript lo q hace es subir las funciones declarativas a la cabecera de mi archivo
//function despedida(){
  //  return "adios"
//}
// let saludo
console.log(despedida())
// en el caso de funciones como valor o funciones flecha el binding solo eleva al principio del archivo 
//la declaracion del enlace o variable mas no el valor por eso en estos casos debemos ejecutar las funciones despues de haberlo creado.
let saludo=()=>{return "hola primo"}
console.log(saludo())
//en el caso de la funcion declarativa el binding eleva toda la funcion al principio del archivo por eso podemos ejecutar  la funcion desde cualquier parte del archivo incluso antes de uqe sea creada.
function despedida(){
    return "adios"
}
