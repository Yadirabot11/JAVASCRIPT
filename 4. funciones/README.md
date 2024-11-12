"# FUNCIONES
- [FUNCIONES](#funciones)
  - [Estructura de una funcion (como se crea una funcion)](#estructura-de-una-funcion-como-se-crea-una-funcion)
  - [Tipos de Argumentos y Parametros](#tipos-de-argumentos-y-parametros)
  - [Argumentos y parametros posicionales](#argumentos-y-parametros-posicionales)
  - [Argumentos y parametros Nominales](#argumentos-y-parametros-nominales)
  - [Tipos de funciones por su notacion](#tipos-de-funciones-por-su-notacion)
    - [Funciones como valor](#funciones-como-valor)
    - [Funcion como declaracion](#funcion-como-declaracion)
    - [Funcion de flecha (arrow function)](#funcion-de-flecha-arrow-function)
    - [Diferencias](#diferencias)
    - [binding](#binding)
  - [la pila de llamadas (call stack)](#la-pila-de-llamadas-call-stack)
  - [CLOSURE o Funciones de cierre  (funciones que retorna)](#closure-o-funciones-de-cierre--funciones-que-retorna)
    - [CLOSURE tipo clase](#closure-tipo-clase)
    - [prototype (tarea- averiguar y sus ejemplos)](#prototype-tarea--averiguar-y-sus-ejemplos)
# FUNCIONES
Las funciones en javascript son `bloques de codigo ejecutable`, a los que podemos pasar parametros y operar con ellos.
Nos sirve para modular (modularizar) nuestro programa y estructurarlos en bloques que `realicen una tarea concreta`, de esta manera nuestro codigo es mas legible y mantenible. 
Las funciones normalmente, al acabar su ejecucion `devuelven un valor`, que conseguimos con el parametro `return`.

## Estructura de una funcion (como se crea una funcion)
para crear una funcion debemos realizar los siguientes pasos:
1. hacer uso del keyword `function`.
2. darle normbre a la funcion
3. crear los parametros que recibira entre parentesis `()`.
4. crear el cuerpo de la funcion `{}`.
```js
//funcion sin parametros, lleva parentesis igual
function miFuncion(){
    console.log("esta es mi funcion")
}
//funcion con un parametro
function miFuncionParametros(texto){
    console.log("tu parametro es", a)
}
//funcion con varios parametros
function funcionVariosParametros(a,b,c){
    console.log(a + b + c)
}
```
*¿como ejecutamos una funcion?*
Para ejecutar una funcion debemos ahcer el llaamdo de la misma, haciendo uso unicamente de su nombre y los parametros que recibira.
```js
//crear funcion
function saludo(){
    console.log("hola")
}
//ejecutar funcion
saludo()
// o
dunction salu2(texto){
    console.log("hola: ", texto)
}
//ejecutar
salu2("jory")
```
> [!NOTE]
> **Reglas para poner el nombre a una funcion** - Los nombres de las funciones deben representar acciones por lo que deben construirse usando el verbo que representa la accion seguido de un sustantivo representara a la entidad.
```js
function crearUsuario(){

}
function enviarCorreo(){

}
```
## Tipos de Argumentos y Parametros
Es la manera como se remplaza los argumentos con los parametros

## Argumentos y parametros posicionales
Se les llama posicionales por que los argumentos tomara los parametros en el orden que se le pase a la funcion, segun la posicion entre argumento y parametro.
```js
function sumaNumeros(a,b,c,d){
    let suma=a+b+c+d
    return suma
}
```
//argumentos posicionales
```js
let respuesta=sumaNumeros(1,2,3,4)
console.log(respuesta)
//a toma el valor de 1 y asi sucesivamente en el orden que corresponda
```
## Argumentos y parametros Nominales
Se les llama nominales se les conoce a los argumentos que en su creacion se asocian a un parametro en especifico.
```js
//nominal
function registroAlumno(nombre,apellido,sexo){
    let respuesta=`${nombre},${apellido},${sexo}`
    return respuesta
}
registroAlumno(sexo="primo",nombre="edwin",apellido="del mar")
//posicional
registroAlumno("jory", "rodriguez", "todos los dias")
```
> [!INFO] 
> Posicionales en orden y Nominales especificar el parametro y su valor.
## Tipos de funciones por su notacion
### Funciones como valor
En este caso se crea  una funcion como si fuera un valor de un enlace.
```js
let saludo=function(){
    console.log("bienvenido")
}
saludo()
```
En este caso el nombre de la funcion sera el nombre que le  pongamos al enlace y para llamarlo o ejecutarlo debemos poner el nombre del enlace mas los parentesis.
Al igual que una funcion clasica podemos tambien pasarle parametros.
### Funcion como declaracion
Se le conoce como funcion declarativa a la manera clasica de como creamos una funcion.
```js
function saludo(){

}
console.log(saludo())
```
### Funcion de flecha (arrow function)
Esta funcion es introducida a partir de la funcion de ecma script 5 es5.
Se implemento para la creacion y ejecucion rapida y mas entendible de las funciones.
la funcion flecha evita la verbosidad en javascript
> [!NOTE]
> verbosidad o verboso se utiliza en la programacion para referirce a un codigo que necesita demaciadas lineas de codigo o necesita cumplir estrictamente una serie de reglas podemos comprar la verbosidad a un texto demaciado extenso o redunante.
se crea de la misma manera que una funcion como valor, eso quiere decir que la funcion flecha sera el valor de un enlace.
la funcion flecha tiene la siguiente estructura:
el parametro seguido del simbolo flecha `=>` y del cuerpo de ser necesario o solo de codigo que se retornara 
```js
function saludo(){
    return "hola mundo"
}
console.log(saludo())

let saludo=()=>("hola mundo")
console.log(mensaje("el primo"))
//en el caso de tener mas de un parametro y ejecutar mas de una sola linea de codigo
let registroUsuario=(nombre,apellido)=>{
    let alumno=`${nombre},${apellido}`
    return alumno
}
console.log(registroUsuario("edwin","ramos"))
```
### Diferencias
Las diferencias que tenemos al momento de crear una funcion declarativa, funcion como valor y flecha es el binding.
### binding
Es una tecnica que guarda las funciones y varibles (enlaces) sube al principio la declaracion no el valor a la cabecera del archivo javaScript.
```js
despedida()
function saludo(){
    return "hola primo"
}
function despedida(){
    return "adios"
}
```
```js
saludo()
despedida()
```
## la pila de llamadas (call stack)
Es una tecnica que se usa para controlar de manera correcta la ejecucion de una funcion.

**TAREA AVERIGUAR SOBRE LIFO**
LIFO, que significa "Last In, First Out" (último en entrar, primero en salir), es un método de contabilidad de inventarios y gestión de existencias. En este sistema, los últimos artículos que se añaden al inventario son los primeros en ser vendidos o utilizados. Esto puede ser especialmente útil en industrias donde los productos pueden tener una fecha de caducidad o en situaciones donde los costos de adquisición están en constante cambio.

**Ventajas de LIFO:**
1. Reducción de impuestos: En periodos de inflación, LIFO puede resultar en costos más altos para el inventario vendido, lo que puede reducir las ganancias imponibles.
1. Valoración más realista: Puede reflejar mejor el costo actual de los bienes vendidos en entornos inflacionarios.

**Desventajas de LIFO:**
1. Complejidad contable: Llevar un seguimiento de los inventarios puede ser más complicado que con otros métodos, como FIFO (First In, First Out).
2. Valoración de inventarios: El inventario que queda en el balance puede estar valorado a costos más antiguos, lo que puede no reflejar el valor de mercado.

**Ejemplo:**
Imagina que una tienda de electrónica compra tres lotes de un mismo producto a diferentes precios. Si el último lote es el más caro, bajo el método LIFO, ese lote se venderá primero, lo que afectará las ganancias reportadas y el valor del inventario restante.

```js
//programa que haga una ensalada
function cortarTomate() {
    console.log("cortando tomates")
}
function cortarLechuga() {
    console.log("cortando lechuga")
}
function cortarPepino() {
    console.log("cortando pepino para el primo")
}
function cortarLimon() {
    console.log("cortando limon")
}
function prepararEnsalada() {
    cortarTomate()
    cortarLechuga()
    cortarPepino()
    cortarLimon()
    console.log("mezclando las verduras")
}
function comer() {
    prepararEnsalada()
    console.log("tragando la ensalada")
}
comer()
```
## CLOSURE o Funciones de cierre  (funciones que retorna)
Un `closure`es una funcion que encapsula una serie de varibles y definiciones locales que unicamente seran accesibles si son devueltas con la palabra reservada con el keyword `return`.
antes de que aparesca la version `ecma 6` los `closure` eran un patron creacional que nos permita modularizar nuestro codigo en lugar de usar las `clases`, que heran populares en otros lenguajes pero que javascript a un no lo implementaba.
```js
//una funcion que retorna otra funcion (por lo general es una funcion anonima)
//funcion clasica
function retornaValor(n){
    return n+1
}
//llamando a la funcion clasica
retornnaValor(10)
//funcion closure
function retornaValor(n){
    return function(){
        return n+1
    }
}
//llamando a la funcion closure
retornaValor(10)()
```
> [!NOTE]
> las funciones `closure` son usadas por que pueden mantener el valor de sus enlaces o variables locales en todo el proceso de la ejecucion de su funcion padre por cada llamada que se realize.

### CLOSURE tipo clase
son funciones cuyo uso son iguales a las clases dentro de la ejecucion de una clase tenemos lo que se llama como `instancia` en javaScript tenemos funciones `closure` que se pueden instanciar al igual que una clase, la difrencia con las funciones `closure` clasicas es que en esta hacemos uso de la palabra reservada `keyword` llama `this`.
```js
let contador=1
function contador(){
    this.contador=0 
    this.incre=function(){
        this.contador++
    }
    this.decre=function(){
        this.contador--
    }

}
//realizamos la instancia 
let count1=new contador()
count1.contador
for(let i=0;i<5;i++){
    count1.incre()
}
```
> [!NOTE]
> la funcion closure de tipo clase no hace uso de return en sus funciones al hacer uso de `this` cada funcion o variable estara enlazada al objeto que se cree.

> [!WARNING]
>El problema principal de este tipo de funcion, es que cuando creamos un nuevo objeto a partir de la funcion tipo clase, reservara espacio en memoria para toda la clase y su valor creados eso quiere decir variable y funciones, cada vez que llamamos a una funcion esta se replica en memoria.

### prototype (tarea- averiguar y sus ejemplos)
"Prototype" es un término que puede tener varios significados dependiendo del contexto en que se utilice. Generalmente, se refiere a un modelo o versión preliminar de algo que sirve como base para desarrollar versiones futuras. En español, puede traducirse como "prototipo". Aquí te ofrezco una explicación y ejemplos en distintos contextos.

1. En desarrollo de productos y diseño industrial:
Definición: Un prototipo es una primera versión funcional o no final de un producto que se crea para probar conceptos, validar ideas o identificar posibles mejoras antes de la producción en serie.

Ejemplo:

Prototipo de un teléfono móvil: Antes de fabricar un teléfono en masa, los diseñadores y desarrolladores crean un prototipo para probar la ergonomía, la funcionalidad del software y las características del hardware.
2. En programación y desarrollo de software:
Definición: En el ámbito de la programación orientada a objetos, el "prototipo" se refiere a un objeto del cual otros objetos pueden heredar propiedades y métodos. Es una forma de crear nuevos objetos basándose en un objeto existente.

Ejemplo:

Prototype en JavaScript: JavaScript utiliza un modelo basado en prototipos, lo que significa que los objetos pueden heredar directamente de otros objetos. Por ejemplo, un objeto persona puede ser el prototipo de un objeto empleado, permitiendo que empleado herede características de persona.

"Prototype" es un término que puede tener varios significados dependiendo del contexto en que se utilice. Generalmente, se refiere a un modelo o versión preliminar de algo que sirve como base para desarrollar versiones futuras. En español, puede traducirse como "prototipo". Aquí te ofrezco una explicación y ejemplos en distintos contextos.

1. En desarrollo de productos y diseño industrial:
Definición: Un prototipo es una primera versión funcional o no final de un producto que se crea para probar conceptos, validar ideas o identificar posibles mejoras antes de la producción en serie.

Ejemplo:

Prototipo de un teléfono móvil: Antes de fabricar un teléfono en masa, los diseñadores y desarrolladores crean un prototipo para probar la ergonomía, la funcionalidad del software y las características del hardware.
2. En programación y desarrollo de software:
Definición: En el ámbito de la programación orientada a objetos, el "prototipo" se refiere a un objeto del cual otros objetos pueden heredar propiedades y métodos. Es una forma de crear nuevos objetos basándose en un objeto existente.

Ejemplo:

Prototype en JavaScript: JavaScript utiliza un modelo basado en prototipos, lo que significa que los objetos pueden heredar directamente de otros objetos. Por ejemplo, un objeto persona puede ser el prototipo de un objeto empleado, permitiendo que empleado herede características de persona.
```js
javascript
Copiar código
let persona = {
  nombre: "Juan",
  saludar: function() {
    console.log("Hola, " + this.nombre);
  }
};
```
let empleado = Object.create(persona);  // empleado hereda de persona
empleado.nombre = "Carlos";
empleado.saludar();  // Salida: Hola, Carlos
3. En ciencias y psicología:
Definición: En psicología cognitiva, un prototipo se refiere a la representación mental de la categoría de un objeto o concepto, el cual posee las características más comunes o representativas de esa categoría.

Ejemplo:

Prototipo de un ave: Si te pido que imagines un "ave", lo más probable es que pienses en un pájaro común, como un gorrión o una paloma. Estos serían ejemplos de prototipos de la categoría "ave", porque tienen las características más típicas (plumas, pico, alas, etc.).
4. En metodología de investigación y prueba de ideas:
Definición: Un prototipo también puede ser una prueba preliminar de una idea, plan o solución para explorar su viabilidad antes de comprometerse a un desarrollo más amplio.

Ejemplo:

Prototipo de un servicio: En lugar de lanzar un servicio completo, una empresa podría ofrecer un "prototipo" del servicio a un grupo limitado de usuarios para recoger comentarios y ajustar detalles antes de un lanzamiento masivo.

Resumen:
En cualquier contexto, el prototipo sirve como una versión preliminar o modelo inicial que se utiliza para probar, validar, y mejorar una idea o producto. Los ejemplos pueden variar dependiendo del área de aplicación, pero el principio es el mismo: crear una versión inicial para evaluar la viabilidad y eficiencia antes de avanzar a etapas posteriores de desarrollo.

### prototype 
para crear un prototype tendremos que crear primero nuestra funcion principal que es la encargada de almacenar nuestras variables locales con las que trabajaremos.
luego acederemos al prototype de nuestra funcion creada y el valor o varible de tipo objeto le indicaremos las funciones que tendra nuestra funcion principal que interactuara con njuestra variables locales.
```js
function contador(nombre){
    this.count=0
    this.nombre=nombre
}
contador.prototype={
    incremento:function(){
        this.count++
    },
    decremento:function(){
        this.count--
    },
    mostraDatos:function(){
        return `${this.count}, ${this.nombre}`
    }
}
```
> [!NOTE]
> es una convencion  usar como nombre de nuestra funcion principal, 1. que debe ser singular, 2. que use pascal case

## RECURCION EN FUNCIONES (Tarea)
La recursión es una técnica en programación en la que una función se llama a sí misma para resolver un problema. Es especialmente útil para resolver problemas que pueden ser divididos en subproblemas más pequeños que tienen la misma estructura que el problema original. En otras palabras, un problema recursivo puede descomponerse en una versión más sencilla del mismo problema.

- ¿Cómo funciona la recursión? Una función recursiva tiene dos componentes clave:

1. Caso base: Es la condición que detiene la recursión. Sin un caso base, la función seguiría llamándose a sí misma infinitamente, lo que resultaría en un desbordamiento de pila (stack overflow).
2. Llamada recursiva: Es la llamada a la propia función dentro de sí misma, con un problema más pequeño o simplificado.

Ejemplo básico: Factorial de un número
El factorial de un número n, denotado como n!, se define como el producto de todos los números enteros desde 1 hasta n. Matemáticamente:
- n! = n * (n-1)! con 0! = 1 como caso base.
```JS
def factorial(n):
    # Caso base: si n es 0 o 1, el factorial es 1
    if n == 0 or n == 1:
        return 1
    else:
        # Llamada recursiva
        return n * factorial(n - 1)
    
# Ejemplo de uso
print(factorial(5))  # Output: 120
```
## Propósito de la recursión

La recursión se utiliza para problemas donde el tamaño del problema se reduce en cada llamada recursiva, como:

- Recorrido de estructuras de datos como árboles y grafos.
- Algoritmos de búsqueda y ordenación, como el algoritmo de ordenación rápido (quicksort) o la búsqueda binaria.
- Problemas combinatorios como las permutaciones, combinaciones, o las torres de Hanoi.

La recursión es una herramienta poderosa y elegante en la programación, especialmente cuando el problema se puede dividir en subproblemas de igual naturaleza. Sin embargo, es importante usarla con cuidado y tener en cuenta los límites de profundidad y eficiencia para evitar problemas como el desbordamiento de pila o la ineficiencia en tiempo de ejecución.
## FUNCIONES CALLBACKS (Tarea)
Las funciones callback son funciones que se pasan como argumentos a otras funciones y que se ejecutan en algún momento posterior, cuando se cumpla alguna condición o evento. Es un patrón común en muchos lenguajes de programación, especialmente en lenguajes que manejan de forma asíncrona o de eventos, como JavaScript.

- ¿Qué es una función callback?

Una función callback es simplemente una función que se pasa como argumento a otra función y que luego es ejecutada dentro de esa función externa cuando se cumple una condición específica.

La principal utilidad de las callbacks es que permiten la ejecución de código de forma diferida, es decir, ejecutar una función después de que una operación haya terminado, sin bloquear el flujo de ejecución del programa.

## Ejemplo básico en JavaScript
Un ejemplo típico de callback es el uso de funciones de orden superior, como en este caso, donde una función acepta una callback que se ejecuta al final de una operación:
```JS
function saludar(nombre, callback) {
    console.log("Hola, " + nombre);
    callback(); // Llamamos a la función callback
}

function despedir() {
    console.log("Adiós!");
}

saludar("Carlos", despedir);  // Output: "Hola, Carlos" seguido de "Adiós!"
```
En este ejemplo, saludar es una función que acepta dos parámetros: un nombre y una función callback que se ejecuta después de mostrar el saludo.

Las callbacks son una herramienta poderosa para manejar operaciones asíncronas y eventos diferidos, pero su uso excesivo o incorrecto puede hacer que el código sea más difícil de entender. Es importante utilizarlas correctamente y considerar alternativas como las promesas o async/await en lenguajes que las soportan, para evitar los problemas comunes asociados con el uso de callbacks.

# CLASES
las clases en javascript llegan enla version `ECMAScript 6`, javascript no tenia al igual que otros lenguajes de programacion orientados a objetos la `clase` ya que js se enfoca en la `programacion funcional`, sin embargo con la llegada es `ES6`, javascript adopta ser un lenguaje de programacion multiparadigma, entre ellos la `programacion orientada a objetos` con la llegada de las `clases`
## estuctura de una clase en javaScrip.
Una clase esta separada en tres grandes secciones.
1. el nombre de la clase que debera ser en singular y en pascalCase.
2. debera tener atrubutos (valores, variables) estos deberan ser sustantivos y estar escritos en camelCase.
3. deberan tener metodos (acciones, funciones) estos deberan ser verbos u estar escritos en camelCase.
```js
class Computadora{
    //atributos
    constructor(marca){
        this.marca=""
        this.color=""
        this.tipoCase="tower"
    }
    //metodos
    encender(){
        return"estoy encendiendo"
    }
    apagar(){
        return"estoy cerrando sesion y guardando informacion antes del apagado"
    }
    escribir(){
        return"escribiendo mi informe"
    }
    jugar(){
        return"jugando "
    }
}
//instanciar
let miPc=new computador("gigabyte")
miPc.encender()
```