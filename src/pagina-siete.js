import { LitElement, css, html } from 'lit'
import { appState } from './app-state.js'

export class PaginaSiete extends LitElement {
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
                <h2 class="title-pag5">¿Los usuarios tienen sus propios perfiles?</h2>
                <div class="photos">
                    <div class="part1">
                        <button class="btn" @click="${() => this.selectAnswer('profiles_yes')}">
                            <div class="independiente">
                                <img src="/paginas/pag7/img/answer-7-1.png" alt="Sí" class="foto-pag2">
                                <p class="espaciado">Sí</p>
                            </div>
                        </button>
                    </div>
                    <div class="part3">
                        <button class="btn" @click="${() => this.selectAnswer('profiles_no')}">
                            <div class="independiente">
                                <img src="/paginas/pag7/img/answer-7-2.png" alt="No" class="foto-pag2">
                                <p>No</p>
                            </div>    
                        </button>
                    </div>
                    <div class="part2">
                        <button class="btn" @click="${() => this.selectAnswer('profiles_unknown')}">
                            <div class="independiente">
                                <img src="/paginas/pag7/img/answer-7-3.png" alt="No lo sé" class="foto-pag2">
                                <p>No lo sé</p>
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
                justify-content: space-around;
                gap: 20px;
            }

            .part1, .part2, .part3 {
                display: flex;
                justify-content: center;
                flex: 1;
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
                width: 100%;
                max-width: 200px;
            }

            .btn:hover {
                transform: translateY(-10px);
                will-change: box-shadow, transform;
                background: rgb(81, 77, 74);
            }

            @media screen and (max-width: 960px) {
                .photos {
                    flex-direction: column;
                    align-items: center;
                    gap: 15px;
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

window.customElements.define('pagina-siete', PaginaSiete)
