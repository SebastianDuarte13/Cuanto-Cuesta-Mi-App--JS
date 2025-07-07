import { LitElement, css, html } from 'lit'

export class AppCalculadora extends LitElement {
    static get properties() {
        return {
            currentStep: { type: Number },
            answers: { type: Array },
            currentPrice: { type: Number },
            showForm: { type: Boolean },
            showResult: { type: Boolean },
        }
    }

    constructor() {
        super();
        this.currentStep = 0;
        this.answers = [];
        this.currentPrice = 1000; // Precio base
        this.showForm = false;
        this.showResult = false;
        
        // Definir las preguntas y sus opciones
        this.questions = [
            {
                id: 'app_type',
                title: '¿Qué tipo de App necesitas?',
                options: [
                    { value: 'android', label: 'Aplicación Android', price: 500, img: './paginas/pag3/img/answer-3-1.png' },
                    { value: 'ios', label: 'Aplicación iOS', price: 700, img: './paginas/pag3/img/answer-3-2.png' },
                    { value: 'windows', label: 'Aplicación Windows Phone', price: 400, img: './paginas/pag3/img/answer-3-3.png' },
                    { value: 'hybrid', label: 'Aplicación Android + iOS', price: 1200, img: './paginas/pag3/img/answer-3-4.png' }
                ]
            },
            {
                id: 'quality',
                title: '¿Qué nivel de calidad estás buscando?',
                options: [
                    { value: 'optimal', label: 'Calidad óptima', price: 800, img: './paginas/pag2/img/img-1-2.png' },
                    { value: 'balanced', label: 'Buena relación calidad-precio', price: 400, img: './paginas/pag2/img/img-2-2.png' },
                    { value: 'basic', label: 'No me importa tanto la calidad', price: 0, img: './paginas/pag2/img/answer-3-2.png' }
                ]
            },
            {
                id: 'design',
                title: '¿Qué diseño quieres que tenga tu App?',
                options: [
                    { value: 'simple', label: 'Interfaz sencilla', price: 200, img: './paginas/pag3/img/answer-3-1.png' },
                    { value: 'custom', label: 'Interfaz personalizada', price: 800, img: './paginas/pag3/img/answer-3-2.png' },
                    { value: 'replica', label: 'Interfaz replica de la web', price: 500, img: './paginas/pag3/img/answer-3-3.png' },
                    { value: 'no_design', label: 'No necesito diseño', price: 0, img: './paginas/pag3/img/answer-3-4.png' }
                ]
            },
            {
                id: 'monetization',
                title: '¿Cómo quieres sacar beneficio a tu App?',
                options: [
                    { value: 'ads', label: 'Aplicación gratuita con publicidad', price: 300, img: './paginas/pag4/img/answer-4-1.png' },
                    { value: 'paid', label: 'Aplicación de pago', price: 200, img: './paginas/pag4/img/answer-4-2.png' },
                    { value: 'in_app', label: 'Compras dentro de la app', price: 600, img: './paginas/pag4/img/answer-4-3.png' },
                    { value: 'other', label: 'Otros / No lo sé todavía', price: 100, img: './paginas/pag4/img/answer-4-4.png' }
                ]
            },
            {
                id: 'size',
                title: '¿Cómo de grande necesitas que sea la app?',
                options: [
                    { value: 'small', label: 'Pequeña: menos de 3 páginas/50 productos', price: 200, img: './paginas/pag5/images/img1-pag5.png' },
                    { value: 'medium', label: 'Mediana: menos de 10 páginas/200 productos', price: 500, img: './paginas/pag5/images/img2-pag5.png' },
                    { value: 'large', label: 'Grande: más de 10 páginas/200 productos', price: 1000, img: './paginas/pag5/images/img3-pag5.png' },
                    { value: 'unknown', label: 'No lo sé', price: 300, img: './paginas/pag5/images/img4-pag5.png' }
                ]
            },
            {
                id: 'integration',
                title: '¿La App estará integrada con otra Web, App o ERP?',
                options: [
                    { value: 'yes', label: 'Sí', price: 800, img: './paginas/pag6/img/img1-pag6.png' },
                    { value: 'no', label: 'No', price: 0, img: './paginas/pag6/img/img2-pag6.png' },
                    { value: 'unknown', label: 'No lo sé', price: 400, img: './paginas/pag6/img/img3-pag6.png' }
                ]
            },
            {
                id: 'profiles',
                title: '¿Los usuarios tienen sus propios perfiles?',
                options: [
                    { value: 'yes', label: 'Sí', price: 500, img: './paginas/pag7/img/answer-7-1.png' },
                    { value: 'no', label: 'No', price: 0, img: './paginas/pag7/img/answer-7-2.png' },
                    { value: 'unknown', label: 'No lo sé', price: 250, img: './paginas/pag7/img/answer-7-3.png' }
                ]
            },
            {
                id: 'admin',
                title: '¿Tu app necesita un panel de administración?',
                options: [
                    { value: 'yes', label: 'Sí', price: 700, img: './paginas/pag8/img/answer-8-1.png' },
                    { value: 'no', label: 'No', price: 0, img: './paginas/pag8/img/answer-8-2.png' },
                    { value: 'unknown', label: 'No lo sé', price: 350, img: './paginas/pag8/img/answer-8-3.png' }
                ]
            },
            {
                id: 'languages',
                title: '¿Qué idiomas usará tu aplicación?',
                options: [
                    { value: 'single', label: 'Un único idioma', price: 0, img: './paginas/pag9/img/answer-9-1.png' },
                    { value: 'bilingual', label: 'Bilingüe', price: 300, img: './paginas/pag9/img/answer-9-2.png' },
                    { value: 'multilingual', label: 'Multilingüe', price: 600, img: './paginas/pag9/img/answer-9-3.png' }
                ]
            },
            {
                id: 'project_state',
                title: '¿En qué estado se encuentra tu proyecto?',
                options: [
                    { value: 'idea', label: 'Solo es una idea', price: 0, img: './paginas/pag10/img/answer-10-1.png' },
                    { value: 'sketch', label: 'Boceto ya preparado', price: -200, img: './paginas/pag10/img/answer-10-2.png' },
                    { value: 'development', label: 'App en desarrollo', price: -500, img: './paginas/pag10/img/answer-10-3.png' },
                    { value: 'developed', label: 'App ya desarrollada', price: -800, img: './paginas/pag10/img/answer-10-4.png' }
                ]
            }
        ];
    }

