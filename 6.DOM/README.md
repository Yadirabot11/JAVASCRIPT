# DOM-Document object model
modelo de documento de objeto 
el DOM es un conjunto de utilidades especificamente diseñadas para manipular documentos HTML.

El DOM transforma el archivo HTML en un arbol de nodos jerarquico.facilmente manipulables.

El DOM convierte todo el contenido del archivo HTML en un objeto de javaScript.
- **mi archivo index.html**
```html
<body>
    <h1 id="titulo">titulo</h1>
    <p class="parrafo">este es la descripcion de mi pagina</h1>
    <ul>
        <li>primer elemento</li>
        <li>segundo elemento</li>
        <li>tercer elemento</li>
    </ul>
</body>
```
- **mi archivo script.js**
```javascript
document:{
    Element:body,
    Attr:null,
    Text:null,
    child:[
        {
            Element:h1,
            Atrr:{id:"titulo"},
            Text:"titulo",
            child:null
        },
        {
            Element:p,
            Atrr:{class:"parrafo"},
            Text:"este es la descripcion de mi pagina",
            child:null
        },
        {
            Element:ul,
            Atrr:null,
            Text:null,
            child:[
                {
                    Element:li,
                    Atrr:null,
                    Text:"primer elemento",
                    child:null
                },
                {
                    Element:li,
                    Atrr:null,
                    Text:"segundo elemento",
                    child:null
                },
                {Element:li,
                    Atrr:null,
                    Text:"tercer elemento",
                    child:null
                }
            ]
        }
    ]
}
```
DOM  a demas de realizar el trabajo de convertir un archivo HTML en un objeto de javascript, nos ofrece una `API` (Aplication Programing Interfacez - Interfaz de Programacion de palicaciones).
## Selectores - recorriendo el DOM
los selectores nos permiten obtener o capturar una o varias etiqueta `HTML` incluyendo sus atributos , contenido e hijos si los tuviera etiqueta.

los selectores que podemos utilizar son variados podemos capturar etiquetas atravez de sus atributos como de el nombre de la etiqueta misma.

