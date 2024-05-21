// JavaScript para crear y agregar HTML dinámicamente
document.addEventListener("DOMContentLoaded", function() {
    // Crear un nuevo elemento div
    let newDiv = document.createElement("div");
    
    // Aplicar estilos al nuevo elemento
    function agregarEstilos() {
        // Crear un nuevo elemento style
        let style = document.createElement('style');
        
        // Definir los estilos que deseas agregar
        let styles = `
        *{
            font-family: 'arial';
            background-color: #eff5f9;
            color: #3d3935;
        }
        body{
            max-width: 960px;
            margin-left: auto;
            margin-right: auto;
            height: 100%;
            padding: 1rem;
        }
        h1{
            text-align: center;
            display: block;
            font-size: 1.5em;
            margin-block-start: 0.83em;
            margin-block-end: 0.83em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            font-weight: bold;
        }
        p{
            display: block;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
        }
        `;
        
        // Agregar los estilos al contenido del elemento style
        style.innerHTML = styles;
        
        // Agregar el elemento style al head del documento HTML
        document.head.appendChild(style);
    }
    
    // Llamar a la función para agregar los estilos cuando se cargue la página
    window.onload = function() {
        agregarEstilos();
    };
    
    
    // Agregar contenido al nuevo elemento

    //PONER UL Y LI PARA HACER LAS LISTAS QUE USTED LE PUSO UN ASTERISCO PERRO SARNOSO
    newDiv.innerHTML = `<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>¿Cuanto cuesta crear una pagina o sitio web</title>
        <link rel="stylesheet" href="pag1.css">
    </head>
    <body>
        <h1>¿Cuánto cuesta desarrollar una página web?</h1>
        <p>Si te estás preguntando cuánto cuesta hacer una página web, estás en el lugar adecuado para encontrar la respuesta. Esta calculadora es una herramienta digital impulsada por Yeeply que te permite obtener una cotización para tu página web en apenas un minuto.</p>
        <p>Ten en cuenta que se trata de un coste para tu página web aproximado. Factores como el diseño de la página (a medida o mediante plantilla), las integraciones o las distintas funcionalidades harán que el precio final del proyecto sea más alto o no en función de la complejidad del desarrollo.</p>
        <h1>Diseño web con plantilla vs diseño web a medida</h1>
        <p>¿Ya sabes qué necesitas y qué quieres lograr con tu página web? Responder a esta pregunta es el primer paso. Cuando lo tengas claro podrás pasar a pensar en el desarrollo.</p>
        <p>Crear una página web mediante una plantilla no es lo mismo que desarrollarla desde cero. El coste de una página web con cada uno de estos métodos será diferente. Además, cada uno tiene sus ventajas y desventajas. Te damos algunos ejemplos:</p>
        <ul>
            <li>Las plantillas para diseñar una web agilizan el proceso de desarrollo. Sin embargo, una de sus desventajas es que normalmente hacen que la página web cargue más lentamente.</p>
            <li>Las páginas web con un diseño a medida tendrán un layout único y que responde perfectamente a lo que buscas. Como inconveniente, es necesario dedicar más horas a su desarrollo, lo que se traduce en un coste mayor.</p>
        </ul>
        <p>¿Por qué opción te decantas? Si tienes dudas siempre puedes consultarlo con un/a desarrollador/a profesional: él o ella sabrán orientarte hacia la mejor alternativa.</p>
        <h1>El costo de una página web (aproximado) según su tipo</h1>
        <p>Aunque cada web es un mundo, existen algunas categorías generales en las que pueden ser clasificadas. Aquí tienes algunas de ellas con una estimación de la cotización para cada desarrollo:</p>
        <ul>
                <li>Ecommerce. Un comercio electrónico tiene cierta complicación en su creación. Utilizan plataformas como Woocommerce, Magento o Prestashop. El costo aproximado para desarrollar una tienda online es de entre 2.000 € y 8.500 €, una cifra que puede variar según la tecnología que se use.</p>
                <li>Web o blog en WordPress. Si te has decantado por crear una web a partir de una plantilla, este tipo de web es el tuyo. El proyecto será más económico y tendrás muchas funcionalidades a tu disposición. El precio de estos desarrollos oscila entre los 1.500 € y los 4.500 €, aunque puede alcanzar los 5.000 € si añades funciones complejas.</p>
                <li>Desarrollo web a medida. Esta es la opción más costosa. El precio de salida ronda los 2.500 € y el coste máximo depende de muchos factores —¡aunque en Yeeply hemos trabajado en proyectos que han alcanzado los 16.000 €!—.</p>
        </ul>
        <p>En este artículo te contamos cómo encontrar al mejor equipo para crear tu web, sea cual sea su tipo.</p>
        <h1>Costes extras que debes tener en cuenta</h1>
        <p>Existen algunos costos adicionales de los que no te puedes olvidar en un proyecto de desarrollo web:</p>
        <ul>
                <li>Redacción de textos. Es posible que necesites contratar a alguien para preparar los copies de tu web o traducirlos si fuera necesario.
                <li>Servidor y dominio. Cambiará dependiendo del tráfico que esperes tener en tu web y de tus necesidades técnicas.
                <li>Multimedia. Iconos, logos, vídeos, fotografías… Si necesitas comprar o crear material visual, tenlo muy presente.
                <li>Consultoría. Si no sabes por dónde empezar contratar este servicio puede serte muy útil.
                <li>Marketing. Aquí debes incluir las estrategias y canales que utilizarás para atraer visitas a tu sitio web.
                <li>Mantenimiento. Incluso cuando hayas lanzado tu sitio web deberás estar pendiente de arreglar cualquier fallo, mejorar los textos, optimizar su carga…
        </ul>
        <h1>Cuánto vale crear una página web paso a paso</h1>
        <p>En proyecto web intervienen profesionales con experiencia de diferentes perfiles. Entre todos harán frente al diseño (UX y UI), desarrollo (front-end y back-end) y contenido (copywriting) del sitio web.</p>
        <p>Para abordar todos estos ámbitos, asegúrate de contratar a profesionales que sepan muy bien lo que hacen —aunque no formes un equipo para el desarrollo de tu web—. Intenta, además, que estos perfiles tengan experiencia demostrable en proyectos similares al tuyo.</p>
        <p>¿Cuál sería la situación idónea? Que formes un equipo en el que todos los componentes trabajen estas áreas en paralelo de manera coordinada. Antes de encontrar a tu equipo, ten muy claros los siguientes puntos:</p>
        <ul>
                <li>Funcionalidades. Pregúntate qué acciones quieres que realicen tus usuarios en tu web, algo que puede variar en función del tipo de usuario y de sus objetivos. Algunos ejemplos son una plataforma de pago online, opciones de registro a partir de redes sociales o un sistema de cita previa. Tu desarrollador/a necesitará un listado de estas acciones.</p>
                <li>Diseño. Para facilitarle el trabajo a tu diseñador/a puedes preparar bocetos o un moodboard con recursos gráficos que te inspiran. Pregúntate cómo quieres que sea tu sitio web y qué impresión debe transmitir.</p>
                <li>Contenidos. ¿Te importa el posicionamiento y las conversiones de tu página web? Entonces contrata a un/a copywriter experto/a. Él o ella sabrá adaptar los textos a tus destinatarios y objetivos, garantizando siempre que se comunica el mensaje acertado para generar confianza.</p>
                <il>Estructura. No subestimes este punto, es muy importante. Una mala estructura web empeorará la usabilidad, el posicionamiento y la velocidad de carga de tu sitio web. Un equipo de expertos/as te ayudará a sortear los errores más comunes.</p>
        </ul>
        <h1>Los principales lenguajes de programación en el desarrollo web</h1>
        <p>Hoy en día existen muchos lenguajes de programación empleados en la creación de una página web. En algunas ocasiones incluso se llega a utilizar más de un lenguaje para un mismo sitio web. Repasemos algunos de ellos.</p>
        <p>La parte front-end de una web es aquella que se encarga de la parte visual del sitio, es decir, lo que el usuario ve a simple vista cuando entra en una web. Para esta parte los lenguajes a utilizar son HTML y CSS. Aunque desde el punto de vista técnico estos no son lenguajes de programación, ambos son necesarios para dar forma a una página y definir sus estilos.</p>
        <p>A ellos se suma Javascript, el lenguaje de programación que se utiliza para que todo funcione. Es un lenguaje tan extendido que casi cualquier página hoy en día lo emplea.</p>
        <p>Por otro lado tenemos el back-end de la web (o lado del servidor de una página web). Se trata de la parte oculta para el usuario. Los desarrolladores que trabajan el back-end también pueden usar Javascript junto a otros lenguajes comunes como PHP, Python, Ruby... De hecho, es común usar más de un lenguaje.</p>
        <p>¿No sabes qué lenguaje de programación deberías usar para tu sitio web? ¡Es normal! Te recomendamos que hables con un/a experto/a en desarrollo web que pueda ayudarte a tomar la decisión adecuada.</p>
        <h1>¿Es una buena idea hacer una página web gratis?</h1>
        <p>Quizás te has preguntado cómo crear una página web gratis en algún momento. Si estás valorando esta opción, ten en cuenta los siguientes inconvenientes...</p>
        <ul>
                <li>Siempre tiene algún coste. Hasta los programas que te permiten crear una web gratis tienen que obtener ingresos de alguna forma. Por ello, no te extrañes si de repente te ves obligado/a a contratar la versión premium para hacer la web que quieres hacer.</p>
                <li>Limitaciones en el hosting. Un buen hosting mejorará la velocidad de carga de tu sitio web y será más fiable en caso de un pico de tráfico. Cuando optas por un servicio gratuito, el espacio de almacenaje está muy limitado.</p>
                <li>Limitaciones en la personalización. Con una plantilla predefinida y gratuita es posible que el resultado final de tu web no sea del todo profesional. También es posible que encuentres restricciones en las funcionalidades o en aspectos más técnicos.</p>
                <li>No tendrás un dominio personalizado. Tener tu propio dominio tiene un coste. Las plataformas gratuitas para crear una web te ofrecen una URL larga o un subdominio con su nombre. Esto da una imagen poco profesional y perjudica tu visibilidad. Además, si la plataforma cierra, también desaparecerá tu web.</p>
                <li>Peores resultados de posicionamiento en buscadores. Sobre todo en el más importante de ellos: Google. Sin un dominio propio, y con los demás problemas que hemos mencionado, te será muy complicado aparecer en la primera página. Es posible que termines necesitando contratar a un SEO experto que, de todas maneras, tendrá sus tareas limitadas por tu sitio web. Recuerda: si no apareces en Google es como si no existieras.</p>
                <li>Falta de soporte técnico. Incluso después de haber lanzado una página web tienes que estar pendiente de posibles problemas que surjan. Sin un soporte técnico, te quedarás al descubierto.</p>
        </ul>
        <h1>Preguntas fundamentales que debes responder antes de hacer un sitio web</h1>
        <p>Si estás decidido/a a poner en marcha tu proyecto de desarrollo web, presta atención a lo que te contamos a continuación. Aunque quizás ya has empezado a pensar en contratar a un equipo profesional, primero responde a estas preguntas.</p>
        <h2>Preguntas técnicas:</h2>
        <div class="tabla">
            <p>1. ¿Qué estructura requiere tu sitio web?<br>
            2. ¿Qué funcionalidades no pueden faltar?<br>
            3. ¿Qué tecnología vas a implementar?<br>
            4. ¿En cuántos idiomas necesitas que esté disponible tu sitio?<br>
            5. ¿De qué áreas técnicas necesitas expertos/as para el desarrollo?</p>
        </div>
        <h2>Preguntas tácticas:</h2>
        <div class="tabla">
            <p>1. ¿Cuál es la meta más importante de tu página web?<br>
            2. ¿Quién va a ser tu público objetivo?<br>
            3. ¿Qué acciones esperas que hagan en tu sitio?<br>
            4. ¿Cuál es tu valor diferencial?<br>
            5. ¿Quiénes son tus competidores directos?</p>
        </div>
        <p>Tener las respuestas a estas preguntas claras te ayudará a facilitar tu comunicación con el equipo de desarrollo en las fases posteriores.</p>
        <h1>Ahorra tiempo y dinero: no cometas estos errores en el diseño web</h1>
        <p>A continuación te mostramos los 8 errores más típicos que debes evitar en el diseño web de tu página. Debes contar con ellos antes de empezar tu sitio web para así optimizar tu tiempo e inversión.</p>
        <div class="tablaa">
            <p>1. Contenido escaso. Una gran cantidad de sitios web contienen una buena estructura pero su principal fallo es no facilitar el contenido que sus usuarios están buscando. Podemos crear una página para cada producto pero si solo tiene una pequeña descripción y/o imagen del producto no le aportará valor al usuario. Es fundamental añadir toda la información posible del producto para que el usuario pueda leerla. Si no haces esto, tus usuarios abandonarán la página rápidamente porque no tendrá nada que aportarles. Pero también hay que tener cuidado con excedernos con el texto: si la página contiene demasiado texto puede resultar poco atractiva para el lector, sobre todo si la información aportada no es relevante.<br>
                <br>2. Navegación compleja. Hay que tratar de que toda la información importante de tu página web sea fácilmente accesible. Debes hacer todo lo posible para que el usuario no tenga que hacer más de tres clics para llegar desde la página principal del sitio a la página de servicios/productos que ofreces, cómo funciona, página de precios, etc. No se recomiendan para nada submenús que nunca acaban ni ofrecer más de un menú de navegación.<br>
                <br>3. Errores 404. Cuando un usuario intenta acceder a una página de un sitio web que ya no existe le aparece un error 404. La experiencia de usuario puede verse afectada negativamente si tu sitio web contiene errores de este tipo. A buscadores como Google tampoco les gustan los errores 4040. Google puede interpretar que el contenido de tu sitio web no se actualiza, afectando como consecuencia de esto al ranking (SERP) de los motores de búsqueda.<br>
                <br>4. Velocidad excesiva en la carga. Los elementos gráficos (imágenes, vídeos y/o animaciones) de tu sitio web pueden ralentizar notablemente la carga. Para solucionar esto debes optimizarlos adecuadamente para que no tarden más de 3 segundos en visualizarse.<br>
                <br>5. Falta de identidad corporativa. Las tendencias marcan los diseños de los sitios web. Es bueno adaptarse a las tendencias y seguirlas, siempre y cuando no copies los sitios web. Usa ejemplos de páginas web que encuentres pero siempre para inspirarte, adaptándolos a tu identidad corporativa. Asegúrate de que tu sitio web lleva tus colores corporativos y de que mantiene la línea y la coherencia.<br>
                <br>6. SEO Black Hat. La optimización para los buscadores (SEO) es fundamental para ganar tráfico orgánico en tu sitio web. Existen técnicas o trucos para obtener mejores posiciones en el ranking de búsquedas de manera no natural, llamadas Black Hat SEO, las cuales no recomendamos utilizar. Rellenar con palabras clave el texto excesivamente y sin fundamento es penalizado por los buscadores. Esto te afectará a tu posicionamiento en Google y tendrás que dedicar mucho tiempo y esfuerzo en solucionarlo.<br>
                <br>7. Dificultad de lectura en las fuentes empleadas. El tipo y tamaño de las fuentes de tu sitio deben ser elegidas con cautela. Cuidado con utilizar fuentes de difícil lectura para buscar la originalidad. No obstante, utiliza diferentes tipos de fuentes para diferenciar los títulos de los subtítulos y/o el texto. ¡Define bien el tamaño de cada fuente!<br>
                <br>8. Imágenes de calidad baja. Tienes que evitar emplear imágenes con una alta resolución: así optimizarás la velocidad de carga, como hemos mencionado antes. Pero no te excedas porque las imágenes pueden pixelarse o distorsionarse. Busca el equilibrio.</p>
        </div>
        <h1>¿Cómo localizar a los desarrolladores que necesito para crear mi sitio web?</h1>
        <p>¿Sabes cómo encontrar un equipo de desarrollo web ideal para la creación de tu proyecto? ¿Tienes problemas para elegir el equipo adecuado o dudas entre uno y otro? ¡Tranquilo/a! Nosotros te ayudamos a tomar la mejor decisión.</p>
        <p>Es común dudar sobre estos temas. Por este motivo, hemos hecho un checklist para que pueda servirte de ayuda y conseguir el equipo que necesitas para tu proyecto web. Te mostramos los requisitos con los que deben contar:</p>
        <ul>
                <li>Experiencia previa de trabajo con las tecnologías necesarias. Los sistemas de gestión de contenidos (CMS) son diferentes entre sí. No es lo mismo un experto para crear tu sitio web en Wordpress que en Drupal o Joomla, entre otros. Asegúrate de que tu equipo de desarrolladores/as elegido controla el CMS que has escogido.</p>
                <li>Comprensión de tus objetivos. Para que el sitio web que tienes en mente pase de idea a la realidad, comprueba que tu equipo de expertos/as te entiende. Es fundamental que tu sitio web cumpla tus expectativas y objetivos.</p>
                <li>Experiencia creando sitios webs parecidos. No es lo mismo una página web corporativa para tu empresa que una tienda online, busca equipos que tengan experiencia previa en lo que tu proyecto necesita. Pídeles ejemplos de trabajos anteriores para estar seguro de que cumplirán con lo que estás buscando.</p>
                <li>Perfiles necesarios disponibles. Los perfiles que tu proyecto necesita (un/a desarrollador/a front-end y back-end, un/a diseñador/a un/a redactor/a, etc.) deben estar a tu disposición. Ten claro desde el principio que el proveedor que elijas los tiene disponibles para desarrollar tu sitio web.</p>
                <li>Servicio a precio razonable. Debes ajustar tu proyecto o negociar el precio final si cuentas con un presupuesto limitado. Elegir, por ejemplo, un Producto Mínimo Viable (MVP), con el que comiences con las funciones más básicas de tu página web, esenciales para su desarrollo. En un futuro podrás ir añadiendo funciones adicionales conforme dispongas de mayor presupuesto.</p>
                <li>Propuesta clara y completa. Sabemos que no quieres imprevistos ni sorpresas en tu presupuesto final. Así que, cuando recibas la propuesta, comprueba que todo tu proyecto está cubierto completamente. Asegúrate además de que podrán cumplir con todos los plazos establecidos.</p>
        </ul>
        <h1>¿En qué lugar puedo encontrar el mejor equipo de desarrollo?</h1>
        <p>Antes de realizar todas estas preguntas al equipo de especialistas en desarrollo web necesitas encontrarlo. Te mostramos los lugares más comunes donde encontrar al equipo que estás buscando:</p>
        <ul>
                <li>Buscadores. Puedes encontrar empresas, freelancers, agencias, etc. a través de un buscador como Google. No obstante, encontrar a la primera a los mejores perfiles, con experiencia previa, tiempo disponible y presupuesto adaptado a tus necesidades es más difícil de lo que piensas. Debes filtrar bien las opciones para encontrar el equipo adecuado.</p>
                <li>Plataformas online para encontrar freelancers. En la actualidad existen diferentes plataformas o páginas web donde podemos encontrar trabajadores independientes para desarrollar cualquier tipo de proyecto que estemos interesados. Ahora sí, una vez que hayas encontrado el perfil de desarrollador/a web que estás buscando no olvides comprobar su portfolio personal, es decir, los trabajos que que haya elaborado anteriormente. Sobre todo, asegúrate de que estos proyectos son reales, ya que las valoraciones y reseñas en sus perfiles podrían no ser 100 % reales.</p>
                <li>Marketplaces tecnológicos. ¿Conoces marketplaces online que puedan buscar por ti el equipo ideal para desarrollar tu proyecto? En los marketplaces encontrarás específicamente los perfiles adecuados que necesitas. Diseñadores/as de UX y UI, desarrolladores/as front-end y back-end, expertos/as SEO, etc. Con Yeepply, encontrarás el equipo ideal que garantizará tus necesidades ajustándose a tu presupuesto.</p>
        </ul>
        <p>Si esta opción es la que más te interesa, continúa leyendo para que sepas cómo puedes comenzar tu proyecto a través de nosotros.</p>
        <h1>Contrata a los mejores especialistas para desarrollar tu sitio web</h1>
        <p>¿Todavía te preguntas "cuánto cuesta mi web"? Si no te ha parecido lo suficientemente preciso el resultado que has obtenido en la calculadora, pídenos gratuitamente un presupuesto personalizado para desarrollar tu web a través de este enlace.</p>
        <p>El precio de una página web varía mucho en función del equipo de desarrollo que necesites, además cada sitio web es diferente. ¿Necesitas ayuda para contratar la solución más adaptada y competitiva para ti?</p>
        <p>En la plataforma <a href="https://www.yeeply.com/?utm_source=CCMW-CO&utm_medium=text&utm_campaign=microsites" target="_blank">Yeeply</a> encontrarás el equipo perfecto que necesitas para crear tu sitio web, ya que cuenta con desarrolladores/as de primera categoría. Nuestra experiencia ganada durante años nos ha convertido en expertos dentro de la industria del desarrollo web. Puedes comprobarlo a través del siguiente enlace para ver <a href="https://www.yeeply.com/clientes/?utm_source=CCMW-CO&utm_medium=text&utm_campaign=microsites" target="_blank">nuestros casos de éxito.</a></p>
    </body>
    </html>`;
    
    // Agregar el nuevo elemento al final del cuerpo del documento
    document.body.appendChild(newDiv);
});
