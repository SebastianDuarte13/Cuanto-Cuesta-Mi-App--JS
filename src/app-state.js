// Estado global de la aplicación
class AppState {
    constructor() {
        this.currentStep = 0;
        this.answers = [];
        this.totalSteps = 10;
        this.steps = [
            'my-element',           // Página inicial
            'plantilla-mitad',      // Página 1: Tipo de App
            'plantilla-mitad_pag2', // Página 2: Calidad
            'pagina-tres',          // Página 3: Diseño
            'pagina-cuatro',        // Página 4: Monetización
            'pagina-cinco',         // Página 5: Tamaño
            'pagina-seis',          // Página 6: Funcionalidades
            'pagina-siete',         // Página 7: Integración
            'pagina-ocho',          // Página 8: Tiempo
            'pagina-nueve',         // Página 9: Soporte
            'pagina-diez',          // Página 10: Presupuesto
            'texto-final',          // Resumen
            'formulario-registro'   // Formulario
        ];
        this.priceFactors = {
            base: 1000,
            // Tipo de app
            android: 500,
            ios: 700,
            windows: 400,
            hybrid: 1200,
            // Calidad
            optimal: 1.5,
            balanced: 1.2,
            basic: 0.8,
            // Diseño
            simple_design: 0.9,
            custom_design: 1.4,
            replica_design: 1.1,
            no_design: 0.7,
            // Monetización
            ads: 0.8,
            paid: 1.0,
            in_app: 1.3,
            other: 1.0,
            // Tamaño
            small: 0.8,
            medium: 1.0,
            large: 1.5,
            unknown: 1.0,
            // Integración
            integrated_yes: 1.3,
            integrated_no: 1.0,
            integrated_unknown: 1.1,
            // Perfiles
            profiles_yes: 1.2,
            profiles_no: 1.0,
            profiles_unknown: 1.1,
            // Administración
            admin_yes: 1.4,
            admin_no: 1.0,
            admin_unknown: 1.2,
            // Idiomas
            single_language: 1.0,
            bilingual: 1.2,
            multilingual: 1.5,
            // Estado del proyecto
            just_idea: 1.0,
            sketch_ready: 0.9,
            in_development: 0.7,
            already_developed: 0.5
        };
    }

    addAnswer(answer) {
        this.answers.push(answer);
    }

    nextStep() {
        if (this.currentStep < this.steps.length - 1) {
            this.hideCurrentStep();
            this.currentStep++;
            this.showCurrentStep();
        }
    }

    previousStep() {
        if (this.currentStep > 0) {
            this.hideCurrentStep();
            this.currentStep--;
            this.showCurrentStep();
        }
    }

    hideCurrentStep() {
        const currentComponent = document.querySelector(this.steps[this.currentStep]);
        if (currentComponent) {
            currentComponent.style.display = 'none';
        }
    }

    showCurrentStep() {
        const currentComponent = document.querySelector(this.steps[this.currentStep]);
        if (currentComponent) {
            currentComponent.style.display = 'initial';
        }
    }

    calculatePrice() {
        let basePrice = this.priceFactors.base;
        
        this.answers.forEach(answer => {
            if (this.priceFactors[answer]) {
                if (this.priceFactors[answer] > 2) {
                    // Es un valor aditivo
                    basePrice += this.priceFactors[answer];
                } else {
                    // Es un multiplicador
                    basePrice *= this.priceFactors[answer];
                }
            }
        });
        
        return Math.round(basePrice);
    }

    getCurrentProgress() {
        return {
            current: this.currentStep,
            total: this.steps.length - 3, // Excluir inicial, resumen y formulario
            percentage: Math.round((this.currentStep / (this.steps.length - 3)) * 100)
        };
    }

    getAccumulatedPrice() {
        return this.calculatePrice();
    }
}

// Instancia global del estado
export const appState = new AppState();
