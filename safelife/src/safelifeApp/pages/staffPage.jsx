import { SafelifeLayout } from "../layout/safelifeLayout"

export const StaffPage=()=>{

    return (

        <SafelifeLayout>

            <main className="container pt-4 ">

                <section className="filters" id="filters">
                    <div className="filter-container">
                        <h3 className="filters__title">🔍 Busca a tu médico:</h3>
                        <div className="d-flex my-4 col-12 filters__filters-container">
                            <select className="form-select rounded-pill" aria-label="Default select example" id="cmbSedes">
                                <option value="" selected>Todas las sedes</option>
                            </select>
                            <select className="form-select rounded-pill" aria-label="Default select example" id="cmbEspecialidades">
                                <option value="" selected>Todas las especialidades</option>
                            </select>
                            <input type="text" className="form-control rounded-pill" placeholder="Nombre" id="txtNombreMedico" aria-label="Username"/>
                            <button type="button" className="btn btn-primary rounded-pill" id="btnBuscar">Buscar</button>
                        </div>     
                    </div>  
                </section>
                
                <section className="doctors">
                    <div className="doctors-container text">

                        <div className="row g-2 mx-auto container"  id="doctoresContenedor">
                        </div>

                    </div>
                </section>

                <section className="pagination">
                    <div className="pagination-container">
                        <hr className="pagination__limit"/>
                        <div className="d-flex my-4 col-12 gap-2 pagination__container-options">
                                <h5 className="pagination-mostrar">Mostrar: </h5>
                                <select className="form-select rounded-pill"aria-label="Default select example">
                                    <option selected>12</option>
                                    <option value="1">24</option>
                                    <option value="2">48</option>
                                    
                                </select>
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                    <li className="page-item"><a class="page-link" href="#">1</a></li>
                                    <li className="page-item"><a class="page-link" href="#">2</a></li>
                                    <li className="page-item"><a class="page-link" href="#">3</a></li>
                                    <li className="page-item"><a class="page-link" href="#">Next</a></li>
                                    </ul>
                                </nav>
                        </div>
                        <hr className="pagination__limit"/>
                    </div>
                </section>

            </main>

        </SafelifeLayout>
    )
}