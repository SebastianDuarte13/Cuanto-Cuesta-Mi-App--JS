import { LitElement, css, html } from 'lit'
import { appState } from './app-state.js'

export class PaginaCuatro extends LitElement {
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
        const progress = appState.getCurrentProgress();
        const accumulatedPrice = appState.getAccumulatedPrice();
        
        return html`
            <header>
                <button @click="${this.goBack}" class="anterior">← Anterior</button>
                <p class="pagina"><h3>${progress.current}/10</h3></p>
                <h3 class="acumulado">${accumulatedPrice}€</h3>
            </header>
            <div class="principal">
                <h2 class="title-pag5">¿Cómo quieres sacar beneficio a tu App?</h2>
                <div class="photos">
                    <div class="part1">
                        <button class="btn" @click="${() => this.selectAnswer('ads')}">
                            <div class="independiente">
                                <img src="/paginas/pag4/img/answer-4-1.png" alt="Aplicación gratuita con publicidad" class="foto-pag2">
                                <p class="espaciado">Aplicación gratuita con publicidad</p>
                            </div>
                        </button>
                        <button class="btn" @click="${() => this.selectAnswer('paid')}">
                            <div class="independiente">
                                <img src="/paginas/pag4/img/answer-4-2.png" alt="Aplicación de pago" class="foto-pag2">
                                <p>Aplicación de pago</p>
                            </div>    
                        </button>
                    </div>
                    <div class="part2">
                        <button class="btn" @click="${() => this.selectAnswer('in_app')}">
                            <div class="independiente">
                                <img src="/paginas/pag4/img/answer-4-3.png" alt="Compras dentro de la app" class="foto-pag2">
                                <p>Compras dentro de la app</p>
                            </div>
                        </button>
                        <button class="btn" @click="${() => this.selectAnswer('other')}">
                            <div class="independiente">
                                <img src="/paginas/pag4/img/answer-4-4.png" alt="Otros / No lo sé todavía" class="foto-pag2">
                                <p>Otros / No lo sé todavía</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    static get styles() {
        return css`
            :host {
                display: none;
            }

            * {
                margin: 0;
                padding: 0;
                color: #ffffff;
            }

            header {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px 20px;
                font-size: 20px;
                color: #ffffff;
                z-index: 1;
                background: rgba(61, 57, 53, 0.9);
            }

            .anterior {
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

            .principal {
                height: 100vh;
                max-width: 960px;
                margin-left: auto;
                margin-right: auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding-top: 80px;
            }

            .independiente {
                margin: 8px;
                border: 2px;
                padding: 8px 16px;
                text-align: center;
            }

            .title-pag5 {
                font-family: Arial, Helvetica, sans-serif;
                font-size: 32px;
                margin: 20px 0;
                letter-spacing: 1px;
                color: #ffffff;
                text-align: center;
            }

            .photos {
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 20px;
            }

            .part1, .part2 {
                display: flex;
                justify-content: space-around;
                width: 100%;
                gap: 20px;
            }

            .foto-pag2 {
                width: 150px;
                height: 150px;
                margin-bottom: 10px;
            }

            .btn {
                border: none;
                position: relative;
                transition: transform 0.4s, box-shadow 0.4s ease-out;
                background-color: rgb(61, 57, 53);
                font-size: 18px;
                cursor: pointer;
                border-radius: 8px;
                padding: 20px;
                color: #fff;
                flex: 1;
                max-width: 200px;
            }

            .btn:hover {
                transform: translateY(-10px);
                will-change: box-shadow, transform;
                background: rgb(81, 77, 74);
            }

            @media screen and (max-width: 960px) {
                .part1, .part2 {
                    flex-direction: column;
                    align-items: center;
                }

                .independiente {
                    display: flex;
                    align-items: center;
                    flex-direction: row;
                    gap: 15px;
                }

                .title-pag5 {
                    font-size: 24px;
                }

                .foto-pag2 {
                    width: 80px;
                    height: 80px;
                }
            }

            @media screen and (max-width: 679px) {
                .title-pag5 {
                    font-size: 20px;
                }

                .photos {
                    flex-direction: column;
                    gap: 15px;
                }

                .btn {
                    max-width: 100%;
                    width: 100%;
                }

                .independiente {
                    flex-direction: row;
                    justify-content: flex-start;
                }

                .principal {
                    padding-top: 100px;
                }
            }
        `;
    }
}

window.customElements.define('pagina-cuatro', PaginaCuatro)
