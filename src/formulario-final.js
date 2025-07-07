import { LitElement, css, html } from 'lit';
import { appState } from './app-state.js';

const apiUrl = import.meta.env.VITE_API_URL;

class FormularioSneider extends LitElement {
  static get properties() {
    return {
      docsHint: { type: String },
      calculatedPrice: { type: Number },
    };
  }

  constructor() {
    super();
    this.calculatedPrice = 0;
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

  connectedCallback() {
    super.connectedCallback();
    this.calculatedPrice = appState.calculatePrice();
  }

  render() {
    return html`
      <div id="formContainer">
        <h2>Recibe tu presupuesto detallado</h2>
        <div class="price-summary">
          <p>Precio estimado: <strong>$${this.calculatedPrice} USD</strong></p>
        </div>
        <form id="dynamicForm" class="form-container">
          <div class="form-group">
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name" class="form-control" required />
          </div>
          <div class="form-group">
            <label for="id">Correo:</label>
            <input type="email" id="correo" name="correo" class="form-control" required />
          </div>
          <div class="form-group">
            <label for="phone">Teléfono (opcional):</label>
            <input type="tel" id="phone" name="phone" class="form-control" />
          </div>
          <div class="form-group">
            <label for="project">Descripción del proyecto:</label>
            <textarea id="project" name="project" class="form-control" rows="4" placeholder="Cuéntanos más sobre tu proyecto..."></textarea>
          </div>
          <button type="submit" class="btn btn-primary">ENVIAR SOLICITUD</button>
        </form>
      </div>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: none;
      }

      #formContainer {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }

      h2 {
        text-align: center;
        color: #fff;
        margin-bottom: 20px;
      }

      .price-summary {
        background: linear-gradient(to right, #14e6d3, #8660f5);
        padding: 15px;
        border-radius: 8px;
        text-align: center;
        margin-bottom: 20px;
        color: white;
      }

      .price-summary p {
        margin: 0;
        font-size: 18px;
      }

      .form-container {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.2);
      }

      .form-group {
        margin-bottom: 15px;
      }

      .form-group label {
        display: block;
        margin-bottom: 8px;
        font-weight: bold;
        color: #fff;
      }

      .form-control {
        width: 100%;
        padding: 12px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.1);
        color: #fff;
        font-size: 16px;
        transition: border-color 0.3s ease;
      }

      .form-control::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }

      .form-control:focus {
        border-color: #14e6d3;
        outline: none;
        box-shadow: 0 0 0 3px rgba(20, 230, 211, 0.2);
      }

      textarea.form-control {
        resize: vertical;
        min-height: 100px;
      }

      .btn {
        display: inline-block;
        padding: 15px 30px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        font-weight: bold;
        transition: all 0.3s ease;
        width: 100%;
      }

      .btn-primary {
        background: linear-gradient(to right, #14e6d3, #8660f5);
        color: #fff;
      }

      .btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
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
    const correo = this.shadowRoot.getElementById('correo').value;
    const phone = this.shadowRoot.getElementById('phone').value;
    const project = this.shadowRoot.getElementById('project').value;

    // Preparar datos para envío
    const formData = {
      name,
      correo,
      phone,
      project,
      calculatedPrice: this.calculatedPrice,
      answers: appState.answers,
      timestamp: new Date().toISOString()
    };

    // Guardar los datos en el objeto formData
    this.formData.addEntry(formData);

    // Mostrar mensaje de éxito
    this.showSuccessMessage();

    // Mostrar los datos almacenados en la consola
    console.log('Datos del formulario:', formData);
  }

  showSuccessMessage() {
    const form = this.shadowRoot.getElementById('dynamicForm');
    form.innerHTML = `
      <div style="text-align: center; padding: 40px; color: #fff;">
        <h3>¡Gracias por tu solicitud!</h3>
        <p>Hemos recibido tu información y te contactaremos pronto con un presupuesto detallado.</p>
        <p><strong>Precio estimado: $${this.calculatedPrice} USD</strong></p>
      </div>
    `;
  }

}



window.customElements.define('formulario-registro', FormularioSneider);