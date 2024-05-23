import { LitElement, css, html } from 'lit'
export class MediumPlantilla extends LitElement {

    static get properties() {
        return {

        docsHint: { type: String },
        }
    }

    render() {
        return html`
        <div id="formContainer" class="hidden">
        <form id="dynamicForm">
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name" required>
            <label for="id">id:</label>
            <input type="text" id="id" name="id" required>
            <button type="submit"><a href="/paginas/pag2/pag2.html">Enviar</a></button>
        </form>
        </div
        `
    }
    static get styles() {
        return css``
    }
}   

window.customElements.define('formulario-registro', FormularioSneider)