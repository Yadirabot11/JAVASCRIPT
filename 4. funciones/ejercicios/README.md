# ejercicio final
1. crear una funcion que debuelva el numero menor pasado por argumrnto
asiendo uso de la recurcion crear una funcion que me muestre los primeros 20 numeros de la serie fibonacci
```js
function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    return fibonacci(n - 1) + fibonacci(n - 2);
}

for (let i = 0; i < 20; i++) {
    console.log(fibonacci(i));
}
```


1. //Función que devuelva el número menor pasado por argumento
```js
function obtenerMenor(...numeros) {
    return Math.min(...numeros);  

// Ejemplo de uso:
console.log(obtenerMenor(10, 5, 3, 8, 15)); 
}
```

//2. Función recursiva para mostrar los primeros 20 números de la serie Fibonacci
```js
function fibonacci(n, a = 0, b = 1) {
    if (n <= 0) return;  // Condición base para detener la recursión
    console.log(a);  // Mostrar el número actual de la serie
    fibonacci(n - 1, b, a + b);  // Llamada recursiva, pasando el siguiente par de números
}
fibonacci(20);
```