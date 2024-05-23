import { LitElement, css, html } from 'lit'
export class MediumPlantilla extends LitElement {

    static get properties() {
        return {

        docsHint: { type: String },
        }
    }

    render() {
        return html`
        <header>
            <button class="anterior">← Anterior</button>
            <p class="pagina"><h3>3/10</h3></p>
            <h3 class="acumulado">0€</h3>
        </header>
        <body>
            <div class="principal">
                <h2 class="title-pag5">¿Qué diseño quieres que tenga tu App?</h2>
                <div class="photos">
                    <div class="part1">
                        <button class="btn">
                        <div class="independiente">
                            <img src="img/answer-3-1.png" alt="Pequeña: menos de 3 páginas/50 productos" class="foto-pag2">
                            <p class="espaciado">Interfaz sencilla</p>
                        </div>
                        </button>
                        <button class=" btn">
                        <div class="independiente">
                            <img src="img/answer-3-2.png" alt="Grande: más de 10 páginas/200 productos" class="foto-pag2">
                            <p>Interfaz personalisada</p>
                        </div>    
                        </button>
                    </div>
                    <div class="part2">
                        <button class="btn">
                        <div class="independiente">
                            <img src="img/answer-3-3.png" alt="Mediana: menos de 10 páginas/200 productos" class="foto-pag2">
                            <p>Interfaz replica de la web</p>
                        </div>
                        </button>
                        <button class="btn">
                        <div class="independiente">
                            <img src="img/answer-3-4.png" alt="No lo se" class="foto-pag2">
                            <p>No necesito diseño</p>
                        </div>
                        </button>
                        
                    </div>
                    
                </div>
            </div>
            <script src="/paginas/texto y link/textoylink.js"></script>
        </body>
        `
    }
    static get styles() {
        return css`
        *{
            margin: 0;
            padding: 0;
            color: #ffffff;
        }
        
        body{
            height: 100%;
            padding: 1rem;
            padding-bottom: 0;
            padding-top: 0;
        }
        
        body, html {
            position: relative;
            height: 100%;
            background-color: rgb(61, 57, 53); 
            
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
            background:rgb(61, 57, 53);
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
}
window.customElements.define('plantilla-mitad', MediumPlantilla)

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

export class MediumPlantilla_pag2 extends LitElement {

    static get properties() {
        return {

        docsHint: { type: String },
        }
    }

    render() {
        return html`
        <header>
            <p><h3>1/10</h3></p>
        </header>
        <body>
        <div class="principal">
                <h2 class="title-pag5">¿Qué nivel de calidad estás buscando?</h2>
                <div class="photos">
                    <div class="part1">
                        <button class="btn">
                            <div class="independiente">
                                <img src="images/pag2/img-1-2.png" alt="sí" class="foto-pag2">
                                <p class="espaciado">Calidad optima</p>
                            </div>
                            </button>
                    </div>
                    <div class="part3">
                        <button class=" btn">
                            <div class="independiente">
                                <img src="images/pag2/img-2-2.png" alt="No" class="foto-pag2">
                                <p>Buena relacion/calidad precio</p>
                            </div>    
                        </button>
                    </div>
                    
                    <div class="part2">
                        <button class="btn">
                            <div class="independiente">
                                <img src="images/pag2/answer-3-2.png" alt="No lo se" class="foto-pag2">
                                <p>No me importa tanto la calidad</p>
                            </div>
                    </div>
                    
                    </button>
                </div>
            </div>
            <script src="/paginas/texto y link/textoylink.js"></script>
        </body>
        `
    }
    static get styles() {
        return css`
        header{
            position: fixed;
            left: 49.5%;
            font-size: 13px;
            top: 30px;
            font-family:Verdana, Geneva, Tahoma, sans-serif;
            color: #fff;
            z-index: 1;
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
                align-items: center ;
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
            }
        }
        `
    }
}
window.customElements.define('plantilla-mitad_pag2', MediumPlantilla_pag2)