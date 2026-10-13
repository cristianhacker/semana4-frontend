const listaContactos = document.querySelector("#listaContactos");

// Leer los contactos guardados
const registros = JSON.parse(
    localStorage.getItem("registro") || "[]"
);

// Mostrar mensaje si no existen contactos
if (registros.length === 0) {
    const fila = document.createElement("tr");
    const columna = document.createElement("td");

    columna.colSpan = 3;
    columna.textContent = "No hay contactos registrados";

    fila.appendChild(columna);
    listaContactos.appendChild(fila);
}

// Crear una fila por cada registro
registros.forEach(function(registro) {
    const fila = document.createElement("tr");

    const columnaNombre = document.createElement("td");
    columnaNombre.textContent = registro.nombre;

    const columnaCorreo = document.createElement("td");
    columnaCorreo.textContent = registro.correo;

    const columnaCelular = document.createElement("td");
    columnaCelular.textContent = registro.celular;

    fila.appendChild(columnaNombre);
    fila.appendChild(columnaCorreo);
    fila.appendChild(columnaCelular);

    listaContactos.appendChild(fila);
});