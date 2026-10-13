
const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#correo");
const celular = document.querySelector("#celular");

const formulario = document.querySelector(".formulario");
const mensaje = document.querySelector("#mensaje");
const btnCerrar = document.querySelector("#btnCerrar");
const modalEstado = document.querySelector("#modalEstado");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    const registro = {
        nombre: nombre.value,
        correo: correo.value,
        celular: celular.value};
    console.log(registro);

    const newRegistro = JSON.parse(
        localStorage.getItem("registro") || "[]"
    );
    newRegistro.push(registro);
    localStorage.setItem("registro", JSON.stringify(newRegistro));
    console.log("HISTORIAL:", newRegistro);

    
    fetch("http://167.71.101.78/senati/fpw/reserva.php", {
        method: "POST",
        body: JSON.stringify(registro),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);

        if (data.status === 200) {
            modalEstado.textContent = "SE REGISTRÓ CORRECTAMENTE";
        } else {
            modalEstado.textContent = "ERROR: " + data.message;
        }

        mensaje.showModal();
    })
    .catch(error => {
        console.error("Error en la petición:", error);

        modalEstado.textContent = "No se pudo completar la petición.";
        mensaje.showModal();
    });

    formulario.reset();
});

btnCerrar.addEventListener("click", function() {
    mensaje.close();
});


