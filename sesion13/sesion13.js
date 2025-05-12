let nombre=(prompt("ingrese su nombre"));
let apellido=prompt("ingrese su apellido")
function saludar (nombre, apellido){
    console.log (`hola ${nombre} ${apellido} desde la funcion saludar estilo function`);
    alert(`hola ${nombre} ${apellido} desde la funcion saludar estilo function`);
}
function sumar (num1, num2) {
   return num1+num2;
 }
const saludarArrow = (nombre,apellido)=> {
    console.log (`hola ${nombre} ${apellido} desde la funcion saludar en estilo const`);
    alert(`hola ${nombre} ${apellido} desde la funcion saludar en estilo const`);
}
saludar (nombre, apellido);
saludarArrow (nombre, apellido);
//al momento de pedir valores numericos es necesario el parseint//
let num1=parseInt(prompt("ingrese el primer numero a sumar y dividir"));
let num2=parseInt(prompt("ingrese el segundo numero"));
let suma=sumar(num1,num2);

alert("el resultado de la suma es" +suma)
//una funcion  callback es una funcion que se pasa como parametro (no se ejecuta) y despues al llamar la funcion original se ejecuta//
 function dividir (num1,num2, imprimirCallback) {
    let division = num1/num2
    imprimirCallback (division);
 }
  dividir(num1,num2, (result) => alert("el resultado de la division es " + result))