    startCalculator() {
        this.currentStep = 1;
        this.requestUpdate();
    }

    selectAnswer(questionId, optionValue, price) {
        // Guardar la respuesta
        this.answers = [...this.answers, { questionId, optionValue, price }];
        
        // Actualizar el precio
        this.currentPrice += price;
        
        // Ir a la siguiente pregunta
        if (this.currentStep < this.questions.length) {
            this.currentStep++;
        } else {
            this.showResult = true;
        }
        
        this.requestUpdate();
    }

    goBack() {
        if (this.currentStep > 1) {
            this.currentStep--;
            // Remover la última respuesta y ajustar el precio
            const lastAnswer = this.answers.pop();
            this.currentPrice -= lastAnswer.price;
            this.requestUpdate();
        } else if (this.currentStep === 1) {
            this.currentStep = 0;
            this.requestUpdate();
        }
    }

    showFormulario() {
        this.showForm = true;
        this.requestUpdate();
    }

    renderWelcome() {
        return html`
            <div class="welcome-screen">
                <div class="welcome-content">
                    <img src="./paginas/pag principal/princi.png" alt="Calculadora de Apps" class="welcome-img">
                    <h1 class="welcome-title">¿Cuánto cuesta desarrollar mi <span class="highlight">app</span>?</h1>
                    <p class="welcome-subtitle">Calcula de forma rápida el coste para crear tu app, contestando estas sencillas preguntas.</p>
                    <button @click="${this.startCalculator}" class="start-button">
                        <h2>EMPEZAR</h2>
                    </button>
                </div>
            </div>
        `;
    }

    renderQuestion() {
        const question = this.questions[this.currentStep - 1];
        const progress = this.currentStep;
        
        return html`
            <div class="question-screen">
                <header class="question-header">
                    ${this.currentStep > 1 ? html`
                        <button @click="${this.goBack}" class="back-button">← Anterior</button>
                    ` : ''}
                    <div class="progress">${progress}/10</div>
                    <div class="price">$${this.currentPrice}</div>
                </header>
                
                <div class="question-content">
                    <h2 class="question-title">${question.title}</h2>
                    <div class="options-grid">
                        ${question.options.map(option => html`
                            <button 
                                class="option-button"
                                @click="${() => this.selectAnswer(question.id, option.value, option.price)}"
                            >
                                <div class="option-content">
                                    <img src="${option.img}" alt="${option.label}" class="option-img">
                                    <p class="option-label">${option.label}</p>
                                    <span class="option-price">+$${option.price}</span>
                                </div>
                            </button>
                        `)}
                    </div>
                </div>
            </div>
        `;
    }

