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
        .cadauno{
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
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
    newDiv.innerHTML = `
      <h1>¿Cuánto cuesta desarrollar una página web?</h1>
      <p>Si te estás preguntando cuánto cuesta hacer una página web, estás en el lugar adecuado para encontrar la respuesta. Esta calculadora es una herramienta digital impulsada por Yeeply que te permite obtener una cotización para tu página web en apenas un minuto.</p>
      <p>Ten en cuenta que se trata de un coste para tu página web aproximado. Factores como el diseño de la página (a medida o mediante plantilla), las integraciones o las distintas funcionalidades harán que el precio final del proyecto sea más alto o no en función de la complejidad del desarrollo.</p>
      <h1>Diseño web con plantilla vs diseño web a medida</h1>
      <p>¿Ya sabes qué necesitas y qué quieres lograr con tu página web? Responder a esta pregunta es el primer paso. Cuando lo tengas claro podrás pasar a pensar en el desarrollo.</p>
      <p>Crear una página web mediante una plantilla no es lo mismo que desarrollarla desde cero. El coste de una página web con cada uno de estos métodos será diferente. Además, cada uno tiene sus ventajas y desventajas. Te damos algunos ejemplos:</p>
      <div class="tabla">
          <div class="cadauno">
              <p>*</p>
              <p>Las plantillas para diseñar una web agilizan el proceso de desarrollo. Sin embargo, una de sus desventajas es que normalmente hacen que la página web cargue más lentamente.</p>
          </div>
          <div class="cadauno">
              <p>*</p>
              <p>Las páginas web con un diseño a medida tendrán un layout único y que responde perfectamente a lo que buscas. Como inconveniente, es necesario dedicar más horas a su desarrollo, lo que se traduce en un coste mayor.</p>
          </div>
      </div>
      <p>¿Por qué opción te decantas? Si tienes dudas siempre puedes consultarlo con un/a desarrollador/a profesional: él o ella sabrán orientarte hacia la mejor alternativa.</p>
      <h1>El costo de una página web (aproximado) según su tipo</h1>
      <p>Aunque cada web es un mundo, existen algunas categorías generales en las que pueden ser clasificadas. Aquí tienes algunas de ellas con una estimación de la cotización para cada desarrollo:</p>
      <div class="tabla">
          <div class="cadauno">
              <p>*</p>
              <p>Ecommerce. Un comercio electrónico tiene cierta complicación en su creación. Utilizan plataformas como Woocommerce, Magento o Prestashop. El costo aproximado para desarrollar una tienda online es de entre 2.000 € y 8.500 €, una cifra que puede variar según la tecnología que se use.</p>
          </div>
          <div class="cadauno">
              <p>*</p>
              <p>Web o blog en WordPress. Si te has decantado por crear una web a partir de una plantilla, este tipo de web es el tuyo. El proyecto será más económico y tendrás muchas funcionalidades a tu disposición. El precio de estos desarrollos oscila entre los 1.500 € y los 4.500 €, aunque puede alcanzar los 5.000 € si añades funciones complejas.</p>
          </div>
          <div class="cadauno">
              <p>*</p>
              <p>Desarrollo web a medida. Esta es la opción más costosa. El precio de salida ronda los 2.500 € y el coste máximo depende de muchos factores —¡aunque en Yeeply hemos trabajado en proyectos que han alcanzado los 16.000 €!—.</p>
          </div>
      </div>
      <p>En este artículo te contamos cómo encontrar al mejor equipo para crear tu web, sea cual sea su tipo.</p>
      <h1>Costes extras que debes tener en cuenta</h1>
      <p>Existen algunos costos adicionales de los que no te puedes olvidar en un proyecto de desarrollo web:</p>
      <div class="tabla">
          <div class="cadauno">
              <p>*</p>
              <p>Redacción de textos. Es posible que necesites contratar a alguien para preparar los copies de tu web o traducirlos si fuera necesario.</p>
          </div>
          <div class="cadauno">
              <p>*</p>
              <p>Servidor y dominio. Cambiará dependiendo del tráfico que esperes tener en tu web y de tus necesidades técnicas.</p>
          </div>
          <div class="cadauno">
              <p>*</p>
              <p>Multimedia. Iconos, logos, vídeos, fotografías… Si necesitas comprar o crear material visual, tenlo muy presente.</p>
          </div>
          <div class="cadauno">
              <p>*</p>
              <p>Consultoría. Si no sabes por dónde empezar contratar este servicio puede serte muy útil.</p>
          </div>
          <div class="cadauno">
              <p>*</p>
              <p>Marketing. Aquí debes incluir las estrategias y canales que utilizarás para atraer visitas a tu sitio web.</p>
          </div>
          <div class="cadauno">
              <p>*</p>
              <p>Mantenimiento. Incluso cuando hayas lanzado tu sitio web deberás estar pendiente de arreglar cualquier fallo, mejorar los textos, optimizar su carga…</p>
          </div>
      </div>
      <h1>Cuánto vale crear una página web paso a paso</h1>
      <p>En proyecto web intervienen profesionales con experiencia de diferentes perfiles. Entre todos harán frente al diseño (UX y UI), desarrollo (front-end y back-end) y contenido (copywriting) del sitio web.</p>
      <p>Para abordar todos estos ámbitos, asegúrate de contratar a profesionales que sepan muy bien lo que hacen —aunque no formes un equipo para el desarrollo de tu web—. Intenta, además, que estos perfiles tengan experiencia demostrable en proyectos similares al tuyo.</p>
      <p>¿Cuál sería la situación idónea? Que formes un equipo en el que todos los componentes trabajen estas áreas en paralelo de manera coordinada. Antes de encontrar a tu equipo, ten muy claros los siguientes puntos:</p>
      <div class="tabla">
          <div class="cadauno">
              <p>*</p>
              <p>Funcionalidades. Pregúntate qué acciones quieres que realicen tus usuarios en tu web, algo que puede variar en función del tipo de usuario y de sus objetivos. Algunos ejemplos son una plataforma de pago online, opciones de registro a partir de redes sociales o un sistema de cita previa. Tu desarrollador/a necesitará un listado de estas acciones.</p>
          </div>
          <div class="cadauno">
              <p>*</p>
              <p>Diseño. Para facilitarle el trabajo a tu diseñador/a puedes preparar bocetos o un moodboard con recursos gráficos que te inspiran. Pregúntate cómo quieres que sea tu sitio web y qué impresión debe transmitir.</p>
          </div>
          <div class="cadauno">
              <p>*</p>
              <p>Contenidos. ¿Te importa el posicionamiento y las conversiones de tu página web? Entonces contrata a un/a copywriter experto/a. Él o ella sabrá adaptar los textos a tus destinatarios y objetivos, garantizando siempre que se comunica el mensaje acertado para generar confianza.</p>
          </div>
          <div class="cadauno">
              <p>*</p>
              <p>Estructura. No subestimes este punto, es muy importante. Una mala estructura web empeorará la usabilidad, el posicionamiento y la velocidad de carga de tu sitio web. Un equipo de expertos/as te ayudará a sortear los errores más comunes.</p>
          </div>
      </div>
      <h1>Los principales lenguajes de programación en el desarrollo web</h1>
      <p>Hoy en día existen muchos lenguajes de programación empleados en la creación de una página web. En algunas ocasiones incluso se llega a utilizar más de un lenguaje para un mismo sitio web. Repasemos algunos de ellos.</p>
      <p>La parte front-end de una web es aquella que se encarga de la parte visual del sitio, es decir, lo que el usuario ve a simple vista cuando entra en una web. Para esta parte los lenguajes a utilizar son HTML y CSS. Aunque desde el punto de vista técnico estos no son lenguajes de programación, ambos son necesarios para dar forma a una página y definir sus estilos.</p>
      <p>A ellos se suma Javascript, el lenguaje de programación que se utiliza para que todo funcione. Es un lenguaje tan extendido que casi cualquier página hoy en día lo emplea.</p>
      <p>Por otro lado tenemos el back-end de la web (o lado del servidor de una página web). Se trata de la parte oculta para el usuario. Los desarrolladores que trabajan el back-end también pueden usar Javascript junto a otros lenguajes comunes como PHP, Python, Ruby... De hecho, es común usar más de un lenguaje.</p>
      <p>¿No sabes qué lenguaje de programación deberías usar para tu sitio web? ¡Es normal! Te recomendamos que hables con un/a experto/a en desarrollo web que pueda ayudarte a tomar la decisión adecuada.</p>
      <h1>¿Es una buena idea hacer una página web gratis?</h1>
      <p>Quizás te has preguntado cómo crear una página web gratis en algún momento. Si estás valorando esta opción, ten en cuenta los siguientes inconvenientes...</p>
      <div class="tabla">
          <div class="cadauno">
              <p>*</p>
              <p>Siempre tiene algún coste. Hasta los programas que te permiten crear una web gratis tienen que obtener ingresos de alguna forma. Por ello, no te extrañes si de repente te ves obligado/a a contratar la versión premium para hacer la web que quieres hacer.</p>
          </div>
          <div class="cadauno">
              <p>*</p>
              <p>Limitaciones en el hosting. Un buen hosting mejorará la velocidad de carga de tu sitio web y será más fiable en caso de un pico de tráfico. Cuando optas por un servicio gratuito, el espacio de almacenaje está muy limitado.</p>
          </div>
          <div class="cadauno">
              <p>*</p>
              <p>Limitaciones en la personalización. Con una plantilla predefinida y gratuita es posible que el resultado final de tu web no sea del todo profesional. También es posible que encuentres restricciones en las funcionalidades o en aspectos más técnicos.</p>
          </div>
          <div class="cadauno">
              <p>*</p>
              <p>No tendrás un dominio personalizado. Tener tu propio dominio tiene un coste. Las plataformas gratuitas para crear una web te ofrecen una URL larga o un subdominio con su nombre. Esto da una imagen poco profesional y perjudica tu visibilidad. Además, si la plataforma cierra, también desaparecerá tu web.</p>
          </div>
          <div class="cadauno">
              <p>*</p>
              <p>Peores resultados de posicionamiento en buscadores. Sobre todo en el más importante de ellos: Google. Sin un dominio propio, y con los demás problemas que hemos mencionado, te será muy complicado aparecer en la primera página. Es posible que termines necesitando contratar a un SEO experto que, de todas maneras, tendrá sus tareas limitadas por tu sitio web. Recuerda: si no apareces en Google es como si no existieras.</p>
          </div>
          <div class="cadauno">
              <p>*</p>
              <p>Falta de soporte técnico. Incluso después de haber lanzado una página web tienes que estar pendiente de posibles problemas que surjan. Sin un soporte técnico, te quedarás al descubierto.</p>
          </div>
      </div>
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
              <br>3. Errores de ortografía y gramática. La ortografía y gramática en la página web juegan un papel importante. Debes asegurarte de que todos los textos de tu sitio web no contengan errores de ortografía o gramática. Cuida la ortografía y gramática del texto porque son parte de la imagen de tu empresa y porque aportan calidad y profesionalidad. Si tienes dudas sobre cómo escribir correctamente algún término, haz una búsqueda en Internet o consulta la RAE (Real Academia Española).<br>
              <br>4. Falta de información de contacto. Si deseas que tus usuarios confíen en ti y en tu negocio, debes proporcionarles toda la información de contacto necesaria. Esta información debe ser fácil de encontrar y comprender. Asegúrate de incluir un formulario de contacto, tu dirección de correo electrónico, tu número de teléfono, tu dirección física (si tienes una tienda física) y cualquier otro detalle de contacto que consideres importante. Cuanta más información de contacto proporciones, más confiarán tus usuarios en tu negocio.<br>
              <br>5. No tener una página web adaptada a dispositivos móviles. Cada vez más personas acceden a Internet desde sus dispositivos móviles, por lo que es fundamental que tu página web esté adaptada a estos dispositivos. Si tu página web no está adaptada a dispositivos móviles, perderás una gran cantidad de tráfico y posibles clientes. Asegúrate de que tu página web se vea bien y funcione correctamente en todos los dispositivos móviles. Utiliza un diseño responsive para que tu página web se adapte automáticamente al tamaño de la pantalla del dispositivo del usuario.<br>
              <br>6. Diseño poco atractivo. El diseño de tu página web juega un papel fundamental en la experiencia del usuario. Si el diseño de tu página web es poco atractivo o desactualizado, tus usuarios no se sentirán atraídos por tu negocio y abandonarán tu página web rápidamente. Asegúrate de utilizar un diseño moderno y atractivo que se adapte a la identidad visual de tu negocio. Utiliza colores, tipografías, imágenes y elementos visuales que reflejen la personalidad y el estilo de tu negocio. También asegúrate de utilizar un diseño limpio y organizado que facilite la navegación y la comprensión del contenido.<br>
              <br>7. Contenido irrelevante o desactualizado. El contenido de tu página web debe ser relevante, útil y actualizado. Si el contenido de tu página web es irrelevante, obsoleto o desactualizado, tus usuarios no encontrarán lo que están buscando y abandonarán tu página web rápidamente. Asegúrate de crear y publicar contenido de alta calidad que sea relevante para tu audiencia y esté actualizado. Utiliza un lenguaje claro y conciso que sea fácil de entender y evita utilizar jerga o tecnicismos que puedan confundir a tus usuarios.<br>
              <br>8. Falta de llamadas a la acción. Las llamadas a la acción son elementos importantes en cualquier página web porque guían a tus usuarios a realizar una acción específica, como comprar un producto, suscribirse a un boletín de noticias o ponerse en contacto contigo. Si tu página web carece de llamadas a la acción o las llamadas a la acción son poco claras o poco atractivas, tus usuarios no sabrán qué hacer y abandonarán tu página web rápidamente. Asegúrate de incluir llamadas a la acción claras, atractivas y relevantes en todas las páginas de tu sitio web y guía a tus usuarios a realizar la acción deseada.</p>
      </div>
      <p>Recuerda: tu página web es la cara de tu negocio en Internet, por lo que es fundamental que sea profesional, atractiva, útil y fácil de usar. Evita cometer estos errores y asegúrate de crear una página web que refleje la calidad y el profesionalismo de tu negocio.</p>
    `;
    
    // Agregar el nuevo elemento al final del cuerpo del documento
    document.body.appendChild(newDiv);
});
  