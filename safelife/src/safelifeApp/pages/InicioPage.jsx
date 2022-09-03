import { SafelifeLayout } from "../layout/safelifeLayout"
import esp1 from '../../assets/img/esp1.jpg';
import esp2 from '../../assets/img/esp2.png';
import esp3 from '../../assets/img/esp3.jpg';
import clinica from '../../assets/img/clinica-nosotros.jpg';

export const InicioPage = () => {

    return(

        <SafelifeLayout>

                <section className="container pt-4" >


                    <div className="carousel-container">
                        <div id="carouselExampleCaptions" className="carousel slide pt-5" data-bs-ride="carousel">
                            <div className="carousel-indicators mb-0">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                                    aria-current="true" aria-label="Slide 1">
                                </button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                    aria-label="Slide 2">
                                </button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                    aria-label="Slide 3">
                                </button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={esp1} className="d-block w-100" alt="..."/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className="link-info">Especialidad de Dermatología</h5>
                                        <a href="#" className="btn btn-primary">Mas Información</a>

                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={esp2} className="d-block w-100" alt="..."/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className="link-info">Especialidad de Fisioterapia</h5>
                                        <a href="#" className="btn btn-primary">Mas Información</a>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={esp3} className="d-block w-100" alt="..."/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className="link-info">Especialidad de Cardiología</h5>
                                        <a href="#" className="btn btn-primary">Mas Información</a>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                </section>


                <section class="about" id="about">
                    <div class="about-container">
                        <h2 class="about__title">👨‍⚕️ Nosotros 👩‍⚕️</h2>
                        <div class="about__description-container">
                            <p class="about__description-p">Somos una red de Clínica y Centros médicos en la capital, con la tecnología más moderna y el Staff médico más comprometido con la salud de nuestros pacientes y la de su familia. Disponemos de una gran cantidad de especialidades para prevenir, tratar, recuperar y rehabilitar a nuestros pacientes adultos y niños.
                                Nos cuidamos para cuidar. El bienestar comienza con nosotros.
                                »Promovemos activamente nuestro bienestar.
                                »Tratamos a todos con cariño y respeto. <br/>
                                »Vivimos en un clima de confianza y apoyo mutuo.
                                Conectados por un Propósito.<br/>
                                »Comunicamos asertiva y oportunamente.<br/>
                                »Brindamos la mejor experiencia a los pacientes y cuidadores.<br/>
                                »Formamos equipos multidisciplinarios para crear mejores resultados.</p>

                            <img class="about__description-img" src={clinica} alt="Foto Clínica"/>
                        </div>
                        <div class="about-accordeon">
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                            Misión
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <p class="accordeon-body__parrafo">Hacer sentir a nuestros pacientes que su salud
                                                está en las mejores manos. Elevando permanentemente la calidad y eficiencia de
                                                nuestro servicio. Combinando nuestra calidez en la atención, nuestra pasión por
                                                la medicina y la innovación en los procedimientos médicos.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Visión
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <p class="accordeon-body__parrafo">Ser una institución líder en el sistema privado
                                                de salud, mediante un modelo de administración y atención al paciente, con
                                                cultura de servicio, seguridad, innovación, excelencia asistencial, tecnología
                                                de avanzada, alto nivelprofesional y eficiencia, todo ello orientado a lograr un
                                                máximo nivel de satisfacción.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Valores
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <ul class="accordeon-body__values">
                                                <li class="accordeon-body__values-item"><strong>Justicia:</strong> Seguimos los
                                                    imperativos del bien común, de la equidad y del orden social. Asumimos la
                                                    justicia como un valor superior y transversal al resto de valores.</li>
                                                <li class="accordeon-body__values-item"><strong>Solidaridad:</strong> Nos
                                                    adherimos incondicionalmente y con amor a la causa de nuestros beneficiarios
                                                    y sus familias, participando de sus intereses, necesidades y
                                                    responsabilidades.</li>
                                                <li class="accordeon-body__values-item"><strong>Responsabilidad:</strong>
                                                    Cumplimos con lo que nos hemos comprometido; cumplimos con un deber personal
                                                    y social. Asumimos también las consecuencias de nuestras acciones y
                                                    decisiones.</li>
                                                <li class="accordeon-body__values-item"><strong>Profesionalismo:</strong>
                                                    Buscamos la excelencia en todas nuestras actividades y nos esforzamos
                                                    incansablemente por ser mejores, realizando un trabajo innovador y en
                                                    equipo, en un clima de armonía y confianza.</li>
                                                <li class="accordeon-body__values-item"><strong>Honestidad:</strong> Actuamos en
                                                    base a la verdad, la autenticidad y la transparencia.</li>
                                                <li class="accordeon-body__values-item"><strong>Respeto:</strong> Reconocemos y
                                                    apreciamos la dignidad de las personas, su libertad, sus derechos, sus
                                                    cualidades y la diversidad de las mismas.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section class="specialties" id="specialties">
                    <div class="specialties-container">
                        <h2 class="specialties__title">🩺 Especialidades 🩺</h2>
                        <div class="speacialties__specialties-list">
                            <div class="specialties__specialties-item">
                                <div class="face face1">
                                    <div class="content">
                                        <div class="specialties__item-image-container">
                                            <img src="https://dermavanz.com/wp-content/uploads/2017/07/Dermatolog%C3%ADaEst%C3%A9tica-1170x658.jpg" class="specialties__item-image" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div class="face face2">
                                    <div class="content">
                                        <h3 class="specialties__item-data-title">
                                            Dermatología
                                        </h3>
                                        <p class="specialties__item-data-about">Nos encargamos del Estudio, tratamiento de la piel y de la prevención de las posibles enfermedades en la piel de nuestros pacientes.</p>
                                        <div class="specialties__item-button-container">
                                            <a href="./staff" class="specialties__item-button">👨‍⚕️Staff</a>
                                            <a href="./Login" class="specialties__item-button">📄Citas</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="specialties__specialties-item">
                                <div class="face face1">
                                    <div class="content">
                                        <div class="specialties__item-image-container">
                                            <img src="https://th.bing.com/th/id/OIP.1j-omxJroVPUWALPaFn_NgHaEC?pid=ImgDet&rs=1" class="specialties__item-image" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div class="face face2">
                                    <div class="content">
                                        <h3 class="specialties__item-data-title">
                                            Fisioterapia
                                        </h3>
                                        <p class="specialties__item-data-about">Brindamos tratamientos fisioterapéuticos con enfoque de tratamiento en neurodesarrollo, psicomotricidad terapéutica e hidroterapia.</p>
                                        <div class="specialties__item-button-container">
                                            <a href="./staff" class="specialties__item-button">👨‍⚕️Staff</a>
                                            <a href="./Login" class="specialties__item-button">📄Citas</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="specialties__specialties-item">
                                <div class="face face1">
                                    <div class="content">
                                        <div class="specialties__item-image-container">
                                            <img src="https://th.bing.com/th/id/OIP.c2_C4_Bqo8TEW7ZWqvP6tQHaEK?pid=ImgDet&rs=1" class="specialties__item-image" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div class="face face2">
                                    <div class="content">
                                        <h3 class="specialties__item-data-title">
                                            Cardiología
                                        </h3>
                                        <p class="specialties__item-data-about">Nos centramos en el diagnóstico, tratamiento y prevención de problemas de salud relacionados con el corazón, arterias y venas dentro del sistema.</p>
                                        <div class="specialties__item-button-container">
                                            <a href="./staff" class="specialties__item-button">👨‍⚕️Staff</a>
                                            <a href="./Login" class="specialties__item-button">📄Citas</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="specialties__specialties-item">
                                <div class="face face1">
                                    <div class="content">
                                        <div class="specialties__item-image-container">
                                            <img src="https://th.bing.com/th/id/R.8542a9043318e27ac923f18edb5ab646?rik=7jCvkbhV%2fV%2fnyQ&pid=ImgRaw&r=0" class="specialties__item-image" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div class="face face2">
                                    <div class="content">
                                        <h3 class="specialties__item-data-title">
                                            Gastroenterología
                                        </h3>
                                        <p class="specialties__item-data-about">Ofrecemos servicio completo y avanzado en diagnóstico, tratamiento y prevención de enfermedades del estómago y el aparato digestivo.</p>
                                        <div class="specialties__item-button-container">
                                            <a href="./staff" class="specialties__item-button">👨‍⚕️Staff</a>
                                            <a href="./Login" class="specialties__item-button">📄Citas</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="specialties__specialties-item">
                                <div class="face face1">
                                    <div class="content">
                                        <div class="specialties__item-image-container">
                                            <img src="https://th.bing.com/th/id/OIP.vFBJ1wLPYm2LwsW4PWQtcgHaEK?pid=ImgDet&rs=1" class="specialties__item-image" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div class="face face2">
                                    <div class="content">
                                        <h3 class="specialties__item-data-title">
                                            Pediatría
                                        </h3>
                                        <p class="specialties__item-data-about">Nuestro staff médico es responsable del cuidado integral de la salud de tus hijos, desde antes de su llegada hasta su adolescencia.</p>
                                        <div class="specialties__item-button-container">
                                            <a href="./staff" class="specialties__item-button">👨‍⚕️Staff</a>
                                            <a href="./Login" class="specialties__item-button">📄Citas</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="specialties__specialties-item">
                                <div class="face face1">
                                    <div class="content">
                                        <div class="specialties__item-image-container">
                                            <img src="https://th.bing.com/th/id/OIP.imXeqhepcjiy91zJlIUgDAHaD5?pid=ImgDet&rs=1" class="specialties__item-image" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div class="face face2">
                                    <div class="content">
                                        <h3 class="specialties__item-data-title">
                                            Cirugía
                                        </h3>
                                        <p class="specialties__item-data-about">Nos especializamos en Cirugía general, abarcando operaciones del aparato digestivo, sistema hepatobilio-pancreático y sistema endocrino.</p>
                                        <div class="specialties__item-button-container">
                                            <a href="./staff" class="specialties__item-button">👨‍⚕️Staff</a>
                                            <a href="./Login" class="specialties__item-button">📄Citas</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="offices" id="offices">
                    <div class="offices-container">
                        <h2 class="offices__title">🏥 Sedes 🏥</h2>
                        <div class="offices__offices-container">
                            <ul class="offices__offices-list">
                                <li class="offices__offices-item">SEDE 1: Callao</li>
                                <li class="offices__offices-item">SEDE 2: Cercado de Lima</li>
                                <li class="offices__offices-item">SEDE 3: Jesus María</li>
                                <li class="offices__offices-item">SEDE 4: San Borja</li>
                                <li class="offices__offices-item">SEDE 5: Santa Anita</li>
                            </ul>
                            <div class="offices__offices-map-container">
                                <iframe src="https://www.google.com/maps/d/embed?mid=1SHFYiZI4txabTxm05ErfNca12IWrarc&ehbc=2E312F" class="offices__offices-map"></iframe>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="contact" id="contact">
                    <div class="contact-container">
                        <h2 class="contact__title">📱 Contactos 📱</h2>
                        <div class="contact__contact-container">
                            <div class="contact__contact-form-container">
                                <form action="" class="contact__form">
                                    <h3 class="contact__subtitle">Más Información</h3>
                                    <input type="text" placeholder="Nombre y Apellido" class="contact__form-input" required />
                                    <input type="number" placeholder="DNI" class="contact__form-input" required />
                                    <input type="number" placeholder="Teléfono" class="contact__form-input" required />
                                    <input type="email" placeholder="Correo electrónico" class="contact__form-input" required />
                                    <h3 class="contact__subtitle">Consulta 🖊</h3>
                                    <textarea class="contact__form-input" cols="30" rows="5" required></textarea>
                                    
                                    <button class="contact__form-button">
                                        <span class="text">✅ Enviar</span>
                                        <i class=" icon"></i>
                                    </button>
                                </form>
                            </div>
                            <div class="container_contact-phones-container">
                                <h3 class="contact__subtitle">Teléfonos: </h3>
                                <ul class="contact__phones-list">
                                    <li class="contact__phones-list-item">
                                        <a class="contact__phones-list-link" href="tel:+51987587145">📞 +51 987587145</a>
                                    </li>
                                    <li class="contact__phones-list-item">
                                        <a class="contact__phones-list-link" href="tel:+51987587145">📞 +51 987587145</a>
                                    </li>
                                    <li class="contact__phones-list-item">
                                        <a class="contact__phones-list-link" href="tel:+51987587145">📞 +51 987587145</a>
                                    </li>
                                </ul>
                                <h3 class="contact__subtitle">Redes Sociales</h3>
                                <div class="contact__social-container">
                                    <a class="contact__social-link" href="#">
                                        <img src="https://i.postimg.cc/7YHyZXZX/facebook.png" width="50rem" alt="imagen facebook"/>
                                    </a>
                                    <a class="contact__social-link" href="#">
                                        <img src="https://i.postimg.cc/sfJtqS4W/instagram.png" alt="imagen instagram" width="50rem" />
                                    </a>
                                    <a class="contact__social-link" href="#">
                                        <img src="https://i.postimg.cc/dtPYcvbM/youtube.png" alt="imagen youtube" width="50rem"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </section>


        </SafelifeLayout>
      
    
    )

}