const nombre=document.querySelector("#nombre");
const apellido=document.querySelector("#apellido");
const correo=document.querySelector("#correo");
const clave=document.querySelector("#clave");
const btn=document.querySelector("#btnEnviar");
const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", boton);

function boton(event) {
    event.preventDefault();

    let datos = {
        nombre: nombre.value,
        apellido: apellido.value,
        correo: correo.value,
        clave: clave.value,
    };

    let datosMemoria = JSON.parse(localStorage.getItem("datos") || "[]");
    datosMemoria.push(datos);
    localStorage.setItem("datos", JSON.stringify(datosMemoria));
    console.log("DATOS REGISTRADOS CORRECTAMENTE:", datosMemoria);
    formulario.reset();
}
    