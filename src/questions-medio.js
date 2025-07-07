import { LitElement, css, html } from 'lit'
import { appState } from './app-state.js'

export class MediumPlantillaS extends LitElement {

    static get properties() {
        return {
            docsHint: { type: String },
        }
    }

    constructor() {
        super();
    }

    selectAnswer(answer) {
        appState.addAnswer(answer);
        appState.nextStep();
    }

    static get styles() {
        return css`
        :host {
            display: none;
        }
        
        
        header {
            position: fixed;
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding-top: 10px;
            font-size: 20px;
            color:#ffffff;
            z-index: 1;
        }
        
        .anterior{
            text-decoration: none;
            font-size: 18px;
            border: none;
            background:transparent  ;
            color:#ffffff;
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
        
        .independiente{
            margin: 8px;
            border: 2px;
            padding: 8px 16px;
            text-align: center;
        }
        
        
        .title-pag5{
            font-family: Arial, Helvetica, sans-serif;
            font-size: 32px;
            margin: 20px 0;
            letter-spacing: 1px;
            color: #ffffff;
        }
        
        .anterior{
            padding: 20px;
        }
        
        h3{
            padding: 20px;
        }
        
        .acumulado{
            padding: 20px;
            padding-right: 56px;
        }
        
        .photos{
            width: 100%;
            display: flex;
        }
        
        .part1{
            display: flex;
            justify-content: space-around;
            width: 100%;
        }
        .part2{
            display: flex;
            justify-content: space-around;
            width: 100%;
        }
        
        .foto-pag2{
            width: 150px;
            height: 150px;
            margin-bottom: 10px;
        }
        
        .btn {
            border: none;
            position: relative;
            transition: transform 0.4s , box-shadow 0.4s ease-out;
            background-color: rgb(61, 57, 53);
            font-size: 18px;
        }
        
        .btn:hover {
            transform: translateY(-10px);
            will-change: box-shadow, transform;
            background:rgb(81, 77, 74);
        }
        
        @media screen and (max-width: 960px) {
            .part1{
                flex-direction: column;
            }
            .part2{
                flex-direction: column;
            }
        
            .independiente{
                display: flex;
                align-items: center ;
                flex-direction: row;
            }
        
            .title-pag5{
                text-align: center;
            }
        
            .foto-pag5{
                width: 80px;
                height: 80px;
            }
            .photos{
                margin-top: 10px;
            }
        }
        @media screen and (max-width: 679px) {
            .title-pag5{
                font-size: 20px;
            }
            .photos{
                flex-direction: column;
            }
            .title-pag5{
                text-align: center;
            }
            header{
                top: 0;
            }
            .principal{
                margin-top: 70px;
            }
        }
        `
    }

    render() {
        return html`
        
        <body>
        <div class="principal">
        <h2 class="title-pag5">¿Qué tipo de App necesitas?</h2>
        <div class="photos">
            <div class="part1">
                <button class="btn" @click="${() => this.selectAnswer('android')}">
                <div class="independiente">
                    <img src="images/IMG3/answer-3-1.png" alt="Aplicación Android" class="foto-pag2">
                    <p class="espaciado">Aplicación Android</p>
                </div>
                </button>
                <button class="btn" @click="${() => this.selectAnswer('ios')}">
                <div class="independiente">
                    <img src="images/IMG3/answer-3-2.png" alt="Aplicación iOS" class="foto-pag2">
                    <p>Aplicación iOS</p>
                </div>    
                </button>
            </div>
            <div class="part2">
                <button class="btn" @click="${() => this.selectAnswer('windows')}">
                <div class="independiente">
                    <img src="images/IMG3/answer-3-3.png" alt="Aplicación Windows Phone" class="foto-pag2">
                    <p>Aplicación Windows Phone</p>
                </div>
                </button>
                <button class="btn" @click="${() => this.selectAnswer('hybrid')}">
                <div class="independiente">
                    <img src="images/IMG3/answer-3-4.png" alt="Aplicación Android + iOS" class="foto-pag2">
                    <p>Aplicación Android + iOS</p>
                </div>
                </button>
            </div>
        </div>
    </div>
    <script src="/paginas/texto y link/textoylink.js"></script>
</body>
        `
    }
}
window.customElements.define('plantilla-mitad', MediumPlantillaS)

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

