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