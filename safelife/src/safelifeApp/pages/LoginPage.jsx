import logo from '../../assets/img/logo.jpeg';
import '../../assets/css/login.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

export const LoginPage=()=>{

    const navigate = useNavigate();

    const [formRegistro, setFormRegistro] = useState({
        dni: '',
        nombres: '',
        apellidos: '',
        telefono: '',
        edad: '',
        email: '',
        password:'',
        direccion:'',
        distrito:'',
        provincia:'',
        departamento:''
      });

      const [formLogin, setFormLogin] = useState({
        emailLogin: '',
        passwordLogin: ''
      });


      const { dni, nombres, apellidos, telefono, edad, email,password,direccion,distrito,provincia,departamento } = formRegistro;

      const { emailLogin, passwordLogin } = formLogin;

      const handleChange = (e) => {
        setFormLogin({
          ...formLogin,
          [e.target.name]: e.target.value
        });
      };



      const handleChangeRegistro = (e) => {
        setFormRegistro({
          ...formRegistro,
          [e.target.name]: e.target.value
        });
      };

      const handleSubmitRegister = async (e) => {
        e.preventDefault();
        if ([dni.trim(), 
            nombres.trim(),
            apellidos.trim(),
            email.trim(),
            password.trim(),
            direccion.trim(),
            distrito.trim(),
            provincia.trim(),
            departamento.trim()].includes('')) {
            console.log('error');
        } else {

              //let myModal = new bootstrap.Modal(document.getElementById('modalRegistroLogin'));

              axios.post('http://localhost:5000/usuario/crear', formRegistro, {
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
                    })
                })
                .catch((error) => {
                  console.log(error);
                })
              

            //console.log(data);
          //submitAppointmentsForm(formAppointment);

          document.getElementById('email_').value='';
          document.getElementById('password_').value='';
          document.getElementById('dni_').value='';
          document.getElementById('nombre_').value='';
          document.getElementById('apellido_').value='';
          document.getElementById('direccion_').value='';
          document.getElementById('edad_').value='';
          document.getElementById('telefono_').value='';
          document.getElementById('distrito_').value='';
          document.getElementById('provincia_').value='';
          document.getElementById('departamento_').value='';

          setFormRegistro({
            dni: '',
            nombres: '',
            apellidos: '',
            telefono: 0,
            edad: 0,
            email: '',
            password:'',
            direccion:'',
            distrito:'',
            provincia:'',
            departamento:''
          });
          //setAlert(false);
        }

      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if ([emailLogin.trim(), passwordLogin.trim()].includes('')) {
          console.log('error');
        } else {

            navigate('/citas/1');
            console.log('logeado');
          //submitAppointmentsForm(formAppointment);
          setFormLogin({
            emailLogin: '',
            passwordLogin: ''
          });
          //setAlert(false);
        }
      };

    return (

        <div className="body-login">

            <div className="wrapper fadeInDown">

            <div id="formContent">

                <div className="form__logo my-3 mx-0">
                    <a href="/"><img src={logo} alt="logo" className="form__logo-image"/></a>
                </div>

                <form id="frmLogin" onSubmit={handleSubmit}>
                    <input type="email" id="email" onChange={handleChange} className="form-control w-75 m-auto" name="emailLogin" placeholder="Correo electrónico"/>
                    <input type="password" id="password" onChange={handleChange} className="form-control w-75 m-auto my-3" name="passwordLogin" placeholder="Contraseña"/>
                    <div className="login__container">
                        <input type="submit" id="btnLogin" className="login fadeIn fourth" value="Iniciar Sesion"/>
                    </div>
                </form>

                <div id="formFooter">

                <button type="button"  className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalRegistroLogin">
                    Registrarse
                </button>
                
                </div>

                    <div className="modal fade" id="modalRegistroLogin" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">Registo de Usuario</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <form id="frmFormularioUsuario" onSubmit={handleSubmitRegister}>
                                    <div className="modal-body">

                                            <div className="mb-3">
                                            <label className="form-label">Correo Electrónico</label>
                                            <input type="email" className="form-control" id="email_" name="email" onChange={handleChangeRegistro} required/>
                                            </div>
                                            <div className="mb-3">
                                                <div className="form-group">
                                                    <label className="form-label">Contraseña</label>
                                                    <input type="password" className="form-control" id='password_' name="password" onChange={handleChangeRegistro} required/>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">DNI</label>
                                                <input type="text" className="form-control" id="dni_" name="dni" onChange={handleChangeRegistro} required/>
                                            </div>
                                            <div className="mb-3">
                                                <div className="form-group">
                                                    <label  className="form-label">Nombre</label>
                                                    <input type="text" className="form-control" id='nombre_'  name="nombres" onChange={handleChangeRegistro} required/>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <div className="form-group">
                                                    <label className="form-label">Apellido</label>
                                                    <input type="text" className="form-control" id='apellido_' name="apellidos" onChange={handleChangeRegistro} required/>
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <div className="form-group">
                                                    <label className="form-label">Direccion</label>
                                                    <input type="text" className="form-control" id='direccion_' name="direccion" onChange={handleChangeRegistro} required/>
                                                </div>
                                            </div>

                                            <div className="row">

                                                <div className="mb-3 col-4">
                                                    <div className="form-group">
                                                        <label className="form-label">Edad</label>
                                                        <input type="number" className="form-control" id='edad_' name="edad" onChange={handleChangeRegistro} required/>
                                                    </div>
                                                </div>
                                                <div className="mb-3 col-8">
                                                    <div className="form-group">
                                                        <label className="form-label">Telefono</label>
                                                        <input type="number" className="form-control" id='telefono_' name="telefono" onChange={handleChangeRegistro} required/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">

                                                <div className="mb-3 col-4">
                                                    <div className="form-group">
                                                        <label className="form-label">Distrito</label>
                                                        <input type="text" className="form-control" id='distrito_' name="distrito" onChange={handleChangeRegistro} required/>
                                                    </div>
                                                </div>
                                                <div className="mb-3 col-4">
                                                    <div className="form-group">
                                                        <label className="form-label">Provincia</label>
                                                        <input type="text" className="form-control" id='provincia_' name="provincia" onChange={handleChangeRegistro} required/>
                                                    </div>
                                                </div>
                                                <div className="mb-3 col-4">
                                                    <div className="form-group">
                                                        <label className="form-label">Departamento</label>
                                                        <input type="text" className="form-control" id='departamento_' name="departamento" onChange={handleChangeRegistro} required/>
                                                    </div>
                                                </div>

                                            </div>


                                    </div>
                                    <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                                    <button type="submit" className="btn btn-success" id="btnRegistro">Registrarse</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                
                </div>
                
            </div>

        </div>


    )
}