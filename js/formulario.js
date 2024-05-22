document.addEventListener("DOMContentLoaded", () => {
    const openFormButton = document.getElementById("openFormButton");
    const formContainer = document.getElementById("formContainer");
    const dynamicForm = document.getElementById("dynamicForm");

    // Mostrar u ocultar el formulario al hacer clic en el botón
    openFormButton.addEventListener("click", () => {
        formContainer.classList.toggle("hidden");
    });

    // Crear un objeto para almacenar los datos del formulario
    const formData = {
        entries: [],
        addEntry: function(entry) {
            this.entries.push(entry);
        },
        [Symbol.iterator]: function* () {
            for (let entry of this.entries) {
                yield entry;
            }
        }
    };

    // Manejar el envío del formulario
    dynamicForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Obtener los valores de los campos de entrada del formulario
        const name = document.getElementById("name").value;
        const id = document.getElementById("id").value;

        // Guardar los datos en el objeto formData
        formData.addEntry({ name, id });

        // Reiniciar el formulario y ocultarlo
        dynamicForm.reset();
        formContainer.classList.add("hidden");

        // Mostrar los datos almacenados en la consola
        for (const entry of formData) {
            console.log(entry);
        }
    });
});