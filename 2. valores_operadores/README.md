# Valores, Tipos y Operadores
## Indice
- [Valores, Tipos y Operadores](#valores-tipos-y-operadores)
  - [Indice](#indice)
  - [valores](#valores)
      - [datos primitivos](#datos-primitivos)
      - [-numeros(number)](#-numerosnumber)
      - [numeros especiales](#numeros-especiales)
      - [aritmetica](#aritmetica)
## valores
Imaginen un mar de bits .
Una computadora moderna tiene mas de 100 mil millones de bits almacenados en su `memoria de trabajo` o `memoria principal` o `memoria volatil` o `ram`.
Ahora la memoria no volatil o memoria secundaria tiene estos bits de manera ordenada generalmente apilada como si de un estante de una biblioteca se tratara.

cuando nosotros programamos hacemos uso de`memoria de trabajo`, para trabajar de manera ordenada con los bitd que se encuentran en nuestro mar de bits, javascript ordena los bits en pequeñas partes o piezas de informacion a esto se lo conoce como`valores`cada valor tiene una funcionalidad distinta puede ser numero un textoo una funcion .

cuando hablamos de tipos de datos en javascript nos referimos a su representacion
 binaria y al tipo de valor que usamos
#### datos primitivos
son aquellos datos que ya existen no pueden ser creados, actualizados ni eliminados solo pueden ser llamados para el uso que deseamos darle.
#### -numeros(number)   
los valores de tipo numero , como es de esperar son numeros  y en javasript se escribe o se hacer el lllamado de este valor de los siguiente manera 
js
20
// estamos usando un patron de bits para en numero 20 que existira  dentro de la memoria  de trabajo

-numero de punto flotante decimal fraccion 
```js
2.7
0.
.0
```
```js
// dato numerico de tipo entero
// entero positivo
23
// entero negativo
-23
//decimal positivo
0.
//decimal negativo
-3,6
```
>[!TIP]
>cuando javasript hace trabajo de memoria (cuando crea un patron de bit para alamacenar) todos numeros son almacena como decimal positivo.
- numero notacion cientifica
js
2.338e8
// 2.998 * 10^8

>[!WARNING]
>cuando js realiza operaciones con numeros enteros el resul,tado siempre sera exacto, cuando realice operaciones con numeros decimales el resultado perdera precision pór que solo tiene 64 bit para almacenar el numero esto suele ocurrir a cuyos decimales sean infinitos como el caso el numero PI ##es nuestra responsabilidad como programadoreshacer el uso de los decimales con aproximadamente para evitar errores##.

> [!TIP]
> cuando javascript hace trabajo de memoria (cuando crea un patron de bit para almacenar) todos los numeros son almacenados como decimal positivo.
js
// dato numerico de tipo entero
// entero positivo 
23
// entero negotivo
-23
// decimal positivo
.0
// decoimal negativo
-3,6
#### numeros especiales
en js ewxisten tres valores de tipo numero que se consideran un dato primitivo numerico de tip0o especial.
```js
Infinity
- Infinity
NaN // not a number
// no es un numero
// cuando el resultado de una operacion es matematicamente imposible.
```
#### aritmetica
la principal operacion que se puede hacer con numeros es la aritmetica.
para esto tenemos los epradores aritmeticos como:
- suma (+). 
- resta (-).
- multiplicacion (*).
- divicion (/).
- potencia (**).
- modulo (%).
**podemos agrupar operadorescon parentesisi () las operaciones que este entre los parentesis se ejecutara primero**
consulta el archivo de operadores [aqui](./operadores.js).ve los ejercicios aqui [aqui](./ejercicios.js)



- tipos (tipos de datos)
- operadores



