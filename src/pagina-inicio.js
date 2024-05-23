import { LitElement, css, html } from 'lit'
export class MyElement extends LitElement {
link

    static get properties() {
        return {

        docsHint: { type: String },
        }
    }

<<<<<<< HEAD
    render() {
        return html`
        <body>
        <div class="principal">
            <div class="photos">
                
                <img src="/paginas/pag principal/princi.png" alt="">
                <h1 class="tittle-pagpr">¿Cuánto cuesta desarrollar mi <span class="colores">app</span>?</h1>
                <p class="parrafo">Calcula de forma rápida el coste para crear tu app, contestando estas sencillas preguntas.</p>
                <button onclick="modal()" class="button" id="openFormButton">
                    <h2 class="dentro">EMPEZAR</h2>
                </button>   
                
                </div>
        </div>
    </body>
        `
    }

=======
>>>>>>> 70e8713f801f693d6d158ebaf4c5129452738d13
    static get styles() {
        return css`
            *{
                margin: 0;
                padding: 0;
            }
            
            body{
                margin-top:10%;
                height: 100%;
                padding: 1rem;
                padding-bottom: 0;
                padding-top: 0;
                overflow-y: auto;
                background-color:#3d3935;;
            }
            
            body, html {
                position: relative;
                height: 100%;
                background-color: #3d3935;   ;
                
            }
            .hidden {
                display: none;
            }
            #formContainer {
                margin-top: 20px;
                border: 1px solid #ccc;
                padding: 20px;
                background-color: #3d3935;;
            }
            .principal{
                height: 100%;
                max-width: 960px;
                margin-left: auto;
                margin-right: auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            .colores{
                color: #14e2cd;
            }
            
            .button{
                color: #fff;
                background-image: linear-gradient(to left,#14e2cd,#7a56f4);
            }
            .button {
                position: relative;
                display: inline-block;
                max-width: 100%;
                margin: 0.5em 0;
                padding: 1.3em 4em;
                border: 0;
                border-radius: 5px;
                background-image: linear-gradient(to left,#14e6d3,#8660f5);
                box-shadow: 0 1px 5px 0 rgba(0,0,0,.2);
                color: #fff;
                text-align: center;
                white-space: nowrap;
                font-family: sans-serif;
                font-size: 20px;
                vertical-align: middle;
                -ms-touch-action: manipulation;
                touch-action: manipulation;
                cursor: pointer;
                user-select: none;
                overflow: hidden;
                transition: background .3s ease;
            }
            .button:hover {
                background-size: 320%;
                background-position: right center;
            }
                
            .button:hover svg {
                fill: #fff;
            }
                
            .button svg {
                width: 23px;
                fill: #f09f33;
                transition: .3s ease;
            }
            
            .photos{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                text-align: center;
            }
            
            img{
                width: 350px;
            }
            
            .tittle-pagpr{
<<<<<<< HEAD
                font-size: 55px;
=======
                font-size: 50px;
>>>>>>> 70e8713f801f693d6d158ebaf4c5129452738d13
                margin: 10px 0;
                letter-spacing: 2px;
            }
            .dentro{
                font-size: 25px;
                background: transparent;
                color: #fff;
                border: none;
            }
            .parrafo{
                font-size: 18px;
                margin: 15px 0;
            }
            @media screen and (max-width: 679px) {
                .tittle-pagpr{
                    font-size: 28px;
                }
                .tittle-pagpr{
                    text-align: center;
                }
            }
        `
    }

    render() {
        return html`
        <body>
        <div class="principal">
            <div class="photos">
                
                <img src="/paginas/pag principal/principal.png" alt="">
                <h1 class="tittle-pagpr">¿Cuánto cuesta desarrollar mi app?</h1>
                <p class="parrafo">Calcula de forma rápida el coste para crear tu app, contestando estas sencillas preguntas.</p>
    
                <script>
                    function modal() {
                      // Function definition for modal
                    }
                </script>
                <button onclick="modal()" class="button" id="openFormButton">
                    <h2 class="dentro">CALCULAR COSTE</h2>
                </button>   
                
                </div>
        </div>
        <div id="formContainer" class="hidden">
            <form id="dynamicForm">
                <label for="name">Nombre:</label>
                <input type="text" id="name" name="name" required>
                <label for="id">id:</label>
                <input type="text" id="id" name="id" required>
                <button type="submit">Enviar</button>
            </form>
        </div>
        <script src="/main.js"></script>
        <script src="/js/formulario.js"></script>
        <script src="/paginas/texto y link/textoylink.js"></script>
        
        
    </body>
        `
    }
}

window.customElements.define('my-element', MyElement)
