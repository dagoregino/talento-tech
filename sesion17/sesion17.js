function validation(){
    const nombre=document.getElementById('nombre').value;
    const correo=document.getElementById('correo').value;
    if(correo==='' || nombre ==='') {
        alert("por favor completa todos los datos");
        return false;
    } else{
        alert("formulario enviado correctamente");
        return true;
    }
}