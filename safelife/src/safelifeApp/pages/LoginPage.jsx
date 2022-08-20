import logo from '../../assets/img/logo.jpeg';
import '../../assets/css/login.css';

export const LoginPage=()=>{

    return (

        <div className="body-login">

            <div className="wrapper fadeInDown">

            <div id="formContent">

                <div className="form__logo my-3 mx-0">
                    <a href="/"><img src={logo} alt="logo" className="form__logo-image"/></a>
                </div>

                <form id="frmLogin">
                    <input type="email" id="email" className="form-control w-75 m-auto" name="email" placeholder="Correo electrónico"/>
                    <input type="password" id="password" className="form-control w-75 m-auto my-3" name="password" placeholder="Contraseña"/>
                    <div className="login__container">
                        <input type="button" id="btnLogin" className="login fadeIn fourth" value="Iniciar Sesion"/>
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
                                <div className="modal-body">
                                    <form id="frmFormularioUsuario">

                                        <div className="mb-3">
                                        <label className="form-label">Correo Electrónico</label>
                                        <input type="email" className="form-control" id="email_" name="email_" required/>
                                        </div>
                                        <div className="mb-3">
                                            <div className="form-group">
                                                <label className="form-label">Contraseña</label>
                                                <input type="password" className="form-control" name="password_" required/>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <div className="form-group">
                                                <label  className="form-label">Nombre</label>
                                                <input type="text" className="form-control"  name="nombre_" required/>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <div className="form-group">
                                                <label className="form-label">Apellido</label>
                                                <input type="text" className="form-control" name="apellido_" required/>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <div className="form-group">
                                                <label className="form-label">Edad</label>
                                                <input type="number" className="form-control" name="edad_" required/>
                                            </div>
                                        </div>


                                    </form>
                                </div>
                                <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                                <button type="button" className="btn btn-success" id="btnRegistro">Registrarse</button>
                                </div>
                            </div>
                        </div>
                    </div>

                
                </div>
                
            </div>

        </div>


    )
}