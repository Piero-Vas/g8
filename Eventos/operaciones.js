function validarSiEsNumero(numero, tipo) {
    return isNaN(numero)? `Mensaje Error : no se puede ${tipo}`:numero;
}

function sumar(numero1,numero2) {
    const suma = +numero1 + +numero2;
    return validarSiEsNumero(suma, "sumar")
}
function restar(numero1,numero2) {
    const resta = +numero1 - +numero2;
    return validarSiEsNumero(resta, "restar")
}
function multiplicar(numero1,numero2) {
    const multiplicar = +numero1 * +numero2;
    return validarSiEsNumero(multiplicar, "multiplicar")
}
function dividir(numero1,numero2) {
    const dividir = +numero1 / +numero2;
    return validarSiEsNumero(dividir, "dividir")
}