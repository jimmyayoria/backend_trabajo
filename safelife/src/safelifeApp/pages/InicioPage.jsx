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
                            <p class="about__description-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
                                temporibus earum qui provident, nostrum repudiandae facilis dolore asperiores? At repudiandae
                                dolorum unde laboriosam cumque quisquam reiciendis laudantium, quod beatae accusantium earum
                                minima similique? Repellat quod, accusantium ratione, quia ut similique excepturi atque
                                voluptate adipisci, iste accusamus nihil alias fugit eum velit officiis eos voluptas odio.
                                Facilis eos officia, inventore autem, quis neque quae similique consectetur at blanditiis
                                eligendi iste quia eius deleniti delectus distinctio dolor cupiditate aliquid ad? Ullam, iusto
                                error. Rem suscipit sapiente similique tenetur cumque quis corrupti nobis, vero odio
                                reprehenderit a minima ipsam nam facilis praesentium eveniet.</p>

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
                                            <a href="#" class="specialties__item-button">👨‍⚕️Staff</a>
                                            <a href="./Login.html" class="specialties__item-button">📄Citas</a>
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
                                            <a href="#" class="specialties__item-button">👨‍⚕️Staff</a>
                                            <a href="./Login.html" class="specialties__item-button">📄Citas</a>
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
                                            <a href="#" class="specialties__item-button">👨‍⚕️Staff</a>
                                            <a href="./Login.html" class="specialties__item-button">📄Citas</a>
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
                                            <a href="#" class="specialties__item-button">👨‍⚕️Staff</a>
                                            <a href="./Login.html" class="specialties__item-button">📄Citas</a>
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
                                            <a href="#" class="specialties__item-button">👨‍⚕️Staff</a>
                                            <a href="./Login.html" class="specialties__item-button">📄Citas</a>
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
                                            <a href="#" class="specialties__item-button">👨‍⚕️Staff</a>
                                            <a href="./Login.html" class="specialties__item-button">📄Citas</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


        </SafelifeLayout>
      
    
    )

}