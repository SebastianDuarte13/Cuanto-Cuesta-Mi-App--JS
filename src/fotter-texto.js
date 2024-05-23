import { LitElement, css, html } from 'lit'
export class TextoFinal extends LitElement {

    static get properties() {
        return {

        docsHint: { type: String },
        }
    }
    
    static get styles(){
        return css`
        body {
            font-size: 17px;
            line-height: 1.5;
            color: white;
            background-color: #f9f9f9;
            padding: 20%;
        }
        
        h1, h2, h3, h4, h5, h6 {
        font-weight: bold;
        color: white;
        margin-bottom: 15px;
        }
        
        h1 {
        font-size: 30px;
        text-align: center;
        padding-bottom: 5%;
        }
        
        h2 {
        font-size: 20px;
        }
        
        h3 {
        font-size: 18px;
        }
        
        p {
        margin-bottom: 20px;
        }
        
        ul {
        list-style: disc;
        margin-bottom: 20px;
        }
        
        li {
        margin-bottom: 10px;
        }
        
        a {
        text-decoration: none;
        color: white;
        }
        
        a:hover {
        text-decoration: underline;
        }
        
        .blockquote {
        background-color: #f7f7f7;
        border-left: 4px solid #337ab7;
        padding: 10px;
        margin-bottom: 20px;
        }
        
        .table {
        border-collapse: collapse;
        width: 100%;
        }
        
        .table th, .table td {
        border: 1px solid #ddd;
        padding: 10px;
        text-align: left;
        }
        
        .table th {
        background-color: #f7f7f7;
        }

        `
    }

    render(){
        return html`
        <body>
        <h1>¿Cuánto cuesta crear una app?</h1>
        <p>Listado de precios estimados.</p>
        <ol>
            <li>App tipo red social: 5.800</li>
            <li>App de gestión interna: 6.000</li>
            <li>App tipo marketplace: 15.000</li>
            <li>App para hacer pedidos: 18.000</li>
            <li>App de cupones: 25.000</li>
            <li>App tipo marketplace de servicios: 28.000</li>
        </ol>
        <p>La calculadora <a href="https://cuantocuestamiapp.com" target="_blank">cuantocuestamiapp.com</a> es una herramienta digital creada por Yeeply que puedes utilizar de forma gratuita para calcular cuánto costaría hacer realidad esa aplicación móvil que tienes en mente.</p>
        <p>Utilizarla es muy fácil! Solo tienes que hacer clic en el botón de “Calcular coste” y responder a las preguntas que te plantea la calculadora. En menos de un minuto puedes tener un presupuesto para el desarrollo de tu app aproximado.</p>
        <p>Sin embargo, acuérdate de que el precio de tu aplicación depende de muchos factores. Por ejemplo, no es lo mismo desarrollar una aplicación móvil para Android que crear una app para iOS. Existen muchas decisiones que tendrás que tomar durante el proceso de desarrollo que tendrán un impacto directo sobre el precio final de la aplicación.</p>
        <h2>Factores que influyen en el precio de una app</h2>
        <p>A la hora de calcular cuánto cuesta hacer una app debes tener en cuenta muchos factores. Estos son algunos generales:</p>
        <ul>
            <li><strong>Tiempo:</strong> dependiendo de los plazos el coste podría incrementarse o no. Si necesitas la app antes de una fecha concreta y el desarrollador hace horas extra el precio subirá un poco. En cambio, si eres más flexible y no tienes ningún tipo de prisa, se puede ajustar un plazo de entrega y el coste de desarrollo se ajustará más.</li>
            <li><strong>Calidad:</strong> piensa que cuantos más detalles tenga la app, esta necesitará más trabajo de desarrollo. Todos los detalles acabarán quedando como quieres, pero lógicamente el coste subirá si el diseño requiere mucho más esfuerzo.</li>
            <li><strong>Tecnología:</strong> el lenguaje de programación que se utilice en el desarrollo de la app influirá en su coste. Por ejemplo, las apps para Android se desarrollan en Java o Kotlin, mientras que las apps para iOS se desarrollan en Swift. Algunos lenguajes de programación son más populares y conllevan un coste mayor de desarrollo.</li>
            <li><strong>Tamaño del equipo de desarrollo:</strong> el número de personas que desarrollan la app influirá en el coste total. Por ejemplo, si desarrollas la app en solitario podrías gastar más tiempo en ciertas tareas que si estuvieras en un equipo de desarrollo. Además, el nivel de habilidad de cada miembro del equipo también influirá en el coste total de la app.</li>
        </ul>
        <p>Recuerda que la cantidad que hayas presupuestado para tu app será solo una estimación y puede que, al final, el coste real sea menor o mayor.</p>
        <h2>Ajustando el presupuesto</h2>
        <p>Si decides ajustar el presupuesto de tu app para tener un mejor margen de ganancia, es importante que realices una comunicación clara y constructiva con el equipo de desarrollo. Exponen los aspectos en los que creen que se podrían reducir costes o que se podrían mejorar, y escuchan sus ideas y sugerencias para reducir costes en el desarrollo de la app.</p>
        <p>No olvides que la satisfacción del cliente es fundamental, y aunque reducir costes puede ser importante, asegurar la calidad y la funcionalidad de la app también lo es.</p>
        <h2>Conclusión</h2>
        <p>Es importante tener en cuenta estos factores al calcular el coste de una app, ya que influyen en su precio final. Al ser consciente de estos factores, podrás tomar decisiones informadas y adecuadas al momento de crear tu aplicación móvil.</p>
    </body>
        `
    }
}

window.customElements.define('texto-final', TextoFinal)