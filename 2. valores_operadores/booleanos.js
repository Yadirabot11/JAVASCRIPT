//ejemplos con operadores de comparacion. 
console.log(5>6) //false
// esta operacion me generara un valor de tipo booleano.
//mayor igual que

console.log(6>=6) //true
//no es igual

console.log(5 != 7) //true
//NaN == NaN

console.log(NaN==NaN) //false
//averiguar la forma que se realizan las comparaciones con cadena de texto.
//todas las letras mayusculas seran menores a las minusculas.
//Z>a
//por que javaScript compara los codigos unicode de cada caracter.
//!>=?

// 33 >= 63 codigos de asqui de cada simbolo.
console.log("!">="?") //false

//Ardvark < Zoroaster.
console.log("Ardvark"<"Zoroaster")

//en el caso del operador && and su resultado sera verdadero solo si ambos valores son verdaderos.
console.log(true && false ) //false
console.log(true && true ) //true

// en el caso del operador or || produce verdadero si cualquiera de sus valores dados es verdadero.
console.log(false || false ) //false
console.log(true || false ) //true
console.log(true && true) //true

// en el caso del operador not ! invierte el valor dado.
console.log(! true ) //false
console.log(!false ) //true
