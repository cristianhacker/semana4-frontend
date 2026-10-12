const nombre= document.querySelector("#nombre");
const correo= document.querySelector("#correo");
const celular =document.querySelector("#celular");
const btnEnviar = document.querySelector("#btnEnviar");
const formulario=document.querySelector(".formulario")
btnEnviar.addEventListener('click',boton);

function boton(event){
    event.preventDefault();
    
    // console.log("nombre:"+ nombre.value +
    //     "\nCorreo:"+ correo.value+
    //     "\nCelular:" + celular.value
    // )
    const registro={
        nombre: nombre.value,
        correo: correo.value,
        celular: celular.value,
    };
console.log(registro);

    const newRegistro= JSON.parse(localStorage.getItem("registro")|| "[]");
    newRegistro.push(registro);

    localStorage.setItem("registro",JSON.stringify(newRegistro));
console.log(newRegistro)
    console.log("REGISTRO EXITOSO: ", registro);
    console.log("HISTORIAL DE REGISTROS: ", newRegistro);
    formulario.reset();

    const guardado= localStorage.getItem("registro")
    console.log(guardado)
    console.log(typeof guardado)
}
