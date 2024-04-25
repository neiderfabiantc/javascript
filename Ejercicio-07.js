// Devuelve las unidades y decenas de un número de dos digitos
function descomponerNumero(numero) {
    let num = String(numero);
    return {
        unidades: num % 10,
        decenas: parseInt(num / 10)
    }
}
let numero = 56;
let {unidades, decenas} = descomponerNumero(numero);
console.log (`Únidades: ${unidades}; Decenas: ${decenas}`);