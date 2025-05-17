const realizarOperacion= (number, number2, operacion) => {
if (operacion=="suma") {
    return (number+number2);
}
else if (operacion=="resta") {
    return (number-number2);
}
else if (operacion=="multiplicacion") {
    return (number*number2);
} 
else if (operacion=="division") {
    if (number2==0){
        return "No se puede dividir entre 0"
    }
    return (number/number2);
}
else {
    return "esta operacion no es valida"
}
}

let number, number2, operacion
let pregunta
alert("esta es una calculadora ")
alert("ingrese dos numeros y luego la operacion que desea realizar (suma, resta, multiplicacion o division)")
while(operacion!="salir") {
    number=parseInt(prompt("ingrese el primer numero"))
    number2=parseInt(prompt("ingrese el segundo numero"))
    operacion=prompt("Ingrese la operacion")
   alert("El resultado es: " + realizarOperacion(number, number2, operacion))
    pregunta = prompt("Desea realizar otra operacion?")

    if (pregunta == "si") {
        continue
    } else {
        alert("Gracias por usar la calculadora, adios")
        break
    }
}

