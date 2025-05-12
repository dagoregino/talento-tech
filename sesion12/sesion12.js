for(let i = 1; i<=2; i++) {
    alert(i)
}

let i=1
while (i <=2 ){
    alert (i)
    i++;
}
let entrada=prompt("ingrese el texto");
while (entrada != ""){
    entrada=prompt("ingrese el texto")
}
if (entrada=="") {
    alert("finalizo el programa");
}

let numero=0
while (numero >=0 ) {
     numero= parseInt(prompt("Ingrese un numero (negativo para salir)"));
}
     let password;
     let correctPassword = "holaa";


do {
    password=prompt("ingrese su contraseña");
}
 while(password != correctPassword);
console.log ("contraseña correcta, acceso permitido");

let suma =0;
for (let i = 1; i<=100; i++){
    suma=suma+i
}
console.log ("resultado de la suma" + suma)