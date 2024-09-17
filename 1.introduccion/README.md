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
1. *Una sola linea*js
   //comentario de una sola linea
   
2. *Multiples lineas*js
   /*
   comentario de multi
   linea
   */
   
3. *JSDoc*js/**
    * este es una linea
    * esta es otra linea
    */
   
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