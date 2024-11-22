// Pagina Prototipo landing

// Importar los estilos
import '../css/style-index.css'
import '../css/nosotros.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Importar las imagenes a autilizar
import Sensor from '../assets/images/sensor.jpeg'
import Sensor1 from '../assets/images/ph.jpg'
import Sensor2 from '../assets/images/flujo.png'
import Sensor3 from '../assets/images/turbi.jpg'

import Iot from '../assets/images/Iot.jpg'

// Importar Componentes
import Header from '../components/header'
import Footer from '../components/footer'

function Prototipo() {
    return (
        <div>
            {/* Importar Header */}
            <Header></Header>

            {/* Imagen inicial del prototipo */}
            <img src={Iot} className="img-incio-proto" alt="No se encontró la imagen" />

            {/* Seccion para informacion del prototipo  */}
            <div className="bg-black dark-container">
                {/* Titulo de la seccion {*nombre del prototipo*} */}
                <h1 className='text-white text-4xl mb-1 font- font-bold'>PROTOTIPO</h1>
                {/* Texto de presentacion del prototipo */}
                <p className='italic'>Nuestra última creación es un purificador de agua inteligente diseñado para garantizar la calidad óptima del agua en todo momento. Este innovador dispositivo mide continuamente tres parámetros clave para garantizar la pureza del agua que consumes</p>

                {/* Seccion para colocar carrusel e informacion  sacados desde bootstrap*/}
                <div className='d-flex justify-content-center align-items-center'>
                <div className='m-4 w-50'> 
                    <div id="carouselExampleCaptions" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={Sensor1} className="d-block w-100 h-96 img-fluid" alt="..." /> 
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className='text-black'>Sensor de Ph</h5>
                                    <p className='text-black'>Modelo: PH-450-2C.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={Sensor2} className="d-block w-100 h-96 img-fluid" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className='text-black'>Sensor de flujo</h5>
                                    <p className='text-black'>Modelo: YF-S201.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={Sensor3} className="d-block w-100 h-96 img-fluid" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className='text-black'>Sensor de turbidez</h5>
                                    <p className='text-black'>Modelo: TS‑300B.</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev success" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next success" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div></div>





                <div className="card-container">
                    <div className="bg-slate-700 card">
                        <h1 className='text-white font-semibold text-lg mb-2'>Sensor del PH</h1>
                        <p className='text-white'>El nivel de pH del agua es fundamental para determinar su acidez o alcalinidad. Nuestro prototipo mide el pH en tiempo real para asegurarse de que el agua esté dentro de los niveles seguros para el consumo humano.</p>
                        <img src={Sensor1} alt="No se encontró la imagen" />
                    </div>
                    <div className="bg-slate-700 card">
                        <h1 className='text-white font-semibold text-lg mb-2'>Sensor del flujo del agua</h1>
                        <p className='text-white'>El flujo de agua es crucial para asegurar un suministro constante y eficiente. Nuestro prototipo monitorea el flujo para detectar cualquier irregularidad y asegurar un suministro estable en todo momento.</p>
                        <img src={Sensor2} alt="No se encontró la imagen" />
                    </div>
                    <div className="bg-slate-700 card">
                        <h1 className='text-white font-semibold text-lg mb-2'>Sensor de Turbidez</h1>
                        <p className='text-white'>La turbidez del agua se refiere a la claridad o transparencia del líquido. Nuestro dispositivo detecta cualquier partícula en suspensión que pueda afectar la calidad del agua, garantizando que sea cristalina y segura para beber.</p>
                        <img src={Sensor3} alt="No se encontró la imagen" />
                    </div>
                </div>
            </div>

            <h2 className='text-black font-semibold text-3xl ml-5 mt-5'>Componentes</h2>
            <div className="grid place-items-center grid-cols-2 mx-48">
                <div className="content-center">
                    <img src={Sensor1} alt="Image 1" className="h-auto max-w-80" />
                </div>
                <div className=''>
                    <h1 className='font-bold text-xl'>PH</h1>
                    <p>Este sensor tiene un rango de entre 1 a 14 niveles de Ph donde se distingue entre acidez y base en el agua, esta medición permite conocer el nivel de ph en el agua y cuando sobresalte de entre los niveles recomendados para la ingesta humana.</p>
                </div>
                <div className=''>
                    <h1 className='font-bold text-xl'>Flujo</h1>
                    <p>El flujo de agua es crucial para asegurar un suministro constante y eficiente. Nuestro prototipo monitorea el flujo para detectar cualquier irregularidad y asegurar un suministro estable en todo momento.</p>
                </div>
                <div className="content-center items-center">
                    <img src={Sensor2} alt="Image 2" className="h-auto max-w-80" />
                </div>
                <div className="justify-center">
                    <img src={Sensor3} alt="Image 3" className="h-auto max-w-80" />
                </div>
                <div className=''>
                    <h1 className='font-bold text-xl'>Turbidez</h1>
                    <p>La turbidez del agua se refiere a la claridad o transparencia del líquido. Nuestro dispositivo detecta cualquier partícula en suspensión que pueda afectar la calidad del agua, garantizando que sea cristalina y segura para beber.</p>
                </div>

            </div>
            {/* Parte de especificaciones*/}
            <div className='grid place-items-center grid-cols-2  bg-gray-500 h-auto'>

            </div>
            <Footer></Footer>
        </div>
    );
}


export default Prototipo;