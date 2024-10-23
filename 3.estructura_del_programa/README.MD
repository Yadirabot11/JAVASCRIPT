# Estructura del programa
## Indice
- [Estructura del programa](#estructura-del-programa)
  - [Indice](#indice)
  - [Interaccion basica con el usuario](#interaccion-basica-con-el-usuario)
  - [Expresiones y Declaraciones](#expresiones-y-declaraciones)
  - [Bindings (enlaces)](#bindings-enlaces)
  - [El Entorno](#el-entorno)
  - [Control de flujo](#control-de-flujo)
    - [Ejecucion Condicional](#ejecucion-condicional)
    - [Bucles](#bucles)
## Interaccion basica con el usuario  
podemos interactuar con el uasuario desde javaScript utilizando un metodo sencillo que biene implementado en los navegadores 
el metodo es conocido como ``o el metodo de ventana este metodo en realidad es un objeto que contiene y almacena varias funciones entre ellas las de mostrar mensajes o pedir datos 
- **alert** - esta funcion nos muestra un mensaje en pantalla.
```js
window.alert("mensaje")
```
- **confirm** preguntar al usuario y ofrecer dos botones quqe se tgraducen en valores booleanos `Aceptar`(true) y `Cancelar` o `Cerrar` (false)
```js
window.confirm(quieres ser mi amiga)
//si deseamos capturar la respuesta almacenaremos el codigo en una variable 
respuesta=window.confirm("quieres salir")
```
- pregunta al usuario y espera que ingrese una respuesta 
```js
window.prompt("como te llamas?")
//si deseamos almacenar la respuesta usaremos una variable
respuesta=window.prompt("como te llamas")
```
## Expresiones y Declaraciones
-**Expresiones** - en jacaScript un fragmento de codigo que produce un valor es llada `Expresion`.Tambien se dise que una `Expresion` es el fragmento de una `Oracion`.
```js
1
"hola"
3*6
5>7
!true
```
- **Declaraciones** - en javaScript es una oracion.
```js
!true;
let estado=!false;
```
## Bindings (enlaces)
cuando creamos un valor estos valores son volatiles solo existen en la ejecucion del programa y solo cuando son llamados.
El bindings o enlace es la manera que javaScript recuerda los valores y mantienen un estado interno asi como la reutilazacion de valores.
**como usamos los bindings en javaScript**.
para usar el bindings primero debemos usar la palabra reservada o `keyword` de nombre `let`, despues debemos darle un nombre para identificar el enlace luego asignarle el valor.
```js
// este es un enlace que puede apuntar a varios valores. 
//como un pulpito con muchos brazos.
let edadPersona = 34

//si deseamos que nuestro enlace solo apunte a un valor osea un pulpito con un brasito entonces para crear este enlace debemos hacer uso de la keyword const.
const edad=45

//este enlace siempre apuntara al valor 45 no podra modificar su enlace a otro valor.
```
> [!NOTE]
**que nombre ponerle a nuestro enlaces** - el nombre de un enlace debera describir el valor al que esta enlasado, y debera estar escrita en `camelCase`
```js
//quiere crear un enlace que tenga el valor de la fecha actual.
//incorrecto 
let yyyymmdd="20240910"
//correcto
let fechaActual="09-10-2024"
//correcto
let edadActualAlumno=34
```
## El Entorno
el entorno es conocido como el momento en el que se ejecuta o inicia un archivo javaScript.
el entorno al crearce no se crea vacio dentro del entorno se crearan la coleccion de enlaces y valores.

**Tarea** - Averiguar mas sobre la ejecucion en linea de los entornos en javaScript.
1. Entornos de Ejecución:
Navegadores Web: Todos los navegadores modernos (Chrome, Firefox, Safari, Edge) tienen motores de JavaScript (como V8 en Chrome) que permiten la ejecución directa del código en el contexto de una página web.
Node.js: Un entorno de ejecución de JavaScript del lado del servidor que permite a los desarrolladores ejecutar código JavaScript fuera del navegador. Ideal para aplicaciones web, APIs, y más.
2. Herramientas de Ejecución en Línea:
CodePen, JSFiddle, y Repl.it: Estas plataformas permiten escribir y ejecutar código JavaScript directamente en el navegador, facilitando la colaboración y la prototipación rápida.
JSBin: Otra herramienta para crear y compartir snippets de JavaScript, HTML y CSS.
3. Ejecución en Línea en Desarrollo:
Browser DevTools: Los navegadores ofrecen herramientas de desarrollo que permiten ejecutar JavaScript en la consola. Esto es útil para pruebas rápidas y depuración.
Live Server: Extensiones para editores como Visual Studio Code que permiten visualizar cambios en tiempo real en el navegador.
4. Frameworks y Librerías:
React, Vue, Angular: Estas bibliotecas y frameworks permiten construir aplicaciones web interactivas y a menudo incluyen herramientas para facilitar la ejecución y el desarrollo en línea.
5. Ejemplos y Tutoriales:
Muchos recursos en línea ofrecen ejemplos prácticos de cómo usar JavaScript en diferentes entornos. Documentaciones como MDN Web Docs son muy útiles para aprender y experimentar.

## Control de flujo
una sentencia se ejecuta como si fuera una historia de arriba abajo.
por ejemplo:
```js
let elNumero = Number(prompt("elige un numero"))
console,log(`tu numero es la raiz cuadrada de: ${elNumero*elNumero}`)
//primero le pide al usuario un numero y despues muestra un mensaje y el cuadrado de ese numero
```
### Ejecucion Condicional
hacemos uso de este control de flujo cuando tenemos distintos caminos o distintos mensajes que deseamos mostrar segun una condicion.
**como creamos una condicion en javaScript**
la ejecucion condicional se crea con la palabra reservada (keyword)
`if` a continuacion de una `condicion` en llaves `{}`  se escribira en cuerpo del codigo que deseo ejecutar en caso la condicion sea `verdad`.
- **condicion simple `if`**
```js
let comparacion=5>4
if true{
  prompt("escribe tu nombre")
}
```
- **condicion simple `if` de una sola linea**
```js
if (1+1==2) console.log("es verdad");
```
- **condicion de doble evaluacion `if else`**
existen casos en los que tendremos que ejecutar un codigo si es verdad pero tambien si es falso. ejecucion condicional de dos caminos.
```js
let edadPersona = 16;
if (edadPersona >= 18){
  console.log("heres mayor de edad");
}else{
  console.log("heres menor de edad");
}
```
-**Condicion multiple `if` `else if`**
se utiliza cuando se tiene que evaluar y devolver varias opciones o multiples respuestas
```js
let total_compra=501
if (total_compra > 50 && total_compra <100){
  console.log("tiene un descuento de 10%")
}
else if (total_compra > 100 && total_compra <500){
  console.log("tienes un descuento del 20%")
}else{
  console.log("tienes un descuento del 50%")
}
```
- **condicion multiple `switch`**
javascript dispone de una opcion para crear estructuras condicionales multiples, este es el switch permite crear estructuras condicionales multiples. switch permite crear estructuras mas optimizadas para cubrir un amplio abanico de posibilidades.Pero es mas tardado que if y else, ocupa mas almacenamiento de memoria.
```js
let edad=Number(prompt("ingresa tu edad: "))
switch (edad){ //igual que if
  case 4: 
    console.log("tienes 4 años")
    break
  case 8:
    console.log("tienes 8 años")
    break
  default: //igual que else
    console.log("tienes:",edad)
    break
}
```

### Bucles
Consideremos el siguiente problema
crear un programa que imprima los numeros del 1 al 12, una forma de hacerlo seria el siguiente:
```js
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)
console.log(11)
console.log(12)
```
El ejemplo anterior es valido pero la idea cuando programamos es hacer menos trabajo y no mas, en el ejercicio anterior tendremos problemas si deseamos mostrar todos los numeros menores a 1000.
Necesitamos una manera de ejecutar un fragmento de codigo multiples de veces. A esta forma de control de flujo se le llama bucle.
Para crear un bucle tenemos dos formas de hacerlo
1. while - para hacer uso de este bucle primero debemos usar la palabra clave while este a su ves como el if devera tener una condicion, si esta condicion sea falsa , el bucle no sera ejecutado , al igual que el if luego de darle la condicion crearemos el cuerpo donde escribiremos el codigo que deseamos ejecutar.
js
while(true){
console.log("hola")
}

2. for - esta es la manera mas abreviada de crear un bucle en javascript , en el caso de while necesitamos una variable contador , luego la condicion y finalmente el aumento del contador. En el caso de for estos tres pasos se realiza en una sola linea.
js
for(let i=2; i<=20; i++){
  if (i %2==0) console.log(i)
}

> [!TIP]
> `while` se usa cuando no sabemos la cantidad de veces que deseamos ejecutar un codigo, por lo general su finalizacion requerira de una intervencion externa.
> `for` se usa cuando sabemos la cantidad de veces que queremos o deseamos ejecutar un codigo.

< [!NOTE] 
< Para terminar un bucle se hace uso de la palabra reservada `break`.
