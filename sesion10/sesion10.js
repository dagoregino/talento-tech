//el prompt es para pedir datos//
let nombre=prompt("ingrese su nombre");
let edad=Number(prompt("ingrese su edad"));
let esEstudiante= true;

console.log("hola " ,nombre);
alert ("Hola " +nombre);
console.log("edad: " ,edad);
alert ("edad: " +edad);
console.log ("es estudiante: " ,esEstudiante);
alert("es estudiante: " + esEstudiante);

let a=Number(prompt("ingrese el primer numero"));
let b=Number(prompt("ingrese el segundo numero"));

let suma=a+b;
let resta=a-b;
let multiplicacion=a*b;
let division=a/b;

console.log ("suma: " ,suma);
alert ("suma: " +suma);

console.log ("resta: " ,resta);
alert ("resta: " +resta);

console.log ("multiplicacion: " ,multiplicacion);
alert ("multiplicacion: " +multiplicacion);

console.log ("division: " ,division);
alert ("division: " +division);

console.log ("son iguales: " ,(a==b));
alert ("son iguales: " +(a==b));

console.log ("son diferentes: " ,(a!=b));
alert ("son diferentes: " +(a!=b));

console.log ("a mayor que b: " ,(a>b));
alert ("a mayor que b: " +(a>b));

console.log ("a menor que b: " ,(a<b));
alert ("a menor que b: " +(a<b));

console.log ("a mayor igual que b: " ,(a>=b));
alert ("a mayor igual que b: " +(a>=b));

console.log ("a menor igual que b: " ,(a<=b));
alert ("a menor igual que b: " +(a<=b));

let esMayorDeEdad=true;
let esTieneLicencia=false;

let puedeConducir= esMayorDeEdad&&esTieneLicencia;
let noPuedeConducir=esMayorDeEdad||esTieneLicencia;

console.log ("puede conducir: " ,puedeConducir);
console.log("No puede conducir: " ,noPuedeConducir);

