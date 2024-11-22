
import { Link } from "react-router-dom";
import '../css/style-index.css'
import Logo from '../assets/images/logo.png'
function Header()
{
    return(
        <div>
            <header className="sm:px-10 md:px-20 header">
                <a href="#" className=''><img className="img-header inline text-center" src={Logo} /></a>
                <ul>
                    <li><Link className='a-header' to="/">Inicio</Link></li>
                    <li><Link className='a-header' to="/Prototipo">Prototipo</Link></li>
                    <li><Link className='a-header' to="/SobreNosotros">Sobre Nosotros</Link></li>
                    <li><Link className='a-header' to="/Contactanos">Contactanos</Link></li>

                </ul>
            </header>
        </div>
    );
}

export default Header;