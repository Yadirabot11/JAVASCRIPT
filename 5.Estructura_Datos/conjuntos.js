//crear una lista que almacene las cinco vocales y luego las muestre por consola 
//let vocales = ["a", "e", "i", "o", "u"];
//console.log(vocales);

//acceder a la vocal "o"
//console.log(vocales[3])

//accediendo a los elemntos con for
//for (let i=0; i<vocales.length;i++){
//    console.log(i)
//}

//console.log(vocales.length)

//tengo una lista de 7 frutas 
//crear un programa que identifique que en mi lista existe naranja, de existir me mostrara su indice, de no existir mostrara error
let frutas= ["pera","papaya","naranja","manzana","uva","coco","sandia"]
for (i=0;i in frutas;i++){
    if (frutas[i] == "naranja"){
        console.log("su indice es", i)
        break
    }
    else{
        console.warn("error")
    }
}

//crear dos funciones que reciban por parametros una lista de numeros una funcion encontrara devolvera el numero menor de la lista y la otra funcion encontrara y devolvera el numero mayor de la lista .
//ojo no usar los metodos de min y max

function encontrarMenor(lista) {
    let menor = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] < menor) {
            menor = lista[i]; 
        }
    }

    return menor; 
}

function encontrarMayor(lista) {
    let mayor = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > mayor) {
            mayor = lista[i]; 
        }
    }

    return mayor; 
}

const listaDeNumeros = [3, 5, 1, 9, 2, 8];
console.log("El número menor es:", encontrarMenor(listaDeNumeros)); 
console.log("El número mayor es:", encontrarMayor(listaDeNumeros)); 

//crear una funcion que me permita contar la cantidad de vocales "a" que tengo en una lista 
// let letras=["a","b","a","c","x"]


// function contadorA(array){
//     let cont=0
//     for (i=0;i in letras;i++){
//         if (letras[i]=="a"){
//             cont++
//         }
//         else{
//             console.log("no hay ninguno")
//         }
//     }
//     console.log("Se encuentra ",cont," a")
//     }

// contadorA(letras)


//let texto="hola mundo"
//["hola","mundo"]
//let listaTexto=texto.split("")
//console.log(listaTexto)
//let lista=["hola","como","estas"]
//"hola como estas"
//let nuevoTexto=lista.join(", ")
//console.log(nuevoTexto)
//tengo la siguiente url
//www.gatitas.com/?q=marina+gold
//crear un programa que me capture solo la query "marina gold"
//let url="www.gatitas.com/?q=marina+gold"
//let cortarUrl=url.split("=")
//let obtenerPrimerElemento=cortarUrl[1]
//let divididoTextoEnDos=obtenerPrimerElemento.split("+")
//let juntarTexto=divididoTextoEnDos.join("")
//let listaUrl=url.split("=")[1].split("+").join("")
//console.log(juntarTexto)

//let datosJoryObjeto={
//  nombre:"jory",
//  apellido:"rodriguez",
//  edad:20,
//  sexo:"m",
//  ganado:["el primo","los chamos","las enfermeras","mineros"],
//  direccion:{
//    tipoCalle:"pasaje",
//    nombreCalle:"querobamba",
//    numeroVivienda:222,
//    numeroCuarto:5
//  }
//}
//console.log(datosJoryObjeto.ganado)
//console.log(datosJoryObjeto["sexo"])
//console.log(datosJoryObjeto["numeroVivienda"])
//console.log(datosJoryObjeto.ganado[3])


//ejercicio 
//crear una funcion que genere un objeto de caracteristicas tecnicas de una computadora el objeto debera tener como minimo los siguientes valores 
//marca, modelo, procesador, ram, disco y tarjeta de video
//const computadora=(marca, modelo, procesador, ram, disco)=>{
//    return {
//        marca: marca,
//        modelo: modelo,
//        procesador: procesador,
//        ram: ram,
//        disco: disco,
//    }
//}
//let objetoPc=computadora("los marcas", "maranguita", "xeon","100gbs")
//console.log(objetoPc)
//en este caso la clave marca existe en mi objeto por lo tanto su valor sera actualizado por intel
//objetoPc["marca"]="intel"
//console.log(objetoPc)
//en este caso la clave tarjeta no existe en mi objeto por lo tanto se creara un nuevo elemento con la clave tarjeta y su valor envia 
//objetoPc["tarjeta"]="envidia"
//console.log(objetoPc)

//averiguar como eliminar un elemnto de un objeto
const computadora = {
    marca: "Dell",
    modelo: "XPS 15",
    procesador: "Intel Core i7",
    ram: "16GB",
    disco: "512GB SSD",
    tarjetaVideo: "NVIDIA GTX 1650"
};

// Eliminar la propiedad "tarjetaVideo"
delete computadora.tarjetaVideo;

console.log(computadora);
