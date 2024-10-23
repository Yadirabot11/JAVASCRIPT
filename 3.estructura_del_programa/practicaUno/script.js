// Ejercicio 1
let num3 = prompt("Ingresa otro número:");
let num4 = prompt("Ingresa un segundo número:");
(num3 * num4) > 100 ? alert("El resultado es mayor a 100") : alert("El resultado es menor o igual a 100");
//o tambien puede ser
let num1= prompt("Ingrese el primer número:");
let num2= prompt("Ingrese el segundo número:");
if (num1*num2>100) console.log("El producto es mayor a 100") 

// Ejercicio 2
let pass = prompt("Introduce la contraseña:");
pass === "claveSegura" ? alert("Acceso concedido") : alert("Acceso denegado");
//o tambien puede ser
let password = prompt("Ingrese la contraseña:");
if (password === "12345") {
    console.log("Contraseña correcta")
};

// Ejercicio 3
let numero = +prompt("Ingrese un número: ");
if (numero <= 1 || numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0) {
  console.log(`${n} no es un número primo.`);
} else {
  console.log(`${n} es un número primo.`);
}