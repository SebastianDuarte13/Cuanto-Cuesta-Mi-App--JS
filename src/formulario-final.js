import { LitElement, css, html } from 'lit';

const apiUrl = import.meta.env.VITE_API_URL;
class FormularioSneider extends LitElement {
  static get properties() {
    return {
      docsHint: { type: String },
    };
  }

  constructor() {
    super();
    this.formData = {
      entries: [],
      addEntry(entry) {
        this.entries.push(entry);
      },
      [Symbol.iterator]: function* () {
        for (const entry of this.entries) {
          yield entry;
        }
      },
    };
  }

  render() {
    return html`
      <div id="formContainer">
        <form id="dynamicForm" class="form-container">
          <div class="form-group">
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name" class="form-control" required />
          </div>
          <div class="form-group">
            <label for="id">ID:</label>
            <input type="email" id="id" name="id" class="form-control" required />
          </div>
          <button type="submit" class="btn btn-primary">ENVIAR</button>
        </form>
      </div>
    `;
  }

  static get styles() {
    return css`


      .form-container {
        background-image: linear-gradient(to left, #14e6d3, #8660f5);
        background-color: gray;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        max-width: 500px;
        width: 100%;
      }

      .form-group {
        margin-bottom: 15px;
      }

      .form-group label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
      }

      .form-control {
        width: 100%;
        border: 1px solid #ced4da;
        border-radius: 4px;
      }

      .form-control:focus {
        border-color: #80bdff;
        outline: none;
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
      }

      .btn {
        display: inline-block;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        background-color: gray;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        color: #fff;
      }

      .btn-primary {
        background-color: #007bff;
        border-color: #007bff;
      }

      .btn-link {
        color: #ffffff;
        text-decoration: none;
      }

      .btn-link:hover {
        text-decoration: underline;
      }

      .btn:hover {
        background-color: #0056b3;
      }
    `;
  }

  firstUpdated() {
    this.shadowRoot
      .getElementById('dynamicForm')
      .addEventListener('submit', this.handleSubmit.bind(this));
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = this.shadowRoot.getElementById('name').value;
    const id = this.shadowRoot.getElementById('id').value;

    // Guardar los datos en el objeto formData
    this.formData.addEntry({ name, id });

    // Reiniciar el formulario
    this.shadowRoot.getElementById('dynamicForm').reset();

    // Mostrar los datos almacenados en la consola
    for (const entry of this.formData) {
      console.log(entry);
    }
  }
  async postMethod(entries) {
    try {
      const response = await fetch(`${apiUrl}/client`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(client),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }
}



window.customElements.define('formulario-registro', FormularioSneider);