los selectores son `funciones` si hablamos de poo entonces se puede decir que son `metodos`.
y son los siguientes:
- **getElementById** - devuelve un elemento (etiqueta) que tenga un id especifico.
```html
<p id="uno">primer texto</p>
<p id="dos">segundo texto</p>
```
```js
let parrafo=document.getElementById("dos")
```
- **getElementByClassName** - Devuelve un elemento que tenga una clase especifica.
```html
<h1 id="titulo">titulo</h1>
<p class="parrafo">parrafo uno</p>
<p class="parrafo_dos">parrafo dos</p>
```
```js
let parrafo=documento.getElementClassName("parrafo")
```
- **querySelector** -devuelve el primer elemento que conincida con el selector ingresado puede ser un id, class, name o tag.
```html
<h1 id="titulo">titulo</h1>
<p class="parrafo">parrafo uno</p>
<p class="parrafo_dos">parrafo dos</p>
```
```js
let titulo=document.querySelector("#titulo")
let primerParrafo=document.querySelector(".parraflo")
let segundoParrafo=document.querySelector("#parrafo_dos")
sub subTitulo=document.querySelector("h2")
```
**Averiguar que otros selectores o metodos para recorrer el DOM tiene javaScript**
1. document.querySelector()- Devuelve el primer elemento que coincide con un selector CSS específico.
```js
let element = document.querySelector('.mi-clase');
```
2. document.querySelectorAll()- Devuelve todos los elementos que coinciden con el selector CSS como una NodeList (una lista de nodos).
```js
let elements = document.querySelectorAll('.mi-clase');
```
3. document.getElementById()- Devuelve el elemento con el ID especificado.
```js
let element = document.getElementById('mi-id');
```
4. document.getElementsByClassName()- Devuelve una colección de elementos que tienen una clase específica.
```js
let elements = document.getElementsByClassName('mi-clase');
```
5. document.getElementsByTagName()- Devuelve una colección de todos los elementos con el nombre de etiqueta especificado.
```js
let elements = document.getElementsByTagName('div');
```
6. document.getElementsByName()- Devuelve una colección de elementos con el atributo name especificado (usualmente utilizado para formularios).
```js
let elements = document.getElementsByName('nombre-del-elemento');
```
7. document.children- Devuelve todos los elementos hijos directos del nodo raíz (document).
```js
let children = document.children;
```
8. element.childNodes- Devuelve una lista de todos los nodos hijos (incluyendo texto, comentarios y elementos).
```js
let children = element.childNodes;
```
9. element.children- Devuelve solo los elementos hijos (excluyendo nodos de texto o comentarios).
```js
let children = element.children;
```
10. element.firstChild- Devuelve el primer nodo hijo de un elemento.
```js
let firstChild = element.firstChild;
```
11. element.lastChild- Devuelve el último nodo hijo de un elemento.
```js
let lastChild = element.lastChild;
```
12. element.firstElementChild- Devuelve el primer nodo hijo que es un elemento (ignora nodos de texto, comentarios, etc.).
```js
let firstElementChild = element.firstElementChild;
```
13. element.lastElementChild- Devuelve el último nodo hijo que es un elemento.
```js
let lastElementChild = element.lastElementChild;
```
14. element.nextSibling- Devuelve el nodo hermano siguiente de un elemento (puede ser un nodo de texto, comentario, etc.).
```js
let nextSibling = element.nextSibling;
```
15. element.previousSibling- Devuelve el nodo hermano anterior de un elemento.
```js
let previousSibling = element.previousSibling;
```
16. element.nextElementSibling- Devuelve el siguiente nodo hermano que es un elemento.
```js
let nextElementSibling = element.nextElementSibling;
```
17. element.previousElementSibling- Devuelve el nodo hermano anterior que es un elemento.
```js
let previousElementSibling = element.previousElementSibling;
```
18. element.closest()- Devuelve el primer ancestro (incluyendo el propio elemento) que coincida con el selector especificado.
```js
let closestElement = element.closest('.mi-clase');
```
19. document.createElement()- Crea un nuevo elemento HTML especificado.
```js
let newElement = document.createElement('div');
```
20. document.createTextNode()- Crea un nodo de texto.
```js
let textNode = document.createTextNode('Texto');
```
- **Métodos de recorrido y manipulación adicionales:**
```js
element.appendChild(): Agrega un nodo como hijo del elemento.
element.removeChild(): Elimina un nodo hijo del elemento.
element.replaceChild(): Reemplaza un nodo hijo con otro.
```
## Manipulacion del DOM
- **createElement** - este metodo crea un elemento HTML con el nombre que le pasemos por parametro.
```js
let titulo=document.createElement("h1")
```
- **appendChild** nos permite hacer hijo un elemento dentro de otro
```js
let titulo=document.createElement("h1")
let body=querySelector("body")
body.appendChild(titulo)
```
## Propiedades de los elementos DOM 
- **className** - permite setear o capturar el nombre de la clase que tenga un elemento.
- **id** - los mismos que classeName pero con el atributo id.
- **innerHTML** - devuelve o permite insertar codigo HTML.
- **innerText** - devuelve o permite insertar texto en un elemento.
- **textContent** - nos permite agregar o modificar el contenido de un elemento.
- **value** - nos permite optener o setear valores de un elemento `input` 
## Acciones con elementos en el DOM (averiguar)
1. Acciones para Acceder a Elementos 
- document.getElementById() Obtiene un elemento por su id.
```javascript
let element = document.getElementById('mi-id');
```
- document.querySelector() Obtiene el primer elemento que coincide con un selector CSS.
```javascript
let element = document.querySelector('.mi-clase');
```
- document.querySelectorAll() Obtiene todos los elementos que coinciden con un selector CSS (devuelve una NodeList).
```javascript
Copiar código
let elements = document.querySelectorAll('.mi-clase');
```
- document.getElementsByClassName() Obtiene todos los elementos que tienen una clase específica.
```javascript
let elements = document.getElementsByClassName('mi-clase');
```
- document.getElementsByTagName() Obtiene todos los elementos con el nombre de etiqueta especificado.
```javascript
let elements = document.getElementsByTagName('div');
```
- document.getElementsByName() Obtiene todos los elementos con el atributo name especificado (comúnmente utilizado para formularios).
```javascript
Copiar código
let elements = document.getElementsByName('nombre');
```
2. Modificar Propiedades de Elementos
- Modificar el texto de un elemento:
```javascript
element.textContent = 'Nuevo texto';
```
- Modificar el HTML interno de un elemento:
```javascript
element.innerHTML = '<strong>Nuevo contenido HTML</strong>';
```
- Modificar el atributo id o cualquier atributo de un elemento:
```javascript
element.setAttribute('id', 'nuevo-id');
```
- Modificar los estilos en línea de un elemento:
```javascript
element.style.color = 'red';  // Cambia el color del texto
element.style.backgroundColor = 'blue';  // Cambia el color de fondo
```
3. Crear y Eliminar Elementos
- Crear un nuevo elemento:
```javascript
let newElement = document.createElement('div');
newElement.textContent = 'Este es un nuevo div';
document.body.appendChild(newElement);  // Añadirlo al final del cuerpo
```
- Eliminar un elemento del DOM:
```javascript
let elementToRemove = document.querySelector('.mi-clase');
elementToRemove.remove();  // Elimina el elemento del DOM
```
- Agregar un nuevo hijo a un elemento:
```javascript
Copiar código
let parent = document.querySelector('.padre');
let newChild = document.createElement('p');
newChild.textContent = 'Nuevo hijo';
parent.appendChild(newChild);  // Añadir un hijo al final
```
- Insertar un elemento antes de otro hijo:
```javascript
Copiar código
let newChild = document.createElement('p');
let referenceNode = document.querySelector('.referencia');
parent.insertBefore(newChild, referenceNode);  // Insertar el nuevo hijo antes del nodo de referencia
```
4. Manipular Clases
- Añadir una clase a un elemento:
```javascript
Copiar código
element.classList.add('nueva-clase');
```
- Eliminar una clase de un elemento:
```javascript
Copiar código
element.classList.remove('mi-clase');
```
- Alternar una clase (añadirla si no está presente, eliminarla si lo está):
```javascript
Copiar código
element.classList.toggle('activo');
```
- Verificar si un elemento tiene una clase específica:
```javascript
Copiar código
if (element.classList.contains('mi-clase')) {
  console.log('El elemento tiene la clase');
}
```
5. Trabajar con Atributos
- Obtener el valor de un atributo:
```javascript
Copiar código
let src = element.getAttribute('src');
```
- Establecer un valor en un atributo:
```javascript
Copiar código
element.setAttribute('src', 'nueva-imagen.jpg');
```
- Eliminar un atributo:
```javascript
Copiar código
element.removeAttribute('src');
```
6. Acciones de Recorrido del DOM
- Obtener los nodos hijos de un elemento (todos los nodos, incluidos los de texto):
```javascript
Copiar código
let childNodes = element.childNodes;
```
- Obtener solo los elementos hijos de un nodo:
```javascript
Copiar código
let children = element.children;  // Solo elementos, no nodos de texto
```
- Acceder al siguiente y anterior nodo hermano:
```javascript
Copiar código
let nextSibling = element.nextSibling;  // Hermano siguiente (puede incluir nodos de texto)
let previousSibling = element.previousSibling;  // Hermano anterior
```
- Acceder al siguiente y anterior elemento hermano:
```javascript
Copiar código
let nextElementSibling = element.nextElementSibling;  // Hermano siguiente (solo elementos)
let previousElementSibling = element.previousElementSibling;  // Hermano anterior
```
> [!NOTE] 
> Tecnologias para el procesamiento de texto atravez de marcado `markup` (etiquetas- que nos permite a travez de palabras reservadas darle un estilo o significado al contenido de las etiquqetas). la primera tecnologia fue `xml` despues nace `html`, despues la ultima generacion de tecnologias de marcado de texto `markdown`