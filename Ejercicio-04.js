// Calcula el promedio de una lista de números
function calcularPromedio(numeros) {
    let suma = numeros.reduce((suma, num) => {
        return suma += num;
    })
    return suma / numeros.length;
}
const numeros = [5, 8, 6, 1];
let promedio = calcularPromedio(numeros);
console.log (promedio);