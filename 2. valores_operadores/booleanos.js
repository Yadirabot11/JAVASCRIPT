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
//1. Igualdad: Para comparar si dos cadenas son iguales, se pueden usar los operadores == o ===.
//Uso del operador == (igualdad no estricta):
let cadena1 = "hola";
let cadena2 = "hola";
console.log(cadena1 == cadena2); // true


//Igualdad (==): Compara dos cadenas y verifica si son iguales (sin considerar el tipo).
console.log("hola" == "hola"); // true

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
//OBSERVACION: Si ambos valores son verdaderos devolvera el segundo valor.
console.log("hola" && "mundo")
//OBSERVACION:En caso exista un valor verdadero y uno falso devolvera el valor falso.
console.log(0 && "hola")

//OjO:Los valores 0,NaN y una cadena vacia "" son considerados false


// en el caso del operador or || produce verdadero si cualquiera de sus valores dados es verdadero.
console.log(false || false ) //false
console.log(true || false ) //true
console.log(true && true) //true

// 
respuesta="tte devuelvo los ositos tiernos "
console.log(respuesta || "tu busqueda no existe")
console.log(0 || "")                                                                                                       
// en el caso del operador not ! invierte el valor dado.
console.log(!true ) //false
console.log(!false ) //true

//usando el operador relacional
//OBSEVACION: solo funciona en objetos o listas 

//averiguar por que sale false en este caso.
console.log("hola" in ["hola","mundo"])
