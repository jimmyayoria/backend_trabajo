import logo from '../../assets/img/logo.jpeg';
import { useEffect, useState } from "react";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useParams } from 'react-router';
import axios from 'axios';

export const CitasPage=()=>{

    const { id_} = useParams();  

    const [especialidades, setEspecialidades] = useState([]);

    const [doctores, setDoctores] = useState([]);

    const [citas, setCitas] = useState([]);

    const [citaFormRegistro,setFormCitaRegistro] = useState({

        id: 0,
        id_usuario: id_,
        rango: '',
        fecha: '',
        id_medico: 0,
        id_especialidad: 0,
        estado: '1',
        monto: 50

    });

    const [detalleFormCita, setDetalleFormCita] = useState({
        nombreDoctor:'',
        nombreEspecialidad:'',
    });


    const {nombreDoctor,nombreEspecialidad}=detalleFormCita;


    const {id,id_usuario,fecha,id_medico,id_especialidad,rango,estado,monto}=citaFormRegistro;


        useEffect(()=>{

        axios.get(`http://localhost:5000/especialidad`)
        .then(res=>{
            setEspecialidades(res.data.content);
        });


      },[]);

      useEffect(()=>{

        axios.get(`http://localhost:5000/usuario/${id_}`)
            .then(res=>{
                const {nombres,
                    apellidos,
                    dni,
                    telefono,
                    edad,
                    contrasenia,
                    correoElectronico,
                    direccion,
                    departamento,
                    provincia,
                    distrito
                    } = res.data.content[0];
                    document.getElementById('txtNombreUsuario').value=nombres;
                    document.getElementById('txtApellidosUsuario').value=apellidos;
                    document.getElementById('txtEdad').value=edad;
                    document.getElementById('txtCorreoElectronico').value=correoElectronico;
                    document.getElementById('txtDireccion').value=direccion;
                    document.getElementById('txtDistrito').value=distrito;
                    document.getElementById('txtProvincia').value=provincia;
                    document.getElementById('txtDepartamento').value=departamento;
                    document.getElementById('txtTelefono').value=telefono;
            })


      },[]);

      const getDoctoresPorEspecialidad=(id_especialidad)=>{

        axios.get(`http://localhost:5000/doctor/ByEspecialidad/${id_especialidad}`)
        .then(res=>{
            setDoctores(res.data.content);
            console.log(res.data.content);
        });

      }
    
    const getCita= async (id)=>{ 
        
        let myModal = new bootstrap.Modal(document.getElementById('modalCita'), { keyboard: false});

        await axios.get(`http://localhost:5000/cita/${id}`)
        .then(res=>{

            const {rango,
                fecha,
                id_medico,
                id_especialidad,
                estado,
                monto,
                } = res.data.content[0];
                
                document.getElementById('itemEspecialidad').innerHTML=id_especialidad;
                document.getElementById('fechaCita').value=fecha;
                document.getElementById('fechaHora').value=rango;
                document.getElementById('itemDoctor').innerHTML=id_medico;
                
        })
    
        myModal.show();
    }


        const calendario=  async ()=>{

            const eventos=[];

            await axios.get(`http://localhost:5000/cita/listar/${id_}`)
            .then(res=>{


                setCitas(res.data.content);

                const citas_=res.data.content;

                console.log(citas_);

                citas_.forEach(cita => {

                    console.log(cita);
                    
                    const {
                        id,
                        rango,
                        fecha,
                        id_medico,
                        id_especialidad,
                        estado,
                        monto,
                        }=cita;

                        eventos.push({
                            "id":id,
                            "title":'prueba',
                            "start":fecha
                        });

                });
                    

            })
           

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
                    events: eventos,
                    
                    eventClick: function(info) {
                        
                        getCita(info.id);
                        
                    }
                });
            }
    

    const handleChange = (e) => {

        setFormCitaRegistro({
            ...citaFormRegistro,
            [e.target.name]: e.target.value
        });

        };


    useEffect(() => {
        calendario();
        }, []);
        

    const handleSubmit =(e)=>{

        e.preventDefault();
        if ([nombreDoctor.trim(), nombreEspecialidad.trim(), fecha.trim(), rango.trim()].includes('')) {

          Swal.fire({
            title: 'Error',
            text: 'Debes completar el formulario para continuar',
            icon: 'error'
             });

        } else {

            axios.post('http://localhost:5000/cita/crear', citaFormRegistro, {
                
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    }
                })
                .then((response) => {
                  
                    Swal.fire({
                        title: 'Creado correctamente',
                        text: 'Usuario creado',
                        icon: 'success'
                    }).then((result) => {
                        
                        window.location.reload();
                    });

                })
                .catch((error) => {
                  console.log(error);
                })
        }

    }


    return (
       
        <div className="container">

               

            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <div className="container">
            
                    <a className="navbar-brand me-2" href="/">
                        <img src={logo} height="40" alt="MDB Logo" loading="lazy" />
                    </a>

                
                    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarButtonsExample" aria-controls="navbarButtonsExample" 
                        aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>

            
                    <div className="collapse navbar-collapse" id="navbarButtonsExample">
                
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                    

                        <div className="d-flex align-items-center">
                            Bienvenido: &nbsp; <span className="me-4" id="navNombreUsuario"> MIGUEL ANGEL GUEVARA ALEJANDRO</span>
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
                        aria-controls="ex3-tabs-3" aria-selected="false">FICHA PACIENTE</a>
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

                    <div className="row ">
                    
                        <form className="row g-3 needs-validation" id="frmRegistroCita" onSubmit={handleSubmit}>

                            <div className="col-4 ">
                                <div className="list-group list-group-light" id="list-tab" role="tablist">
                                <a className="list-group-item list-group-item-action active px-3 border-0" id="list-home-list"
                                    data-mdb-toggle="list" href="#list-home" role="tab" aria-controls="list-home" >Especialidad</a>
                                <a className="list-group-item list-group-item-action px-3 border-0" id="list-profile-list"
                                    data-mdb-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile" >Fecha y Hora</a>
                                <a className="list-group-item list-group-item-action px-3 border-0" id="list-messages-list"
                                    data-mdb-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages" >Doctor</a>
                                <a className="list-group-item list-group-item-action px-3 border-0" id="list-settings-list"
                                    data-mdb-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings" >Pagar Cita</a>
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="list-home" role="tabpanel"
                                    aria-labelledby="list-home-list">

                                        <div className="col-md-4">

                                            <div className="form-group">
                                                <label htmlFor="cmbEspecialidadRegistro">Especialidad</label>
                                                <select className="form-control" name="especialidad_" id="cmbEspecialidadRegistro" onChange={(e)=>{
                                                
                                                    getDoctoresPorEspecialidad(e.target.value);
                                                    setFormCitaRegistro({
                                                        ...citaFormRegistro,
                                                        id_especialidad:e.target.value
                                                    });
                                                }}>
                                                
                                                <option value=""></option>
                                                {
                                                
                                                    especialidades.map((especialidad)=>{
                                                        return (

                                                            <option value={especialidad.id}>{especialidad.nombre}</option>
                                                        )})

                                                }
                                            
                                                    

                                                </select>
                                                <div className="invalid-feedback">Selecciona una especialidad.</div>
                                            </div>

                                        </div>

                                        <hr />


                                </div>
                                <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">

                                    <div className="row">

                                        <label htmlFor="cmbDoctorRegistro">Seleccione una fecha y hora</label>

                                        <div className="col-md-4">
                                            <div className="input-group">
                                                <input type="date" className="form-control" name="fecha" onChange={handleChange} id="validationCustomUsername" aria-describedby="inputGroupPrepend"  />
                                            </div>
                                        </div>

                                        <div className="col-md-2">
                                            <div className="form-outline">
                                                <input type="time" className="form-control" name="rango" onChange={handleChange} id="validationCustom03"  />
                                            </div>
                                        </div>

                                    </div>

                                    <hr />



                                </div>

                                <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">

                                <table className="table align-middle mb-0 bg-white">
                                    <thead className="bg-light">
                                        <tr>
                                        <th>Nombre</th>
                                        <th>Especialidad</th>
                                        <th>Estado</th>
                                        <th>Accion</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        

                                            {
                                            
                                                doctores.map((doctor)=>{

                                                    const { 
                                                            id,
                                                            apellido,
                                                            nombre,
                                                            dni,
                                                            imagen,
                                                            nombreEspecialidad,
                                                            sede
                                                        }=doctor;

                                                    return (

                                                        <tr >                                                 
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                <img
                                                                    src={imagen}
                                                                    style={ {width: '45px', height: '45px'}}
                                                                    className="rounded-circle"
                                                                    />
                                                                <div className="ms-3">
                                                                    <p className="fw-bold mb-1" id={'nombreDoctor_'+id}>{nombre} {apellido}</p>
                                                                    <p className="text-muted mb-0">{dni}</p>
                                                                </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <p className="fw-normal mb-1" id={'nombreEspecialidad_'+id}>{nombreEspecialidad}</p>
                                                                <p className="text-muted mb-0">{sede}</p>
                                                            </td>
                                                            <td>
                                                                <span className="badge badge-success rounded-pill d-inline">Disponible</span>
                                                            </td>
                                                            <td>
                                                                <button type="button" className="btn btn-link btn-sm btn-rounded" id={id} onClick={(e)=>{ 
                                                                   
                                                                        setFormCitaRegistro({
                                                                            ...citaFormRegistro,
                                                                            id_medico:e.target.id
                                                                        });
                                                                        

                                                                        setDetalleFormCita({
                                                                            ...detalleFormCita,
                                                                            nombreDoctor: document.querySelector(`#nombreDoctor_${e.target.id}`).innerHTML,
                                                                            nombreEspecialidad:document.querySelector(`#nombreEspecialidad_${e.target.id}`).innerHTML,
                                                                        });

                                                                        console.log(detalleFormCita);
                                                                    }
                                                                    
                                                                    }>
                                                                    Seleccionar
                                                                </button>
                                                            </td>
                                                        </tr>

                                                    )

                                                })
                                                
                                            }

                                       
                                        

                                    
                                    </tbody>
                                    </table>
                                
                                </div>


                                <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
                                    <div className="tab-content" id="nav-tabContent">
                                        <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">

                                                <div className="row">

                                                    <div className="form-group col-3">
                                                        <label> Especialidad</label>
                                                        <input className='form-control' type="text" value={nombreEspecialidad} readOnly/>
                                                    </div>

                                                    <div className="form-group col-5">
                                                        <label> Doctor</label>
                                                        <input className='form-control' type="text" value={nombreDoctor} readOnly/>
                                                    </div>

                                                    <div className="form-group col-3">
                                                        <label> Fecha</label>
                                                        <input className='form-control' type="date" value={fecha} readOnly/>
                                                    </div>

                                                    <div className="form-group col-2 mt-2">
                                                        <label> Hora</label>
                                                        <input className='form-control' type="time" value={rango} readOnly/>
                                                    </div>


                                                    <div className="form-group col-1 mt-2">
                                                            <label> Sala</label>
                                                            <input className='form-control' type="text" value="5" readOnly/>
                                                    </div>


                                                </div>


                                                <hr/>

                                                <div className="form-group col-3">
                                                    <label> Monto a cancelar</label>
                                                    <input className='form-control' type="text" value="50.00" readOnly/>
                                                </div>

                                                <div className="col-12 mt-3">
                                                    <button className='btn btn-primary' type='submit' >CANCELAR MONTO</button>
                                                </div>

                                        </div>
                                    </div>
                                </div>

                                </div>
                            </div>

                        </form>
                        
                    </div>

                </div>

                <div className="tab-pane fade" id="ex3-tabs-3" role="tabpanel" aria-labelledby="ex3-tab-3">
                    <form className="row g-3 needs-validation " >

                        <div className="col-md-8">

                            <div className="row">

                                <input type="text" className="form-control" id="txtIdUsuario"  hidden />

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="txtNombreUsuario" className="form-label">Nombres</label>
                                        <input type="text" className="form-control" id="txtNombreUsuario" readOnly />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="txtApellidosUsuario" className="form-label">Apellidos</label>
                                        <input type="text" className="form-control" id="txtApellidosUsuario"  readOnly />
                                    </div>
                                </div>

                            </div>

                            <div className="row">

                                <div className="col-2 mt-3">
                                    <div className="form-group">
                                        <label htmlFor="txtEdad" className="form-label">Edad</label>
                                        <input type="number" className="form-control" id="txtEdad" readOnly />
                                    </div>
                                </div>

                                <div className="col-md-4 mt-3">
                                    <div className="form-group">
                                        <label htmlFor="txtCorreoElectronico" className="form-label">Correo Electronico</label> 
                                        <div className="input-group">
                                            <span className="input-group-text" id="inputGroupPrepend">@</span>
                                            <input type="text" className="form-control" id="txtCorreoElectronico" aria-describedby="inputGroupPrepend"  readOnly/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mt-3">
                                    <div className="form-group">
                                        <label htmlFor="txtCorreoElectronico" className="form-label">Direccion</label> 
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="txtDireccion" aria-describedby="inputGroupPrepend"  readOnly/>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="row">

                                <div className="col-md-3 mt-3">
                                    <div className="form-group">
                                        <label htmlFor="txtDistrito" className="form-label">Distrito</label> 
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="txtDistrito" aria-describedby="inputGroupPrepend"  readOnly/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3 mt-3">
                                    <div className="form-group">
                                        <label htmlFor="txtDistrito" className="form-label">Provincia</label> 
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="txtProvincia" aria-describedby="inputGroupPrepend"  readOnly/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3 mt-3">
                                    <div className="form-group">
                                        <label htmlFor="txtDistrito" className="form-label">Departamento</label> 
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="txtDepartamento" aria-describedby="inputGroupPrepend"  readOnly/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3 mt-3">
                                    <div className="form-group">
                                        <label htmlFor="txtDistrito" className="form-label">Telefono</label> 
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="txtTelefono" aria-describedby="inputGroupPrepend"  readOnly/>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="col-md-4">
                            <div className="card ">
                                <img src="https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png"
                                    className="card-img-top" alt="Sunset Over the Sea"  style={{borderRadius:'50rem'}}/>
                            </div>
                        </div>
                        
                    </form>

                </div>
            </div>




            <div className="modal fade" id="modalCita" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Cita</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form id="formCita">

                                <input type="text" className="form-control" name="id" hidden/>

                                <div className="mb-3">
                                    <label className="form-label">Doctor</label>
                                        <select name="doctor" className="form-control" id="cmbDoctor">
                                        <option id="itemDoctor"></option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <div className="form-group">
                                        <label className="form-label">Especialidad</label>
                                        <select name="especialidad" className="form-control" id="cmbEspecialidad">
                                            <option id="itemEspecialidad"></option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-6">
                                        <div className="mb-3">
                                            <div className="form-group">
                                                <label className="form-label">Fecha</label>
                                                <input type="date" id='fechaCita' className="form-control" name="fecha"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="mb-3">
                                            <div className="form-group">
                                                <label className="form-label">Hora</label>
                                                <input type="time" id='fechaHora' className="form-control" name="hora"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>




                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-primary" id="btnModificar">Modificar</button>
                            <button type="button" className="btn btn-danger" id="btnEliminar">Eliminar</button>

                        </div>
                    </div>
                </div>
            </div>



        </div>


    )
}