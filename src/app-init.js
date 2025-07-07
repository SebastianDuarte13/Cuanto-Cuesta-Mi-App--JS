// Inicialización de la aplicación
import { appState } from './app-state.js';

// Configurar la aplicación cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    // Asegurar que solo el primer componente esté visible
    initializeApp();
});

function initializeApp() {
    // Ocultar todos los componentes excepto el inicial
    const components = [
        'plantilla-mitad',
        'plantilla-mitad_pag2',
        'pagina-tres',
        'pagina-cuatro',
        'pagina-cinco',
        'pagina-seis',
        'pagina-siete',
        'pagina-ocho',
        'pagina-nueve',
        'pagina-diez',
        'texto-final',
        'formulario-registro'
    ];
    
    components.forEach(componentName => {
        const element = document.querySelector(componentName);
        if (element) {
            element.style.display = 'none';
        }
    });
    
    // Mostrar solo el componente inicial
    const initialComponent = document.querySelector('my-element');
    if (initialComponent) {
        initialComponent.style.display = 'initial';
    }
}

// Exportar función para uso en otros archivos
export { initializeApp };
