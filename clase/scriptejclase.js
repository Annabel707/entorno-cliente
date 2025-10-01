
function miFuncion() {
  alert("Hola");
}
function adios() {
  alert("Adios");
}
function Ejercicio1() {}
function Ejercicio2() {}
function Ejercicio3() {}

//Declarando variables
let miNombre;
var miEdad;

miNombre = "Mari Celi";
miEdad = 47;

console.log("Me llamo " + miNombre + " y tengo " + miEdad + " años");

miNombre = 50;

console.log("Me llamo " + miNombre + " y tengo " + miEdad + " años");

function mifuncion() {
  var x = 2;
  if (true) {
    x = 10;
    var y = 4;
  }
  console.log(x); //10
  console.log(y);
  console.log(miEdad);
}
mifuncion();
mifuncion();
function mifuncion2() {
  if (true) {
    let z = 20;
  }
}
mifuncion2();

miNombre = 4;
console.log(miNombre);
miNombre = "casa";
console.log(miNombre);

//Tipo de dato number

let entero = 190;
let decimal = 0.21;

let octal = 0o2765;

console.log(octal);

let hexadecimal = 0xab12;
console.log(hexadecimal);

let binario = 0b10101;
console.log(binario);

let z = 4 / "casa";
console.log(z);

console.log("Hola");
if (isNaN(z)) {
  console.log("Te has equivocado");
}

//Booleanos

let verdad = true;
let mentira = false;

//String
let cadena = "Esto es una prueba";
let otracadena = "Esto es \n una prueba";
console.log(cadena);
console.log(otracadena);

let letra = "a";

//Template String: nueva forma de definir cadenas
let miCadena = `esto es una prueba`;
console.log(miCadena);

miCadena = `Prueba saltando
a otra línea`;
console.log(miCadena);

let nombre = "Mari Celi";
let asignatura = "Cliente";
let texto = `Mi nombre es ${nombre} y doy la asignatura de ${asignatura}`;
console.log(texto);

console.log("9" * 3);
console.log(3 + "2");
console.log("hola" * 3);

let numero1 = 3;
let numero2 = "2";

let suma = numero1 + Number(numero2);
console.log(suma);

suma = Number("3") + Number("2");

let a = 2;
let b = 3;

console.log(String(a) + String(b));

console.log(Number("casa"));

console.log(String(true));
