function imprimir() {
    console.log("Hola mundo");
    
}
function calculadorHtml(operacion) {
    const numero1 = document.querySelector("#numero1").value;
    const numero2 = document.querySelector("#numero2").value;

    if (numero1 === "" || numero2 === "") {
        alert("debes completar datos");
        return;
    }
let resultado =0;

if (operacion === "+") {
    resultado = sumar(numero1,numero2);
}
if (operacion === "-") {
    resultado = restar(numero1,numero2);
}
if (operacion ===  "*") {
    resultado = multiplicar(numero1,numero2);
}
if (operacion ===  "/") {
    resultado = dividir(numero1,numero2);
}
const p = document.createElement("p");
const value = document.createTextNode(resultado);
p.appendChild(value);
const contenedor = document.querySelector("#resultado");
contenedor.appendChild(p)

}