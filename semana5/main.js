console.log("------1. Suma-------");
function suma(a,b) {
    let c = a+b
    console.log(c)
}
console.log("------2. Promedio-------");
function prom(a,b,c,d) {

    let p = (a+b+c+d)/4;
    console.log(p);
}
console.log("------3. Area Rectangulo-------");
function areaRec(b,h) {

    let arearec=(b*h);
    console.log(arearec);
}
console.log("------4. Area Triangulo-------");
function areaTri(b,h) {
    let areatri=(b*h)/2;
    console.log(areatri);   
}
console.log("------5. Area Circulo-------");
function areaCirculo(r) {
    let areacir= 3.14*r*r;
    console.log(areacir);
}
console.log("------6. Sueldo Semanal-------");
function sueldoSemanal(horasTrabajadas,salarioDia) {
    let sueldoSemanal = horasTrabajadas * salarioDia * 6 ;
    let sueldoHoraHombre = salarioDia / horasTrabajadas;

    console.log("Sueldo semanal: ", sueldoSemanal, "Sueldo Hora Hombre: ", sueldoHoraHombre)
}
console.log("------7. Modista-------");
function modista(metro) {
    let convertir = 39.3701 * metro;
    console.log("Metros :" , metro , "Convertido a pulgadas: ", convertir);
}
console.log("------8. Conversion de moneda -------");
function convertir(soles) {
    let conversion= soles * 0.27;
    console.log("Soles: ", soles, " Dolares: ", conversion);
}

function callMenu() {
    let nro_ejercicio = parseInt(prompt("Ingrese el numero de ejercicio que quiere ejecutar:\r\n 1.Sumar dos numeros \r\n 2.Promedio de Examenes \r\n 3.Calcular área de un rectángulo \r\n 4.Calcular área de un triángulo \r\n 5.área de una circunferencia \r\n 6. Sueldo Semanal \r\n 7.Convertir metros en pulgadas \r\n 8. Cambio de Dolares a Soles \r\n 9.Edad de los Trabajadores \r\n 10.Persona Menor \r\n11.Bono por antiguedad"
    ))    
    if(isNaN(nro_ejercicio)){
        alert("Por favor ingrese un valor");
    }else{
        MenuEjercicios(nro_ejercicio);
        callMenu();
    }
    
}
function MenuEjercicios(nro_ejercicio){
    switch (nro_ejercicio) {
        case 1:
            let valor1  = parseFloat(prompt("Ingrese el valor a sumar : "));
            let valor2 = parseFloat(prompt("Ingrese el valor a sumar : "));
            alert(ej1_sumarValores(valor1, valor2));
            console.log(ej1_sumarValores(valor1, valor2));
            callMenu();
            break;
        case 2:
            let p1  = parseFloat(prompt("Ingrese el valor a sumar : "));
            let p2 = parseFloat(prompt("Ingrese el valor a sumar : "));
            let p3 = parseFloat(prompt("Ingrese el valor a sumar : "));
            let p4 = parseFloat(prompt("Ingrese el valor a sumar : "));
            alert(ej2_promedioNotas(p1,p2,p3,p4));
            break;
        case 3:
            let base_rec = parseFloat(prompt("Ingrese el valor de la base : "))
            let altura_rec=parseFloat(prompt("Ingrese el valor de la altura : "));
            alert(ej3_areaRectangulo(base_rec, altura_rec));

        case 4:
            let base  = parseFloat(prompt("Ingrese el valor de la base : "));
            let altura = parseFloat(prompt("Ingrese el valor de la altura: "));
            alert(ej4_areaTriangulo(base, altura));
        case 5:
            let radio = parseFloat(prompt("Ingrese el valor del radio: "));
            alert(ej5_areaCirculo(radio));
        case 6:
            let horas = parseFloat(prompt("Ingrese horas trabajadas"));
      let salario = parseFloat(prompt("Ingrese salario por hora"));
      alert("El salario semanal es:  " + ej6_sueldoSemanal(horas, salario));
      break;
        case 7:
            let metros = parseFloat(prompt("Cantidad en metros:"));
      alert("cantidad en pulgadas:  " + ej7_convertirMetrosPulgadas(metros));
      break;
        case 8:
            let dolares = parseFloat(prompt("Ingrese cantidad en dolares"));
      let tipoCambio = parseFloat(prompt("Ingrese tipo de cambio"));
      alert("En soles es:  " + ej8_cambioDolaresSoles(dolares, tipoCambio));
      break;
        case 9:
            let año = parseFloat(prompt("ingresa el año de nacimiento: "));
      alert("La edad del Trabajador es: " + eje9_cnacimiento(año));
      break;
        case 10:
            let nombre1 = prompt("ingresa el nombre: ");
      let edad1 = parseFloat(prompt("ingresa la edade: "));
      let nombre2 = prompt("ingresa el nombre: ");
      let edad2 = parseFloat(prompt("ingresa la edade: "));
      let nombre3 = prompt("ingresa el nombre: ");
      let edad3 = parseFloat(prompt("ingresa la edad: "));
      alert(eje10_c_datos(nombre1, edad1, nombre2, edad2, nombre3, edad3));
      break;
        case 11:
            let tiempo = parseFloat(
                prompt("Cuantos años tienes trabajando con nuestra empresa? ")
              );
              alert(eje11_Bono(tiempo));
              break;
    }
}

