let edad=Number(prompt("ingrese su edad"));
if (edad>=18) {
alert ("usted es mayor de edad");

}

let TieneCedula=String(prompt("tiene cedula? (si,no)"));
if (edad>=18 && TieneCedula=="si") {
    alert("Puede votar");
}
else {
    alert("No puede votar");
}
let calificacion=Number(prompt("ingrese su calificacion entre 0 y 100"));
if (calificacion>=90) {
    alert("aprobado con honores");
}
else if (calificacion>=70) {
    alert("aprobado");
}
else {
    alert("reprobado");
}

let numero=Number(prompt("ingrese un numero"));
if ((numero%2)==0 ) {
    alert("su numero es par");
}
else {
    alert("su numero es impar");
}

let monto=Number(prompt("ingrese el monto total de su compra"));
let descuento=0;
let respuesta=0;
if (monto>100) {
    descuento=monto*0.1
}
else  {
    descuento=0
}
respuesta=monto-descuento;
alert("su precio final es " +respuesta);

//el floor redondea hacia abajo y el math random solo genera entre 0 y 1//
let numeroAleatorio= Math.floor(Math.random()*11);
let numeroUsuario=Number(prompt("ingrese un numero para adivinar"));
if (numeroUsuario==numeroAleatorio){
    alert("¡felicidades, adivinaste el numero!");
}
else {
    alert("lo siento, el numero era: " + numeroAleatorio);
}