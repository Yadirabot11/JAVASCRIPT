# Estructura de datos
## Indice
- [Array](#Lista-o-array)
- [creacion](#creacion)
- [acceder a un elemento del array](#acceder_a_un_elemento_del_array)
- [metodos](#metodos)


A parte de los tipos de datos primitivos, javaScript nos proporciona los tipos de datos complejos conocido tambien como datos estructuras o estructura de datos.
Para poder trabajar con estos tipos de datos deberemos conocer la forma de respresentarlos en la memoria de nuestra maquina.
javaScript trabaja con dos tipos de datos estructurados que trabajan de manera independiente o conjunto.
Son los siguientes :
## Lista o Array
las listas en java script son un tipo de datos estructurado que no permite almacenar distintos tipos de datos primitivos separados por coma, cada tipo de dato que se almacene en una lista se le conoce como elemento. 
asi cada elemento estara separado por una coma.
### creacion
primero tenemos que crear un enlace (una variable) y luego lo asignamos la lista que se crea con `corchetes`, los elemntos estaran dentro dentro de los corchetes separados por comas.
```js
//estoy creando una lista vacia
let miLista=[]
//creando una lista de numeros 
let numeros=[2,4,7,8,3]
//creando una lista de nombres
let nombre=["yadira","edwin","adan","maritza"]
//crear una lista mixta
let mixta=[4,"holoa",false,["hola","mundo"]]
```
### acceder a un elemento del array
para poder acceder a un elemento del array debemos entender que javascript asignara por cada elemento un indice que nos permitira acceder a un elemento especifico este idice es incremental y comenzara de cero con el primer elemento, el ultimo elemento sera la cantidad de los elementos menos uno.
```js
let numeros=[3,6,7,23,67,8]
console.log(numeros[2])
``` 
existe otra manera de acceder a los elementos de una lista, esto se logra recorriendo cada elemnto de una lista esto se logra con un bucle `for`.
```js
```
### metodos
los metodos son funciones que nos permiten cear, actualizar y eliminar los elementos de una lista, todas las variables que almacena una lista nos permite acceder a sus metodos poniendo un punto despues den nombre de la variable.
- metodo para recuperar la longitud de lementos que tiene una lista
```js
let numeros=[2,4,6,7]
numeros.length
```
- metodo para agregar un elemento al final de la lista 
```js
let vocales=["a"]
vocales.push("e")
```
- metodo para eliminar el ultimo elemento de una lista
```js
let vocales=["a","e"]
vocales.pop()
```

## TAREA AVERIGUAR LOS METODOS MAS USADOS QUE EXISTEN EN EL TRATAMIENTO
###  Métodos de Arrays (Arreglos)
Los arrays son estructuras fundamentales en JavaScript, y hay muchos métodos que permiten manipulaciones útiles sobre ellos.
- push(): Agrega uno o más elementos al final de un array.
```JS
let arr = [1, 2, 3];
arr.push(4); // [1, 2, 3, 4]
```
- pop(): Elimina el último elemento de un array.

```jscript
Copiar código
arr.pop(); // [1, 2, 3]
```
- shift(): Elimina el primer elemento de un array.

```javascript
Copiar código
arr.shift(); // [2, 3]
```
- unshift(): Agrega uno o más elementos al inicio de un array.

```javascript
Copiar código
arr.unshift(0); // [0, 2, 3]
```
- map(): Crea un nuevo array con los resultados de aplicar una función a cada elemento del array original.

```javascript
Copiar código
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2); // [2, 4, 6]
```
- filter(): Crea un nuevo array con los elementos que pasen una prueba (función de filtro).

```javascript
Copiar código
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(num => num % 2 === 0); // [2, 4]
```
- reduce(): Aplica una función acumuladora sobre los elementos de un array y devuelve un único valor.

```javascript
Copiar código
let sum = [1, 2, 3].reduce((acc, num) => acc + num, 0); // 6
```
- forEach(): Ejecuta una función sobre cada elemento del array, pero no devuelve nada.

```avascript
Copiar código
[1, 2, 3].forEach(num => console.log(num)); // Imprime 1, 2, 3
```
- find(): Encuentra el primer elemento que cumpla con una condición especificada.

```javascript
Copiar código
let arr = [1, 2, 3, 4];
let found = arr.find(num => num > 2); // 3
```
- sort(): Ordena los elementos de un array en su lugar.

```javascript
Copiar código
let arr = [3, 1, 2];
arr.sort(); // [1, 2, 3]
```

### Métodos de Cadenas (Strings)
JavaScript ofrece muchos métodos útiles para trabajar con cadenas de texto.

- toUpperCase(): Convierte todos los caracteres de la cadena a mayúsculas.

```javascript
Copiar código
let str = "hello";
str.toUpperCase(); // "HELLO"
```
- toLowerCase(): Convierte todos los caracteres de la cadena a minúsculas.

```javascript
Copiar código
let str = "HELLO";
str.toLowerCase(); // "hello"
```
- substring(): Extrae una parte de la cadena, desde un índice hasta otro índice.

```javascript
Copiar código
let str = "Hello, world!";
str.substring(0, 5); // "Hello"
```
- split(): Divide la cadena en un array usando un separador.

```javascript
Copiar código
let str = "apple,banana,orange";
let arr = str.split(","); // ["apple", "banana", "orange"]
```
- replace(): Reemplaza una parte de la cadena por otra.

```javascript
Copiar código
let str = "Hello world!";
str.replace("world", "JavaScript"); // "Hello JavaScript!"
```
- trim(): Elimina los espacios en blanco al principio y al final de la cadena.

```javascript
Copiar código
let str = "  Hello  ";
str.trim(); // "Hello"
```
### Métodos de Objetos
Los objetos son una parte clave del desarrollo en JavaScript, y muchos métodos permiten interactuar con ellos.

- Object.keys(): Devuelve un array con los nombres de las propiedades de un objeto.

```javascript
Copiar código
let obj = { a: 1, b: 2 };
Object.keys(obj); // ["a", "b"]
```
- Object.values(): Devuelve un array con los valores de las propiedades de un objeto.

```javascript
Copiar código
let obj = { a: 1, b: 2 };
Object.values(obj); // [1, 2]
```
- Object.entries(): Devuelve un array de arrays, donde cada sub-array contiene una pareja [clave, valor].

```javascript
Copiar código
let obj = { a: 1, b: 2 };
Object.entries(obj); // [["a", 1], ["b", 2]]
```
- hasOwnProperty(): Verifica si un objeto tiene una propiedad específica.

```javascript
Copiar código
let obj = { a: 1, b: 2 };
obj.hasOwnProperty("a"); // true
```
### Métodos de Funciones
Las funciones también tienen varios métodos asociados a su uso.

- bind(): Crea una nueva función que, cuando se invoca, tiene su this fijado al valor proporcionado.

```javascript
Copiar código
function greet() {
  console.log(this.name);
}
let person = { name: "Alice" };
let greetPerson = greet.bind(person);
greetPerson(); // Alice
```
- call(): Llama a una función con un valor de this determinado.

```javascript
Copiar código
function greet() {
  console.log(this.name);
}
let person = { name: "Bob" };
greet.call(person); // Bob
```
- apply(): Similar a call(), pero los argumentos se pasan como un array.

```javascript
Copiar código
function greet(greeting) {
  console.log(greeting + ", " + this.name);
}
let person = { name: "Charlie" };
greet.apply(person, ["Hello"]); // Hello, Charlie
```
### Métodos de Conversión y Comparación
- JSON.stringify(): Convierte un objeto JavaScript en una cadena JSON.

```javascript
Copiar código
let obj = { name: "John", age: 30 };
let jsonStr = JSON.stringify(obj); // '{"name":"John","age":30}'
```
- JSON.parse(): Convierte una cadena JSON en un objeto JavaScript.

```javascript
Copiar código
let jsonStr = '{"name":"John","age":30}';
let obj = JSON.parse(jsonStr); // { name: "John", age: 30 }
```
### Métodos de Números
Para trabajar con datos numéricos.

- Number(): Convierte un valor en un número.

```javascript
Copiar código
let num = Number("123"); // 123
```
- parseInt(): Convierte una cadena en un número entero.

```javascript
Copiar código
let num = parseInt("123.45"); // 123
```
- parseFloat(): Convierte una cadena en un número de punto flotante.

```javascript
Copiar código
let num = parseFloat("123.45"); // 123.45
```
- toFixed(): Formatea un número con una cantidad fija de decimales.

```javascript
Copiar código
let num = 123.456;
num.toFixed(2); // "123.46"
```

## Objetos
los objetos son tipos de datos estructurados similares a las listas, para poder acceder a un elemnto de la lista javascript les asignaba indices, en este caso los objetos como unica diferencia de la lista nosotros podremos asignar el nombre del elemento al cual deseamos acceder a esto se le conoce como `clave:valor`.
cada clave valor es un elemento de un objeto si deseamos crear mas elementos tendremos que separarlos por comas.
### creacion
para crear un objeto debemos encerrar los elementos en llaves `{}` cada elemto estara coformado por su `clave:valor`.
```js
let datosJory=["jory","rodriguez",20,"m"]
let datosJoryObjeto={
  nombre:"jory",
  apellido:"rodriguez",
  edad:20,
  sexo:"m"
  ganado:["el primo","los chamos","las enfermeras","mineros"]
  direccion:{
    tipoCalle:"pasaje",
    nombreCalle:"querobamba",
    numeroVivienda:222,
    numeroCuarto:5
  },
  accion:()=>{console.log("hola soy jory")}
}
```
## acceder de un elemento del objeto
### metodos
