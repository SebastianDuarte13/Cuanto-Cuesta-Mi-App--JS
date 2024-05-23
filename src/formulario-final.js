import { LitElement, css, html } from 'lit'
export class FormularioSneider extends LitElement {

    static get properties() {
        return {

        docsHint: { type: String },
        }
    }

    render() {
        return html`
        <div id="formContainer">
            <form id="dynamicForm" class="form-container">
                <div class="form-group">
                    <label for="name">Nombre:</label>
                    <input type="text" id="name" name="name" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="id">ID:</label>
                    <input type="text" id="id" name="id" class="form-control" required>
                </div>
                <button type="submit" class="btn btn-primary">
                    <a href="/paginas/pag2/pag2.html" class="btn-link">Enviar</a>
                </button>
            </form>
        </div>
        `
    }
    static get styles() {
        return css`
        body {
            font-family: Arial, sans-serif;
            background-color: #f8f9fa;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        
        .hidden {
            display: none;
        }
        
        .form-container {
            background-color: gray;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            max-width: 400px;
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
            padding: 10px;
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
            background-color: #007bff;
            color: #ffffff;
            cursor: pointer;
            text-align: center;
            text-decoration: none;
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
        `
    }
}   

window.customElements.define('formulario-registro', FormularioSneider)