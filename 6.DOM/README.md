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
## Selectores 
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
> [!NOTE] 
> Tecnologias para el procesamiento de texto atravez de marcado `markup` (etiquetas- que nos permite a travez de palabras reservadas darle un estilo o significado al contenido de las etiquqetas). la primera tecnologia fue `xml` despues nace `html`, despues la ultima generacion de tecnologias de marcado de texto `markdown`.