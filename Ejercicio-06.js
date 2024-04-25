// Convierte Horas y Minutos a segundos
function convertirASegundos(hora, minutos) {
    let horasASegundos = hora * (60 ** hora);
    let minutosASegundos = minutos * 60;
    return horasASegundos + minutosASegundos;
}
const hora = 2;
const minutos = 30;
const resultado = convertirASegundos(hora, minutos)
console.log (`${resultado} segundos`);