function ej1_sumarValores(valor1,valor2){

    if(isNaN(valor1) || isNaN(valor2)){
        return "Ingresa Valor";
    }else{
        return valor1 + valor2;
    }    
}
function ej2_promedioNotas(p1,p2,p3,p4){
    
    if(isNaN(p1) || isNaN(p2) || isNaN(p3) || isNaN(p4)){
        return "Ingresa Valor";
    }else{
        return (p1 + p2 + p3 + p4)/4 ;
    }
}
function ej3_areaRectangulo(base_rec, altura_rec) {
    if(isNaN(base_rec) || isNaN(altura_rec)){
        return "Ingresa Valor";
    }else{
        return (base * altura);
    } 
}
function ej4_areaTriangulo(base, altura) {
    if(isNaN(base) || isNaN(altura)){
        return "Ingresa Valor";
    }else{
        return (base * altura)/2;
    } 
}
function ej5_areaCirculo(radio) {
    return radio*radio*3.14 
}
function ej6_sueldoSemanal(a, b) {
    if (isNaN(a) || isNaN(b)) {
      return "Por favor ingresar valores";
    } else {
      return a * b;
    }
  } 
  function ej7_convertirMetrosPulgadas(a) {
    if (isNaN(a)) {
      return "Por favor ingresar valor";
    } else {
      return (a / 0.0254).toFixed(2);
    }
  }
  function ej8_cambioDolaresSoles(a) {
    if (isNaN(a)) {
      return "Por favor ingresar valor";
    } else {
      return a * 3.66;
    }
  }
  let eje9_cnacimiento = (año) => {
    if (isNaN(año)) {
      return "por favor ingresa valor";
    }
    let date = new Date();
    let year = date.getFullYear();
    return year - año;
  };
  let eje10_c_datos = (n1, e1, n2, e2, n3, e3) => {
    if (isNaN(e1) || isNaN(e2) || isNaN(e3)) {
      return "por favor ingresa valor";
    } else if (e1 < e2 && e1 < e3) {
      return (
        "La persona de menor edad tiene: " + e1 + " años y su nombre es: " + n1
      );
    } else if (e2 < e1 && e2 < e3) {
      return (
        "La persona de menor edad tiene: " + e2 + " años y su nombre es: " + n2
      );
    } else {
      return (
        "La persona de menor edad tiene: " + e3 + " años y su nombre es: " + n3
      );
    }
  };
  let eje11_Bono = (año) => {
    if (isNaN(año)) {
      return "por favor ingresa valor";
    }
    if (año == 1) {
      return "El bono que te corresponde es $100";
    } else if (año == 2) {
      return "El bono que te corresponde es $200";
    } else if (año == 3) {
      return "El bono que te corresponde es $300";
    } else if (año == 4) {
      return "El bono que te corresponde es $400";
    } else if (año == 5) {
      return "El bono que te corresponde es $500";
    } else {
      return "El bono que te corresponde es $1000";
    }
  };




