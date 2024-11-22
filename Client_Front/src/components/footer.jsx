
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../css/style-index.css'
import Logo from '../assets/images/logo.png'
import FondoFace from '../assets/images/fondo-footer-facebook.jpg'

function Footer(){

    return(
        <div>
            {/*  footer */}
      <div className="footer h-auto bg-slate-800 sm:h-80 select-none">
        {/* Redes sociales */}
        <div className="grid grid-cols-1 sm:grid-cols-4 justify-center bg-orange-100">
          {/* Facebook */}
          <div className="relative bg-gradient-to-r overflow-hidden">
            <img className="h-24 w-full" src={FondoFace} alt="" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-black z-2">
              <i className="bi bi-facebook text-4xl"></i>
              <p className="text-center font-extrabold text-2xl">Facebook</p>
            </div>
            <div className="absolute inset-0 bg-[#26ADE4] opacity-60"></div>
          </div>
          {/* Instagram */}
          <div className="relative bg-gradient-to-r overflow-hidden">
            <img className="h-24 w-full" src={FondoFace} alt="" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-black z-2">
              <i className="bi bi-instagram text-4xl"></i>
              <p className="text-center font-extrabold text-2xl">Instagram</p>
            </div>
            <div className="absolute inset-0 bg-[#26ADE4] opacity-60"></div>
          </div>
          {/* YouTube */}
          <div className="relative bg-gradient-to-r overflow-hidden">
            <img className="h-24 w-full" src={FondoFace} alt="" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-black z-2">
              <i className="bi bi-youtube text-4xl"></i>
              <p className="text-center font-extrabold text-2xl">YouTube</p>
            </div>
            <div className="absolute inset-0 bg-[#26ADE4] opacity-60"></div>
          </div>
          {/* Whatsapp */}
          <div className="relative bg-gradient-to-r from-cyan-500 to-blue-500 overflow-hidden">
            <img className="h-24 w-full" src={FondoFace} alt="" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-black z-2">
              <i className="bi bi-whatsapp text-4xl"></i>
              <p className="text-center font-extrabold text-2xl">Whatsapp</p>
            </div>
            <div className="absolute inset-0 bg-[#26ADE4] opacity-60"></div>
          </div>
        </div>

        {/* Contenido principal del footer */}
        <footer className="m-2 flex flex-col sm:flex-row justify-between items-center text-white">
          {/* Parte del logo */}
          <div className=" sm:mb-0">
            <img className="w-48" src={Logo} alt="Logo" />
          </div>

          {/* Parte de links de navegación */}
          <div className=" text-start  sm:text-center w-60 mt-4">
            <ul className="text-white line-clamp-4">
              <li className="block text-center p-2"><Link className="a-footer" to="/Prototipo">Prototipo</Link></li>
              <li className="block text-center p-2"><Link className="a-footer" to="/SobreNosotros">Sobre Nosotros</Link></li>
              <li className="block text-center p-2"><Link className="a-footer" to="/Contactanos">Contactanos</Link></li>
            </ul>
          </div>

          {/* Parte Centrada del footer */}
          <div className="text-center">
            <div className="mb-2"><h2 className="text-center mt-3">Datos de la empresa</h2></div>
            <div className="mt-4 "><p className="p-1">En RassLight somos una empresa comprometida con la innovación y automatización de 
procesos complejos dentro de productos existentes con potencial sin explotar y reinventar la forma para la que se puede aprovechar al máximo las nuevas tecnologías de forma que se adapte funcionalmente a las necesidades de los usuarios</p></div>
            
          </div>

          {/* Seccion derecha del footer para colocar un pequeño mapa */}
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20227.05784966669!2d-104.62908081016384!3d23.989213441948216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bb833da45df2b%3A0x2392fefbf317535!2sUniversidad%20Tecnol%C3%B3gica%20de%20Durango!5e0!3m2!1ses-419!2smx!4v1710817644315!5m2!1ses-419!2smx" className="w-48 ml-5 h-auto" />
          </div>

         
        </footer>
        <div className="inline text-center text-white"><p className="">2024 @RassLight</p></div>
      </div>
        </div>
    )
}

export default Footer;