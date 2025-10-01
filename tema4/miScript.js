console.log("Mensaje para guiarme");
console.info("Mensaje de información");
console.warn("Mensaje de aviso");
console.error("Mensaje de error");

console.groupCollapsed("bloque1");
console.warn("Mensaje de aviso aplicación");
console.info("Mensaje de info");
console.error("Mensaje de error");
console.groupEnd();

function LimpiarConsola() {
  console.clear();
}
//alert ("Esto es un mensaje de alerta");
//let respuesta = confirm("¿Quieres borrar?");
//console.log(respuesta);

//if(respuesta){
//    LimpiarConsola();
//}

let usuario;

//usuario = prompt("Introduce tu nombre"); //String
//alert ("Tu nombre es " + usuario);

//let edad, futuro;
//edad=parseInt(prompt("Introduce tu edad"));
//futuro=edad +10;
//console.log(edad);

function AlertaNormal() {
  alert("Hola Mundo");
}
function DocumentWrite() {
  document.writeln("<h1>Hola Mundo</h1>");
}

let numero = 4;
console.log(typeof numero);

//isInteger

let numero1 = 4.5;
console.log(Number.isInteger(numero1));

//toFixed

let pi = 3.1415;
let redondeo = pi.toFixed(2);
console.log(redondeo);

//toPrecision
let numDecimal = 25.3458;
let numPrecision = parseFloat(numDecimal.toPrecision(3));
console.log(numPrecision + 1);

//toString
let num = 255;
let cadena = num.toString();
console.log(cadena);

//isNaN

let x = "casa";
console.log(isNaN(x));

//condicionales

let precio = 600;
if (precio < 1000) {
  console.log("Hemos entrado en el if");
} else {
  console.log("No hemos entrado");
}

var dia = prompt("¿Qué día de la semana es?");
if (día == lunes) {
  console.log("Buenas, hoy es lunes");
} else if (día == "martes") {
  console.log("Buenas, hoy es martes");
} else {
  console.log("Es otro día");
}

//Switch
var día = prompt("Qué día de la semana es?");
switch (día) {
  case "lunes":
    console.log("lunes");
    break;
  case "martes":
    console.log("martes");
    break;
  default:
    console.log("Es otro día");
    break;
}
//while
let numero2 = parseInt(prompt("Introduce un número"));

while (isNaN(numero2)) {
  numero2 = parseInt(prompt("Introduce un número"));
}

let contador = 1;
let texto = "";
while (contador <= numero2) {
  if (contador == numero2) {
    texto += contador;
  } else {
    texto += contador + ",";
  }
  contador++;
}

console.log(texto);

//do while
let entrada;

do {
  entrada = parseInt(prompt("Introduce un numero entre 1 y 5"));
} while (uisNaN(entrada) || entrada < 1 || entrada > 5);

console.log(`El numero elegido es ${entrada}`);

//for
let numerito;
do{
    numerito = parseInt(prompt("Introduce un entero positivo"));
}while(isNaN(numerito) || numerito<=0);

for(i=1;i<=10;i++){
    console.log(`${numerito} X ${i} = ${numerito*i}`);
}


