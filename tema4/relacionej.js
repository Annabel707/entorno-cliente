//ej 1
function ejercicio1() {
  let nombre = prompt("¿Cual es tu nombre?");
}

//ej 2
function ejercicio2() {
  let numeroA = prompt("Introduce un primer numero");
  let numeroB = prompt("Introduce un segundo numero");

  alert("La suma de los numeros es " + (numeroA + numeroB));
  alert("La resta de los numeros es " + (numeroA - numeroB));
  alert("La multiplicacion de los numeros es " + numeroA * numeroB);
  alert("La division de los numeros es " + numeroA / numeroB);
  alert("El resto  de los numeros es " + (numeroA % numeroB));
}

//ej 3
function ejercicio3() {
  alojamiento = Number(prompt("Introduce el precio estimado del alojamiento"));
  alimentacion = Number(prompt("Introduce el precio estimado de alimentacion"));
  entretenimiento = Number(
    prompt("Introduce el precio estimado de entretenimiento")
  );
  total = alojamiento + alimentacion + entretenimiento;
  alert("El precio total es " + total);
}
//ej 4
function ejercicio4() {
  precio = Number(prompt("Introduce el precio"));
  descuento = Number(prompt("Introduce el porcentaje del descuento"));
  precioTotal = precio - (descuento / 100) * precio;
  precioRedondeado = precioTotal.toFixed(2);

  alert("El precio final del producto es " + precioRedondeado);
}
