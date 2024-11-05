//Ejercicio
//crear una funcion que me de un saludo de bienvenida
function saludoBienvenida(){
    console.log("Bienvenido")
}
//funcion como valor
//let saludo=function(){
    console.log("bienvenido");
//}
saludo()
// binding en javaScript lo q hace es subir las funciones declarativas a la cabecera de mi archivo
//function despedida(){
  //  return "adios"
//}
// let saludo
console.log(despedida())
// en el caso de funciones como valor o funciones flecha el binding solo eleva al principio del archivo 
//la declaracion del enlace o variable mas no el valor por eso en estos casos debemos ejecutar las funciones despues de haberlo creado.
let saludo=()=>{return "hola primo"}
console.log(saludo())
//en el caso de la funcion declarativa el binding eleva toda la funcion al principio del archivo por eso podemos ejecutar  la funcion desde cualquier parte del archivo incluso antes de uqe sea creada.
function despedida(){
    return "adios"
}
//ejercicio crear una funcion que almacene una varible contador y podamos con funciones realizar la suma mas uno de esta variable y 
//la resta mas uno de la misma variable ademas de poder tener un funcion que me permita acceder al valor actual y poder mostrarlo.

//let contador=0
//function incremento
//return contador++
//function decremento
//return contador--
//function valorContador
//return contador

function contador(){
    let contador=0
    function incre(){
        return contador++
    }
    function decre(){
        return contador--
    }
    function valueCount(){
        console.log(contador)
    }
    return {
        valueCount,
        incre,
        decre
    }
}
let count1=contador()
for(let i=0;i<5;i++){
    count1.incre()
}
count1.valueCount()

let count2=contador()
for(let i=0;i<5;i++){
    count2.decre()
}
count2.valueCount