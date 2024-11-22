// Pagina SObre Nosotros

import "../css/nosotros.css";
import "../css/style-index.css";

// Importar las imagenes a autilizar
import Software from '../assets/images/soft.jpg'
import Logo from '../assets/images/logo.png'

// Importar Componentes
import Header from '../components/header';
import Footer from '../components/footer'


function SobreNosotros() {
  return (
    <div>
      {/* // Codigo Html */}
      <Header></Header>

      <h1 className="titulos">Sobre Nosotros</h1>

      {/* <!-- Botón Modificar Infraestructura --> */}
      <button className="boton-azul">Vision</button>
      <div>
        <div className="contenedor-azul">
          <h2 className="text-white font-semibold text-lg mb-2">
            Infraestructura en la nube
          </h2>
          <p>
            En RassLight, nuestra visión es liderar la revolución tecnológica en
            el mundo de los prototipos IoT. Nos esforzamos por ser reconocidos
            como pioneros en el desarrollo de soluciones inteligentes y
            sostenibles que mejoren la calidad de vida de las personas y
            contribuyan al progreso de la sociedad.
          </p>
        </div>
        <div className="imagen">
          <img className="img" src={Software} alt="Imagen" />
        </div>
    </div>
    <button className="boton-mision">Misión</button>
    
    <div className="mision">
        <div className="imagen2">
            <img className="img2" src={Software} alt="Imagen"/>
        </div>
        <div className="contenedor-azul2">
            <h2 className='text-white font-semibold text-lg mb-2' >Infraestructura en la nube</h2>
            <p>Nuestra misión es proporcionar soluciones innovadoras y personalizadas que aprovechen al máximo el potencial de la tecnología IoT. Nos comprometemos a trabajar en estrecha colaboración con nuestros clientes para entender sus necesidades únicas y ofrecer productos y servicios de la más alta calidad que superen sus expectativas.</p>
        </div>
    </div>
    {/* <br><br><br><br><br><br><br><br><br><br><br> */}
    
  <div className="nuestro-enfoque text-center mt-9 mb-9">
    <h1 className="titulos mb-5">Nuestro Enfoque</h1>
      <div className="flex justify-center items-center mt-8 mb-16">
        <div className="h-60 w-60 rounded-full bg-nosotros flex justify-center items-center">
        <img className="h-32 w-32 " src={Logo} alt="" />
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="bg-infoms h-48 w-96 mr-16">
          <h1 className="font-bold text-xl mt-1 mb-2">Monitoreo Avanzado del Agua</h1>
          <p>Implementamos tecnologías de vanguardia para ofrecer un monitoreo preciso y en tiempo real de la calidad del agua en su purificadora. Nuestra aplicación integra sensores de flujo, pH y turbidez para proporcionar datos detallados sobre el estado del agua en todo momento. </p>
        </div>
        <div className="bg-infoms h-72 w-96 ">
          <h1 className="font-bold text-xl mt-1 mb-2">Control Remoto y Alertas Personalizadas</h1>
          <p>Nuestra plataforma permite un control remoto conveniente de su purificadora de agua desde cualquier lugar. Además, configuramos alertas personalizadas para notificarle instantáneamente sobre cualquier desviación en los niveles de pH, turbidez u otros parámetros importantes, garantizando una respuesta rápida ante cualquier problema.</p>
        </div>
        <div className="bg-infoms h-48 w-96 ml-16">
          <h1 className="font-bold text-xl mt-1 mb-2">Interfaz Intuitiva y Análisis Profundo</h1>
          <p>Diseñamos una interfaz de usuario intuitiva que facilita la comprensión de los datos de monitoreo y el análisis de tendencias a lo largo del tiempo. Ademas puede acceder fácilmente al historial de datos, identificar patrones y tomar decisiones informadas para optimizar la calidad del agua en su purificadora.</p>
        </div>
      </div>
  </div>


    {/* Importar Footer */}
    <Footer></Footer>
    </div>
  );
}

export default SobreNosotros;
