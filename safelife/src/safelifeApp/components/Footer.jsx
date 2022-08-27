

export const Footer = () => {

    return(

        <footer className="footer py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="#about" className="link px-2">Nosotros</a></li>
            <li className="nav-item"><a href="#specialties" className="link px-2">Especialidades</a></li>
            <li className="nav-item"><a href="#offices" className="link px-2">Sedes</a></li>
            <li className="nav-item"><a href="#contact" className="link px-2">Contactos</a></li>
            <li className="nav-item"><a href="#" className="link px-2">Staff</a></li>
            <li className="nav-item"><a href="./Login" className="link px-2">Citas</a></li>
            </ul>
            <p className="footer-bot text-center">© 2022 Health's TI</p>
        </footer>

    )

}