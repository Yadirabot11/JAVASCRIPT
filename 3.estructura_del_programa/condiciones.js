//ejemplo de condicion simple 

//capturamos la edad y lo convertimos a numero
//let numero = Number(prompt("ingresa tu edad"))
//verificamos si el tipo de datos edad es number realmente
if (typeof edad == "number"){
    //si las comparacion es verdad mostraremos por consola la raiz cuadra de edad
    console.log(edad*edad)
};

//ejemplo de una condicion simple de una sola linea 
if(1+1==2) console.log("Es verdad");

//ejercicio de condicion 
//crear un programa que me pida un numero y me muestre por consola si es un numero par o impar 
let numero=prompt("ingrese un numero")
if (+numero%2==0){
    console.log("Es par");
}else{
    console.log("es impar")
}

//EJERCICIO
// crear un programa que pida al usuariosu edad y dependiendo su edad le daremos una serie de regalos
//REGALOS
/**
 * - si su edad esta entre 4 a 8 años: te ganaras un chupetin.
 * - si su edad esta entre 9 a 13 años: te ganaras una pelota firmada por cuto.
 * - si su edad esta entre 14 a 17 años: te ganaras un celular nokia 6101.
 * - si su edad es mayor igual a 18 te ganaras al primo.
 */

let edadPersona=Number(prompt("Por favor, ingresa tu edad:"));

if (edadPersona>=4 && edad <= 8) {
    console.log("te ganarás un chupetín.")
} else if (edadPersona >= 9 && edad <= 13) {
    console.log("te ganarás una pelota firmada por Cuto.")
} else if (edadPersona >= 14 && edad <= 17) {
    console.log("te ganarás un celular Nokia 6101.")
} else if (edadPersona >= 18  && edadPersona<=100) {
    console.log( "te ganarás al primo.")
}else{
    console.log("no tiene la edad necesaria")
}
switch (edadPersona){
    case (edadPersona>=4 && edadPersona<=8):
        console.log("te ganaste un chupetin")
        break
    case (edadPersona>=9 && edadPersona<=13):
        console.log("te ganaste una pelota")
        break
    case (edadPersona>=14 && edadPersona<=17):
        console.log("te ganaste una nokia")
        break
    case (edadPersona>=18 && edadPersona<=100):
        console.log("te ganaste al primo")
        break
    default:
        console.log("no tienes la edad necesaria")
        break
}
   
//EJERCICIO
//realizar un programa que pida 5 frutas atravez del navegador utilizando switch
// y realizara las siguientes evaluaciones //
//naranja, limom ->"es una fruta citrica"
// platano, manzana ->"es una fruta dulce"
// freza, pera, papaya -> "para la ensalda de fruta"
// si ingresa otro tipo de frutas -> "no tiene clasificacion"
for (let i=1;i<=5;i++){
    let fruta=prompt("escribe el nombre de tu fruta numero: ",i)
    switch (fruta){
        case "naranja":
        case "limon":
            console.log(fruta,"es una fruta citrica")
        case "fresa":
        case "pera":
        case "papaya":
            console.log(fruta,"para la ensalada de fruta")
            break
        default:
            console.log("es una fruta")
            break;
    }
}