    renderResult() {
        return html`
            <div class="result-screen">
                <div class="result-content">
                    <div class="price-result">
                        <h2>¡Tu app costaría aproximadamente!</h2>
                        <div class="final-price">$${this.currentPrice}</div>
                        <div class="currency">USD</div>
                    </div>
                    
                    <button class="continue-button" @click="${this.showFormulario}">
                        Obtener presupuesto detallado
                    </button>
                    
                    <div class="price-breakdown">
                        <h3>Desglose del precio:</h3>
                        <div class="breakdown-item">
                            <span>Precio base:</span>
                            <span>$1,000</span>
                        </div>
                        ${this.answers.map(answer => html`
                            <div class="breakdown-item">
                                <span>${this.getAnswerLabel(answer)}:</span>
                                <span>$${answer.price}</span>
                            </div>
                        `)}
                    </div>
                </div>
            </div>
        `;
    }

    getAnswerLabel(answer) {
        const question = this.questions.find(q => q.id === answer.questionId);
        const option = question.options.find(opt => opt.value === answer.optionValue);
        return option.label;
    }

    renderForm() {
        return html`
            <div class="form-screen">
                <div class="form-content">
                    <h2>Recibe tu presupuesto detallado</h2>
                    <div class="price-summary">
                        <p>Precio estimado: <strong>$${this.currentPrice} USD</strong></p>
                    </div>
                    
                    <form class="contact-form" @submit="${this.handleSubmit}">
                        <div class="form-group">
                            <label for="name">Nombre:</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Correo:</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="phone">Teléfono (opcional):</label>
                            <input type="tel" id="phone" name="phone">
                        </div>
                        <div class="form-group">
                            <label for="project">Descripción del proyecto:</label>
                            <textarea id="project" name="project" rows="4" placeholder="Cuéntanos más sobre tu proyecto..."></textarea>
                        </div>
                        <button type="submit" class="submit-button">ENVIAR SOLICITUD</button>
                    </form>
                </div>
            </div>
        `;
    }

    handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            project: formData.get('project'),
            price: this.currentPrice,
            answers: this.answers
        };
        
        console.log('Datos del formulario:', data);
        
        // Mostrar mensaje de éxito
        event.target.innerHTML = `
            <div class="success-message">
                <h3>¡Gracias por tu solicitud!</h3>
                <p>Hemos recibido tu información y te contactaremos pronto con un presupuesto detallado.</p>
                <p><strong>Precio estimado: $${this.currentPrice} USD</strong></p>
            </div>
        `;
    }

    render() {
        if (this.showForm) {
            return this.renderForm();
        } else if (this.showResult) {
            return this.renderResult();
        } else if (this.currentStep === 0) {
            return this.renderWelcome();
        } else {
            return this.renderQuestion();
        }
    }

    static get styles() {
        return css`
            :host {
                display: block;
                min-height: 100vh;
                background-color: #3d3935;
                color: #ffffff;
                font-family: Arial, sans-serif;
            }

            /* Pantalla de bienvenida */
            .welcome-screen {
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
                padding: 20px;
            }

            .welcome-content {
                text-align: center;
                max-width: 600px;
            }

            .welcome-img {
                width: 350px;
                max-width: 100%;
                margin-bottom: 20px;
            }

            .welcome-title {
                font-size: 48px;
                margin: 20px 0;
                letter-spacing: 2px;
            }

            .highlight {
                color: #14e2cd;
            }

            .welcome-subtitle {
                font-size: 18px;
                margin: 20px 0;
                opacity: 0.9;
            }

            .start-button {
                background: linear-gradient(to right, #14e6d3, #8660f5);
                color: #fff;
                border: none;
                padding: 15px 40px;
                font-size: 20px;
                border-radius: 8px;
                cursor: pointer;
                transition: transform 0.3s ease;
            }

            .start-button:hover {
                transform: translateY(-2px);
            }

            /* Pantalla de preguntas */
            .question-screen {
                min-height: 100vh;
                display: flex;
                flex-direction: column;
            }

            .question-header {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 15px 20px;
                background: rgba(61, 57, 53, 0.95);
                backdrop-filter: blur(10px);
                z-index: 100;
            }

            .back-button {
                background: transparent;
                border: none;
                color: #fff;
                font-size: 16px;
                cursor: pointer;
                padding: 8px 16px;
                border-radius: 4px;
                transition: background 0.3s ease;
            }

            .back-button:hover {
                background: rgba(255, 255, 255, 0.1);
            }

            .progress {
                font-size: 18px;
                font-weight: bold;
            }

            .price {
                font-size: 18px;
                font-weight: bold;
                color: #14e2cd;
            }

            .question-content {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 100px 20px 20px;
                max-width: 1200px;
                margin: 0 auto;
            }

            .question-title {
                font-size: 32px;
                text-align: center;
                margin-bottom: 40px;
                max-width: 800px;
            }

            .options-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 20px;
                width: 100%;
                max-width: 800px;
            }

            .option-button {
                background: rgba(255, 255, 255, 0.1);
                border: 2px solid transparent;
                border-radius: 12px;
                padding: 20px;
                cursor: pointer;
                transition: all 0.3s ease;
                color: #fff;
                text-align: center;
            }

            .option-button:hover {
                background: rgba(255, 255, 255, 0.2);
                border-color: #14e2cd;
                transform: translateY(-5px);
            }

            .option-content {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 10px;
            }

            .option-img {
                width: 80px;
                height: 80px;
                object-fit: cover;
                border-radius: 8px;
            }

            .option-label {
                font-size: 16px;
                font-weight: 500;
                margin: 0;
            }

            .option-price {
                font-size: 14px;
                color: #14e2cd;
                font-weight: bold;
            }

            /* Pantalla de resultado */
            .result-screen {
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
                padding: 20px;
            }

            .result-content {
                text-align: center;
                max-width: 600px;
            }

            .price-result {
                background: linear-gradient(to right, #14e6d3, #8660f5);
                border-radius: 15px;
                padding: 40px;
                margin-bottom: 30px;
            }

            .final-price {
                font-size: 64px;
                font-weight: bold;
                margin: 20px 0;
            }

            .currency {
                font-size: 24px;
                opacity: 0.9;
            }

            .continue-button {
                background: linear-gradient(to right, #14e6d3, #8660f5);
                color: #fff;
                border: none;
                padding: 15px 30px;
                font-size: 18px;
                border-radius: 8px;
                cursor: pointer;
                margin-bottom: 30px;
                transition: transform 0.3s ease;
            }

            .continue-button:hover {
                transform: translateY(-2px);
            }

            .price-breakdown {
                background: rgba(255, 255, 255, 0.1);
                border-radius: 12px;
                padding: 20px;
                text-align: left;
            }

            .breakdown-item {
                display: flex;
                justify-content: space-between;
                padding: 8px 0;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }

            .breakdown-item:last-child {
                border-bottom: none;
            }

            /* Pantalla de formulario */
            .form-screen {
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
                padding: 20px;
            }

            .form-content {
                width: 100%;
                max-width: 600px;
            }

            .form-content h2 {
                text-align: center;
                margin-bottom: 20px;
            }

            .price-summary {
                background: linear-gradient(to right, #14e6d3, #8660f5);
                padding: 15px;
                border-radius: 8px;
                text-align: center;
                margin-bottom: 30px;
            }

            .contact-form {
                background: rgba(255, 255, 255, 0.1);
                padding: 30px;
                border-radius: 12px;
                backdrop-filter: blur(10px);
            }

            .form-group {
                margin-bottom: 20px;
            }

            .form-group label {
                display: block;
                margin-bottom: 8px;
                font-weight: bold;
            }

            .form-group input,
            .form-group textarea {
                width: 100%;
                padding: 12px;
                border: 2px solid rgba(255, 255, 255, 0.3);
                border-radius: 6px;
                background: rgba(255, 255, 255, 0.1);
                color: #fff;
                font-size: 16px;
            }

            .form-group input:focus,
            .form-group textarea:focus {
                outline: none;
                border-color: #14e2cd;
            }

            .form-group input::placeholder,
            .form-group textarea::placeholder {
                color: rgba(255, 255, 255, 0.6);
            }

            .submit-button {
                background: linear-gradient(to right, #14e6d3, #8660f5);
                color: #fff;
                border: none;
                padding: 15px 30px;
                font-size: 16px;
                border-radius: 8px;
                cursor: pointer;
                width: 100%;
                transition: transform 0.3s ease;
            }

            .submit-button:hover {
                transform: translateY(-2px);
            }

            .success-message {
                text-align: center;
                padding: 40px;
            }

            .success-message h3 {
                color: #14e2cd;
                margin-bottom: 20px;
            }

            /* Responsive */
            @media (max-width: 768px) {
                .welcome-title {
                    font-size: 28px;
                }

                .question-title {
                    font-size: 24px;
                }

                .options-grid {
                    grid-template-columns: 1fr;
                }

                .final-price {
                    font-size: 48px;
                }

                .option-img {
                    width: 60px;
                    height: 60px;
                }
            }
        `;
    }
}

window.customElements.define('app-calculadora', AppCalculadora)
