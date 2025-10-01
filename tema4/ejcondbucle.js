function EjercicioBucle() {
  /*Crea un programa en JS que muestre la tabla de multiplicar de los números del 1 al 9
Salida en consola:
Tabla de multiplicar del 1:
1x1 =1
1x2 =2*/
  for (i = 1; i <= 9; i++) {
    console.log("Tabla de multiplicar del " + i);
    for (j = 1; j <= 10; j++) {
      console.log(`${i}X${j}=${i * j}`);
    }
  }

  let a = 5;
  let b = 6;

  cadena = "Mi hijo tiene " + a + "años";
  cadena2 = `Mi hijo tiene ${a} años`;
}

function Ejercicio5() {
  /*Pida al usuario a través de prompts los datos de nombre, apellidos, salario
(número que puede tener decimales) y edad (número). Valida las entradas y
vuelve a pedirlas si es necesario.
• Se debe escribir por consola el nombre, apellidos, edad y salario una vez
recalculado según lo siguiente:
o Si el salario es mayor de 2000 euros, no cambiará
o Si el salario está entre 1000 y 2000:
▪ Si además la edad es mayor de 45 años, se sube al salario un 3%
▪ Si la edad es menor de 45 o igual, se sube al salario un 10%
o Si el salario indicado es menor de 1000
▪ Los menores de 30 años cobrarán exactamente 1100 euros
▪ Si la edad es de 30 a 45 años, el salario sube un 3%
▪ A los mayores de 45 años, sube un 15%*/
  let nombre;
  let apellidos;
  let salario;
  let edad;
  do {
    nombre = prompt("Introduce tu nombre");
  } while (nombre == "" || nombre == null);
  do {
    apellidos = prompt("Introduce tus apellidos");
  } while (apellidos == "" || apellidos == null);
  do {
    salario = parseFloat(prompt("Introduce tu salario"));
  } while (isNaN(salario));
  do {
    edad = parseInt(prompt("Introduce tu edad"));
  } while (isNaN(edad));

  if (salario < 2000 && salario > 1000) {
    if (edad > 45) {
      salario = salario + salario * 0.03;
    }
    if (edad <= 45) {
      salario = salario + salario * 0.1;
    }
  }
  if (salario < 1000) {
    if (edad < 30) {
      salario = 1100;
    }
    if (edad > 30 && edad < 45) {
      salario = salario + salario * 0.03;
    }
    if (edad > 45) {
      salario = salario + salario * 0.15;
    }
  }
  alert(
    "El cliente " +
      nombre +
      " con apellido " +
      apellidos +
      " con edad " +
      edad +
      " tiene un salario de " +
      salario
  );
}

function Ejercicio6() {
  /*Crea un programa que convierta una temperatura de grados Celsius a grados
Fahrenheit o viceversa, según la elección del usuario.
• Solicita al usuario que elija el tipo de conversión: de Celsius a Fahrenheit o de
Fahrenheit a Celsius.
• Solicita al usuario que ingrese la temperatura que desea convertir.
• Muestra el resultado de la conversión al usuario.
Ejemplo de entrada: ¿Qué tipo de conversión deseas realizar? (1 para Celsius a
Fahrenheit, 2 para Fahrenheit a Celsius): 1, Inserta la temperatura en grados
Celsius: 25
• Salida esperada: 25 grados Celsius equivalen a 77 grados Fahrenheit*/
  let eleccion;
  let grado;
  let gradoconver;
  do {
    eleccion = parseInt(
      prompt(
        "¿Qué tipo de conversión deseas realizar? 1 para Celsius a Fahrenheit, 2 para Fahrenheit a Celsius"
      )
    );
  } while (isNaN(eleccion));

  if (eleccion == 1) {
    grado = prompt("Inserta la temperatura en grados Celsius");
    gradoconver = grado * 1.8 + 32;
    alert(
      grado +
        " grados Celsius equivalen a " +
        gradoconver +
        " grados Fahrenheit"
    );
  }
  if (eleccion == 2) {
    grado = prompt("Inserta la temperatura en grados Fahrenheit");
    gradoconver = (grado - 32) / 1.8;
    alert(
      grado +
        " grados Fahrenheit equivalen a " +
        gradoconver +
        " grados Celsius"
    );
  }
}

function Ejercicio7() {
  /*Crea un script que pida al usuario un numero entero positivo N mayor a 0.
Hay que controlar que el numero introducido sea correcto. Si no es así se volverá a
pedir.
A continuación, debe realizar lo siguiente:
a) Calcular los divisores del número N y mostrarlos.
b) Calcular la suma de los cuadrados de los divisores obtenidos en el paso anterior
y mostrarla.
c) Indicar si esa suma es un cuadrado o no (con una frase por pantalla)
NOTA: NO se pueden usar arrays en este ejercicio*/
  let n;
  let divisores = 0;

  do {
    n = parseInt(prompt("Introduce un número entero positivo"));
  } while (isNaN(n) || n <= 0);

  for (i = 1; i <= n; i++) {
    if (n % i == 0) {
      console.log(i);
      divisores += i * i;
    }
  }
  console.log("La suma de los cuadrados de " + n + " es " + divisores);
  resultado = Math.sqrt(divisores);
  if (Number.isInteger(resultado)) {
    console.log("Esta suma es un cuadrado");
  } else {
    console.log("Esta suma no es un cuadrado");
  }
}

function Ejercicio8() {
  /*Escribe un programa que solicite al usuario dos números y luego muestre todos
los números primos que hay entre esos dos números, incluyendo los extremos.
• Solicita al usuario que ingrese dos números enteros.
• Encuentra todos los números primos en el rango entre los dos números
insertados, incluyendo esos dos números.
• Ejemplo de entrada: Inserta el primer número: 10, Inserta el segundo número: 20.
• Salida esperada: Los números primos entre 10 y 20 son: 11, 13, 17, 19.
NOTA: NO se pueden usar arrays en este ejercicio*/
  let x;
  let y;
  let grande;
  let pequeño;
  do {
    x = parseInt(prompt("Introduce el primer numero"));
  } while (isNaN(x));
  do {
    y = parseInt(prompt("Introduce el segundo numero"));
  } while (isNaN(y));
  if(x>y){
    grande=x;
    pequeño=y;
  }else{
    grande=y;
    pequeño=x;
  }
  for(i=pequeño;i<=grande;i++){
    for(j=pequeño;j<=grande;j++){
        if(i%j==0){
            console.log("El numero no es primo");
        }else{
            
        }
    }
  }
 

}

function Ejercicio9() {
  /*Haz un programa que implemente un juego para encontrar un número aleatorio
bajo las premisas que se explican a continuación
• El programa genera un número entero aleatorio entre 1 y 100
Se le debe pedir al usuario que adivine el número. Controla que el usuario
introduzca un número y si no es así vuelve a pedirlo.
• Si el número introducido por el usuario coincide con el número aleatorio, se
indica con un alert que se acertó, se indica además el número de intentos
realizado y termina el juego
• Si el número introducido no es correcto se le debe indicar al usuario por consola
si es mayor o menor y volver a pedirle otro número
• Si se cancela un cuadro prompt, el juego termina indicando con un alert que se
canceló el juego.
• Una vez terminado el juego se debe permitir al usuario comenzar un nuevo juego
usando una ventana de confirmación*/
}
