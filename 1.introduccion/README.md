# Introduccion
- *Temario*
  - [comentarios](#comentarios) 
  - [la consola](#comentarios) 
  - Naining
  
## Comentarios
Es la parte denttro de mi archivo de codigo que no es leido ni ejecutado por el interpetre de js.
> [!TIP]
> Los comentarios nos ayudan a entender nuestro codigo, y en ocasiones podemos usarlos para silenciar temporalmente partes del codigo (comentar un codigo)

### Tipos de Comentario
1. **Una sola linea**
  ```
  //comentario de una sola linea
  ```
   
2. **Multiples lineas**
  ```
  /*comentario de multilinea
  ```
   
1. **JSDoc**
   ```
    /** 
    *este es una linea
    *esta es otra linea
    *
    ```
   
  este tipo de comentario es muy usado para docuemntar el codigo, generalmente usado para la explicacion de funciones y clases en `js`.
  [link del archivo](#comentariosj.s)

## Consola 
la herramienta de java script mas usada, dentro de los navegadores es usada para la [depuracion](#depuracion)  de nuestro codigo.
> [!TIP]
> ##### es la tecnica que nos perimite mostarr el codigo en las distintas faces del desarrollo, verificar que el mensaje mostrado sea el correcto. y verificando que el codigo no tenga errores de sintaxis de logica y precaucion.

### Tipos de mensajes por sonsola
#### 1. Notificadores
mostrar un mensaje por consola
```js
console.log("hola mundo)
```
mostrar un mensaje de estilo y formativo
```js
console.info("mensaje informativo")
```
para mostar un mensaje de estilo o tipo alerta
```js
console.warn("mensaje ide tipo alerta")
```
mostrar un mensaje de estilo o tipo error
```js
console.error("mensaje de error")
```
#### 2. Gestion de tiempo
este tipo de mensaje nos sirve para ver la duracion de ejecucion de nuestro codigo y por optimizarlo 
para hacer uso de esta herramienta tenemos q iniciar la consola con un `time` luego vendra el codigo 
que deseamos ver la duracion y finalmente terminar el time de la consola con `timeEnd()`
```js
edad=18
if(edad >= 18){
    console.warn("heres pulpim")
}
```
#### 3. Tablas
este tipo de mensaje por consola nos muestra la informacion en una tabla.
solo formateara a los datos de tipo `array` y `objetos`.
```js
lenguajes=[
  {nombre:"javascript",extencion:".js"},
  {nombre:"python",extencion:".py"},
  {nombre:"php",extencion:".php"}
]
```
[para los ejemplos has clic aqui](consola.js)

## Naiming
es la tecnica para nombrar variables, funciones y clases dentro de un lenguaje de programacion.
las variables tienen reglas muy especificas que debemos seguir a la hora de designar sus nombres.
### usos incorrectos
- no se pueden usar espacios 
>[!WARNING]
```js
con espacio=45
```
- no usar un numero delante
>[!WARNING]
```js
#incorrecto
1numero=45
```
- Evitar simbolos y `snake_case`
- >[!WARNING]
```js
#Incorrecto
dame$=45
#incorrecto
con_guiones_bajos="no es correcto"
```
### Usos correctos
- Debemos usar nombres que expliquen que aportan esa variable a nuestro codigo.
- - Usar `camelCase`
- >[!INFORMATION]
```js
#Correcto
edadAlumno=45
```