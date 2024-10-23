console.log("soy 'cadenas'")
// si nuestro texto tiene que estar entre comillas simples
console.log("'este texto se muestra entre comillas simples'")
// si nuestro texto tiene que estar entre comillas dobles
console.log('"este texto se muestra entre comillas dobles"')
// si nuestro texto tendra tanto comillas dobles como simples
console.log('esta en comillas simples',"esta en comillas dobles")

// usando caracter de escape
console.log("de este texto solo esta \"palabra\" estara en comillas")
// salto de linea usando acentos graves 
console.log(`aqui una linea
    aqui la segunda linea`)
// salto de linea antes de es6
console.log("esta es mi primera linea \n y esta es la segunda linea")

// tabulacion de texto con acentos graves
console.log(`
este texto no esta tabulado
    este texto si esta tabulado
    `)
// tabulando con el caracter de escape
console.log("sin tabular \n \t y tabulado")
console.log("esta es una barra ivertida \\")
// concatenando cadenas
console.log("hola"+" "+"mundo")
//usando plantillas literales
console.log("la suma de ${numeroUno} + {numeroDos} es =${numeroUno+numeroDos}")