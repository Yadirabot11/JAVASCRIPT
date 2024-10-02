# Estructura del programa
## Indice
- [interaccion basica con el usuario](#interaccion-basica-con-el-usuario)
- [declaraciones y expresiones](#expresiones-y-declaraciones)
## Interaccion basica con el usuario  
podemos interactuar con el uasuario desde javaScript utilizando un metodo sencillo que biene implementado en los navegadores 
el metodo es conocido como ``o el metodo de ventana este metodo en realidad es un objeto que contiene y almacena varias funciones entre ellas las de mostrar mensajes o pedir datos 
- **alert** - esta funcion nos muestra un mensaje en pantalla 
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
