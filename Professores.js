let numeroprofessores = 6;

let listaprofessores= ["philip", "rose","liu", "gustavo", "duda", "marcelo"];

let contadores=0;

while (contadores < listaprofessores.length) {
// for (let contadores = 0; contadores < listaprofessores.lenght; contadores++) {
// console.log (contadores )
// }
// if (contadores ==0){
//  console.log( contadores + " ZERO");   //concatenação
//  } else if(contadores % 2!=0) {
// console.log (`${contadores}: ÌMPAR`); // Interpolação- Template Strings 
//  }else{
//  console.log (`${contadores}: PAR`); 
// }
    contadores ++; 
}
for (let contadores = 0; contadores < listaprofessores.lenght; contadores++) {
 console.log (contadores )
}
if (contadores ==0){
  console.log( contadores +" ZERO" + listaprofessores[contadores]);   //concatenação
  } else if(contadores % 2!=0) {
console.log (`${contadores}: ÌMPAR:${listaprofessores[contadores]}`); // Interpolação- Template Strings 
}else{
console.log (`${contadores}: PAR`); 
}