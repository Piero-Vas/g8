let g1 = ['Piero','Alexander','Diego','Andree','Bruno','Martin','Alberto','Eddy','Flavio','Fernando'];
let g2 = ['Piero','Alexander','Diego','Andree','Bruno','Martin','Alberto','Eddy','Flavio'];
let g3 = ['Piero','Alexander','Diego','Andree','Bruno','Martin','Alberto','Eddy'];
let g4 = ['Piero','Alexander','Diego','Andree','Bruno','Martin',];
console.log(g1.length);
console.log(g2.length);
console.log(g3.length);
console.log(g4.length);
console.log("================================");
console.log("Grupo1");
console.log(g1)
g1[0]='Rodrigo';
console.log(g1)
console.log("Grupo2");
console.log(g2);
g2[0]='Alberto';
console.log(g2);
console.log("Grupo3");
console.log(g3);
g3[0]='jake';
console.log(g3);
console.log("Grupo4");
console.log(g4);
g4[0]='Frank';
console.log(g4);
console.log("================================");

function arreglo2(g2) {
   return g2;
}
console.log(arreglo2(g2));