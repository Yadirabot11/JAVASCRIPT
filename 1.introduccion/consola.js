
// para mostar texto sin formato texto plano
console.log("mensaje de texto sin formato")
// para mostrar informacion 
console.info("soy informacion")
// mensaje de eeror
console.error("soy un error")
// mensaje de alerta
console.warn("soy alerta")

// mensajeS por consola de gestion de tiempo
console.time("tiempo de ejecucion")
edad=17
if(edad >= 18){
    console.log("heres mayor de edad")
}else{
    console.warn("heres pulpim")
}
console.timeEnd("tiempo de ejecucion")

//mensaje de tipo tabla
console.table("soy una tabla")
lenguajes=[
    {nombre:"javascript",extencion:".js"},
    {nombre:"python",extencion:".py"},
    {nombre:"php",extencion:".php"}
]
console.log(lenguajes)
console.table(lenguajes)