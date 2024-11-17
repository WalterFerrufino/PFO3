// 1: Calcular el área de un rectángulo
function calcularAreaRectangulo(longitud, ancho) {
    return longitud * ancho;
}

// Ejemplos:
console.log("Solución 1:");
console.log(calcularAreaRectangulo(2, 4)); // 8
console.log(calcularAreaRectangulo(5, 12)); // 60
console.log(calcularAreaRectangulo(9.1, 2.2)); // 20.02
console.log("///////////////");

/*
El área de un rectángulo se obtiene multiplicando la longitud por el ancho. 
La función recibe ambos valores y retorna directamente el cálculo.
*/

// 2: Contar palabras en una cadena
function contarPalabras(cadena) {
    var cadenaLimpia = cadena.trim();
    var palabras = cadenaLimpia.split(" ");
    var cantidadPalabras = palabras.length;
    return cantidadPalabras;
}

// Ejemplos:
console.log("Solución 2:");
console.log(contarPalabras("El Obelisco es un ícono de Buenos Aires")); // 8
console.log(contarPalabras("Tu esfuezo va a valer la pena!")); // 7
console.log(contarPalabras("Mi hijo es lo mejor de la vida")); // 8
console.log("///////////////");

/*
Para contar palabras, eliminamos espacios extra con trim(), dividimos la cadena en palabras con split()
y luego contamos cuántos elementos tiene el array resultante.
*/

// 3: Invertir una cadena
function invertirCadena(cadena) {
    return cadena.split("").reverse().join("");
}

// Ejemplos:
console.log("Solución 3:");
console.log(invertirCadena("hamburguesas")); // "saseugrubmah"
console.log(invertirCadena("milanesas")); // "sasenalim"
console.log(invertirCadena("pizzas")); // "sazzip"
console.log("///////////////");

/*
Para invertir una cadena, la convertimos en un array con split(), invertimos el array con reverse() 
y luego volvemos a unirlo con join().
*/

// 4: Encontrar el palíndromo
function esPalindromo(cadena) {
    const cadenaInvertida = cadena.split("").reverse().join("");
    return cadena === cadenaInvertida;
}

// Ejemplos:
console.log("Solución 4:");
console.log(esPalindromo("oro")); // true
console.log(esPalindromo("asado")); // true
console.log(esPalindromo("oso")); // false
console.log("///////////////");

/*
Para verificar si una cadena es un palíndromo, comparamos la cadena original con su versión invertida. 
Si coinciden, es un palíndromo.
*/

// 5: Convertir la edad de un perro a años humanos
function edadCanina() {
    const edadPerro = prompt("¿Cuántos años tiene tu perro?");
    console.log(`Tu perro tiene ${edadPerro * 7} años humanos.`);
}

// Ejemplo:
console.log("Solución 5:");
edadCanina(); // Muestra el mensaje después de solicitar un valor.
console.log("///////////////");

/*
Pedimos al usuario la edad del perro con prompt(). Calculamos la edad canina multiplicando por 7 y mostramos el resultado en la consola.
*/
