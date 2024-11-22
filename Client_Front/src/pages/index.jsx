// Pagina Principal Landing
import 'bootstrap-icons/font/bootstrap-icons.css';
// Importar los estilos
import '../css/style-index.css'
// Importar las imagenes a autilizar
import fondoIncio from '../assets/images/fondo-inicio.png'
import software from '../assets/images/soft.jpg'
import Iot from '../assets/images/Iot.jpg'
import Nube from '../assets/images/nube.jpg'
import DesarrolloWeb from '../assets/images/desarrolloweb.png'
// import FondoFace from '../assets/images/fondo-footer-facebook.jpg'

import Header from "../components/header";
import Footer from "../components/footer";

function Index() {

  return (
    <div>
      {/* // Codigo Html */}
      <Header></Header>

      {/* // <!--Presentacion de la pagina -->
    // <!-- Imagen de fondo --> */}
      <img src={fondoIncio} className="img-fluid" alt="No se encontró la imagen" />

      <div className="container">
        <div className="text-image">Bienvenido</div>
        <div className="mb-12 content-info" id="content" >
          <div>¡Bienvenido a nuestra aplicación!</div>
          <div>¡Gracias por unirte a nosotros en nuestra misión de innovación y tecnología IoT! En nuestra aplicación, encontrarás soluciones inteligentes para el monitoreo y control de diversos procesos, incluyendo el emocionante mundo de la purificación de agua.</div>
        </div>
        <a className="button-image" href="#SobreNosotros-info">Explorar</a>
      </div>

      {/* <!-- Informacion acerca de los servicios que se ofrecen en la empresa --> */}
      <div className="div-servicios" id="SobreNosotros-info">
        <a href=""><img src={software} className="img-servicios" alt="No se encontró la imagen" /></a>
        <a href=""><img src={Iot} className="img-servicios" alt="No se encontró la imagen" /></a>
        <a href=""><img src={Nube} className="img-servicios" alt="No se encontró la imagen" /></a>
      </div>

      {/* <!-- Informacion sobre nosotros como empresa --> */}
      <div className="acerca-de-Nosotros md:flex">
        <div className="text-content ">
          <h2 className='text-center pb-2'>Sobre Nosotros</h2>
          <p className='text-xs'>En esta página, nos gustaría compartir un poco más sobre quiénes somos, nuestra pasión por la innovación y cómo nos esforzamos por ofrecer soluciones de vanguardia en el mundo de la tecnología IoT.</p>
          
          <a className="button-image2" href="/SobreNosotros">Ver Más</a>


        </div>

        <img src={DesarrolloWeb} className="img-sobrenosotros " alt="No se encontró la imagen" />
      </div>

      {/* Contenido acerca del Prototipo */}

      <div className='bg-imagen'>
        <h1 className='text-white text-4xl text-center p-10 max-sm:text-2x1'>PROTOTIPO</h1>
        {/* Grid para contenido */}
        <div className='text-white grid grid-cols-3 place-items-center gap-y-16'>
          <div className='row-span-3 '>
            <img className='w-96 h-auto mb-24' src={Nube} alt="No se encontro la imagen" />
          </div>
          <div className=''>
            <h1 className='font-semibold text-center text-2xl max-sm:text-base'>Conectividad a internet</h1>
            <p className='italic text-sm text-neutral-300 max-sm:text-sm p-2'>EL prototipo realizado tiene la capacidad de conectarse a internet y enviar datos directamente a dispositivos moviles.</p>
          </div>
          <div>
            <h1 className='font-semibold text-center text-2xl max-sm:text-base'>Asequibilidad</h1>
            <p className='italic text-sm text-neutral-300 max-sm:text-sm p-2'>Los materiales utilizados por Rasslight están pensados de forma que se obtenga relación calidad-precio de forma que se pueda acceder a prototipos de alto nivel con una inversión realista para empresas y microempresas.</p>
          </div>
          <div>
            <h1 className='font-semibold text-center text-2xl max-sm:text-base'>Innovación</h1>
            <p className='italic text-sm text-neutral-300 max-sm:text-sm p-2'>Dentro de los negocios en el ambito de la distribución de agua purificada no se encuentra con facilidad una medición automatica confiable, por lo que se está innovando en la forma de realizar sus procesos y acortar los tiempos y esfuerzos realizados por los trabajadores.</p>
          </div>
          <div>
            <h1 className='font-semibold text-center text-2xl max-sm:text-base'>Multifuncionalidad</h1>
            <p className='italic text-sm text-neutral-300 max-sm:text-sm p-2'>El prototipo cuenta con la revisión de distitos factores de calidad del agua dentro del mismo dispositivo. Se realizan la funciones suficientes para dar control de calidad al producto del cliente sin necesidad de apostar por un mecanismo distinto para cada proceso-</p>
          </div>
          <div className='col-span-2 m-4 bg-slate-400'>
            <a className="button-image2 mb-12 font-bold" href="/prototipo">Conocer Más</a>
          </div>
        </div>  
      </div>



      {/* Componente Footer */}
      <Footer></Footer>
    </div>




  )
}

{/* // Exportar componente Index */ }
export default Index;