export class MediumPlantilla_pag2 extends LitElement {

    static get properties() {
        return {
            docsHint: { type: String },
        }
    }

    constructor() {
        super();
    }

    selectAnswer(answer) {
        appState.addAnswer(answer);
        appState.nextStep();
    }

    goBack() {
        appState.previousStep();
    }

    render() {
        return html`
        <header>
            <button @click="${this.goBack}" class="anterior">← Anterior</button>
            <p><h3>2/10</h3></p>
        </header>
        <body>
        <div class="principal">
                <h2 class="title-pag5">¿Qué nivel de calidad estás buscando?</h2>
                <div class="photos">
                    <div class="part1">
                        <button class="btn" @click="${() => this.selectAnswer('optimal')}">
                            <div class="independiente">
                                <img src="images/pag2/img-1-2.png" alt="Calidad óptima" class="foto-pag2">
                                <p class="espaciado">Calidad óptima</p>
                            </div>
                        </button>
                    </div>
                    <div class="part3">
                        <button class="btn" @click="${() => this.selectAnswer('balanced')}">
                            <div class="independiente">
                                <img src="images/pag2/img-2-2.png" alt="Buena relación calidad-precio" class="foto-pag2">
                                <p>Buena relación calidad-precio</p>
                            </div>    
                        </button>
                    </div>
                    
                    <div class="part2">
                        <button class="btn" @click="${() => this.selectAnswer('basic')}">
                            <div class="independiente">
                                <img src="images/pag2/answer-3-2.png" alt="Calidad básica" class="foto-pag2">
                                <p>No me importa tanto la calidad</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </body>
        `
    }
    static get styles() {
        return css`
        :host {
            display: none;
        }
        
        header{
            position: fixed;
            top: 30px;
            left: 0;
            right: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
            font-size: 13px;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            color: #fff;
            z-index: 1;
        }
        
        .anterior{
            text-decoration: none;
            font-size: 18px;
            border: none;
            background: transparent;
            color: #ffffff;
            cursor: pointer;
            padding: 10px;
        }
        
        .anterior:hover {
            text-decoration: underline;
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
        
        .independiente{
            margin: 8px;
            border: 2px;
            padding: 8px 16px;
            text-align: center;
        }
        
        
        .title-pag5{
            font-family: Arial, Helvetica, sans-serif;
            font-size: 32px;
            margin: 20px 0;
            letter-spacing: 1px;
            color: #fff;
        }
        
        .anterior{
            padding: 20px;
        }
        
        h3{
            padding: 20px;
        }
        
        .acumulado{
            padding: 20px;
            padding-right: 56px;
        }
        
        .photos{
            width: 100%;
            display: flex;
            justify-content: space-around;
        }
        
        
        
        .foto-pag2{
            width: 150px;
            height: 150px;
            margin-bottom: 10px;
        }
        
        .btn {
            border: none;
            position: relative;
            transition: transform 0.4s , box-shadow 0.4s ease-out;
            background-color: #3d3935  ;
            font-size: 18px;
            width: 100%;
            color: #fff;
        }
        
        .btn:hover {
            transform: translateY(-10px);
            will-change: box-shadow, transform;
            background:rgb(81, 77, 74);
        }
        
        @media screen and (max-width: 960px) {
            .independiente{
                display: flex;
                align-items: center;
                flex-direction: column;
            }
        
            .title-pag5{
                text-align: center;
            }
        
            .foto-pag5{
                width: 80px;
                height: 80px;
            }
            .photos{
                margin-top: 10px;
                flex-direction: row;
            }
        
            .part2{
                position: absolute;
                bottom: 50px;
            }
        }
        @media screen and (max-width: 679px) {
            .title-pag5{
                font-size: 20px;
            }
            .photos{
                flex-direction: column;
                align-items: start;
                width: 100%;
            }
            .btn{
                width: 100%;
            }
            .independiente{
                width: 100%;
                flex-direction: row;
            }
            .title-pag5{
                text-align: center;
            }
            .part2{
                position: relative;
                bottom: 0px;
            }
            
            header{
                top: 0;
                padding: 10px;
            }
            
            .principal{
                margin-top: 70px;
            }
        }
        `
    }
}
window.customElements.define('plantilla-mitad_pag2', MediumPlantilla_pag2)