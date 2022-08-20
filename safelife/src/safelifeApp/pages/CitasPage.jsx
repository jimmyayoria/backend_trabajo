import logo from '../../assets/img/logo.jpeg';
import { useEffect } from "react";
import { Calendar } from 'react-big-calendar';
import { dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import esES from 'date-fns/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {useState} from 'react';

export const CitasPage=()=>{

    /*const getCita= async (id)=>{

        /*const documentFormCita = document.forms['formCita'];
    
        const res= await fetch(`${URL_BASE}cita/buscar/${id}`).then();
        const data= await res.json();
    
        const {doctor,especialidad,fechacita,hora}=data;
    
        documentFormCita['id'].value=id;
        documentFormCita['doctor'].value=doctor.id;
        documentFormCita['especialidad'].value=especialidad.id;
        documentFormCita['fecha'].value=fechacita;
        documentFormCita['hora'].value=hora;
    
        myModal.show();
    }*/

    const [date, setDate] = useState(new Date())

    const locales = {
        'es': esES,
      }
      
      const localizer = dateFnsLocalizer({
          format,
          parse,
          startOfWeek,
          getDay,
          locales,
        });

        const getMessagesES = () => {
            return {
                allDay: 'Todo el día',
                previous: '<',
                next: '>',
                today: 'Hoy',
                month: 'Mes',
                week: 'Semana',
                day: 'Día',
                agenda: 'Agenda',
                date: 'Fecha',
                time: 'Hora',
                event: 'Evento',
                noEventsInRange: 'No hay eventos en este rango',
                showMore: total => `+ Ver más (${total})`
            };
        }

     const CalendarEvent = ({ event }) => {

            const { title, user } = event;
        
            return (
                <>
                    <strong>{ title }</strong>
                    <span> - { user.name }</span>
                </>
            )
        }

        const handleChange=(value)=>{

            console.log(value);
        }


    const onSelect = ( event ) => {
         console.log({ click: event });
        //setActiveEvent( event );
        }

    const onDoubleClick = ( event ) => {
        console.log("prueba");
        // console.log({ doubleClick: event });
        //openDateModal();
        }

        const calendario=(eventos)=>{

            const eventos2=[];
            eventos2.push({
                "id":2,
                "title":'prueba',
                "start":'2022-08-20'
            });

            $('#calendar').fullCalendar('destroy');
            $('#calendar').fullCalendar({
                    header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,basicWeek,basicDay'
                    },
                    locale: 'es',
                    defaultDate: new Date(),//'2022-06-05',
                    navLinks: true, // can click day/week names to navigate views
                    editable: true,
                    eventLimit: true, // allow "more" link when too many events
                    events: eventos2,
                    
                    eventClick: function(info) {
                        
                        console.log(info);
                        //console.log(idCita);
                        //idCita=info.id;
                         // console.log(idCita);
                        //getCita(info.id);
                        
            
                    }
                });
            }

useEffect(() => {
    calendario();
    }, []);

    return (
       
        <div className="container">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <div className="container">
            
                    <a className="navbar-brand me-2" href="#">
                        <img src={logo} height="40" alt="MDB Logo" loading="lazy" />
                    </a>

                
                    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#navbarButtonsExample" aria-controls="navbarButtonsExample" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>

            
                    <div className="collapse navbar-collapse" id="navbarButtonsExample">
                
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                    

                        <div className="d-flex align-items-center">
                            Bienvenido: &nbsp; <span className="me-4" id="navNombreUsuario"> MIGUEL ANGEL GUEVARA
                                ALEJANDRO</span>
                            <button type="button" className="btn btn-primary me-3" id="btnCerrarSesion">
                                Cerrar Sesion
                            </button>
                        </div>
                    </div>
                
                </div>
                
            </nav>
        
            <ul className="nav nav-tabs nav-justified mb-3" id="ex1" role="tablist">

                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="ex3-tab-1" data-mdb-toggle="tab" href="#ex3-tabs-1" role="tab"
                        aria-controls="ex3-tabs-1" aria-selected="true">CALENDARIO DE CITAS</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="ex3-tab-2" data-mdb-toggle="tab" href="#ex3-tabs-2" role="tab"
                        aria-controls="ex3-tabs-2" aria-selected="false">NUEVA CITA</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="ex3-tab-3" data-mdb-toggle="tab" href="#ex3-tabs-3" role="tab"
                        aria-controls="ex3-tabs-3" aria-selected="false">MI INFORMACION</a>
                </li>
            </ul>

            <div className="tab-content" id="ex2-content">

                <div className="tab-pane fade show active" id="ex3-tabs-1" role="tabpanel" aria-labelledby="ex3-tab-1">

                <br />
                    <div className="ui container">
                        <div className="ui grid">
                            <div className="ui sixteen column">

                             <div id="calendar"></div> 

                            </div>
                        </div>
                    </div>

                </div>

                <div className="tab-pane fade" id="ex3-tabs-2" role="tabpanel" aria-labelledby="ex3-tab-2">

                    <form className="row g-3 needs-validation" id="frmRegistroCita" novalidate>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="">Doctor</label>
                                <select className="form-control" name="doctor_" id="cmbDoctorRegistro" required>
                                    <option value=""></option>
                                </select>
                                <div className="invalid-feedback">Selecciona un doctor.</div>
                            </div>
                        </div>


                        <div className="col-md-4">

                            <div className="form-group">
                                <label for="">Especialidad</label>
                                <select className="form-control" name="especialidad_" id="cmbEspecialidadRegistro" required>
                                    <option value=""></option>
                                </select>
                                <div className="invalid-feedback">Selecciona una especialidad.</div>
                            </div>

                        </div>

                        <hr />

                        <div className="col-md-4">
                            <div className="input-group form-outline">
                                <input type="date" className="form-control" name="fecha_" id="validationCustomUsername"
                                    aria-describedby="inputGroupPrepend" required />
                                <label for="validationCustomUsername" className="form-label">Fecha</label>
                                <div className="invalid-feedback">Seleccione una fecha</div>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="form-outline">
                                <input type="time" className="form-control" name="hora_" id="validationCustom03" required />
                                <div className="invalid-feedback">Selecciona una hora</div>
                            </div>
                        </div>

                        <hr />

                        <div className="col-12">
                            <button className="btn btn-primary" id="btnCrearCita" type="button"><i className="bi bi-save-fill"></i>
                                &nbsp; GUARDAR</button>
                        </div>

                    </form>


                </div>

                <div className="tab-pane fade" id="ex3-tabs-3" role="tabpanel" aria-labelledby="ex3-tab-3">
                    <form className="row g-3 needs-validation " novalidate>

                        <div className="col-md-8">

                            <div className="row">

                                <input type="text" className="form-control" id="txtIdUsuario" value="Mark" hidden />

                                <div className="col-md-6">
                                    <div className="form-outline">
                                        <input type="text" className="form-control" id="txtNombreUsuario" value="Mark"
                                            readonly />
                                        <label for="txtNombreUsuario" className="form-label">Nombres</label>
                                        <div className="valid-feedback">Looks good!</div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-outline">
                                        <input type="text" className="form-control" id="txtApellidosUsuario" value="Otto"
                                            readonly />
                                        <label for="txtApellidosUsuario" className="form-label">Apellidos</label>
                                        <div className="valid-feedback">Looks good!</div>
                                    </div>
                                </div>

                            </div>

                            <div className="row">

                                <div className="col-2 mt-3">
                                    <div className="form-outline">
                                        <input type="number" className="form-control" id="txtEdad"  />
                                        <label for="txtEdad" className="form-label">Edad</label>
                                        <div className="invalid-feedback">Please provide a valid city.</div>
                                    </div>
                                </div>

                                <div className="col-md-10 mt-3">
                                    <div className="input-group form-outline">
                                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                                        <input type="text" className="form-control" id="txtCorreoElectronico"
                                            aria-describedby="inputGroupPrepend"  />
                                        <label for="txtCorreoElectronico" className="form-label">Correo Electronico</label>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="col-md-4">
                            <div className="card ">
                                <img src="https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png"
                                    className="card-img-top" alt="Sunset Over the Sea" />
                            </div>
                        </div>
                        
                    </form>

                </div>
            </div>

        </div>

    )
}