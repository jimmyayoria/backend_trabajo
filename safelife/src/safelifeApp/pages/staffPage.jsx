import { useEffect, useState } from "react";
import { SafelifeLayout } from "../layout/safelifeLayout"
import axios from 'axios';
import '../../assets/css/index.css';

export const StaffPage=()=>{


    const API ='https://app-safelife.herokuapp.com/'; //http://localhost:5000/
    
    const [doctores, setDoctores] = useState([]);

    useEffect(()=>{
        axios.get('${API}doctor')
        .then(res=>{
          setDoctores(res.data.content);
    
        })

      },[]);


      const buscadorMedico = ()=>{

            const sede=document.querySelector('#cmbSedes').value == '' ? 0 : parseInt(document.querySelector('#cmbSedes').value);
            const especialidad=document.querySelector('#cmbEspecialidades').value=='' ? 0 : parseInt(document.querySelector('#cmbEspecialidades').value);
            const nombreMedico=document.querySelector('#txtNombreMedico').value;


            if(sede===0 && especialidad===0 && nombreMedico==='')
            {
                listarDoctores(doctores);
                return;
            }
            

            const doctoresBuscados = doctores.filter((element) => {

                if(sede!=0){

                    return  especialidad!=0 ?   

                                    nombreMedico!='' ? (element.sede.id===sede && element.especialidad.id===especialidad && element.nombre.toLowerCase().includes(nombreMedico.toLowerCase()))
                                            
                                            : (element.sede.id===sede && element.especialidad.id===especialidad)
                                    
                                : (element.sede.id==sede);


                }else if(especialidad!=0){

                    return  nombreMedico!=''?  (element.especialidad.id===especialidad && element.nombre.toLowerCase().includes(nombreMedico.toLowerCase())):  (element.especialidad.id===especialidad );

                }else {
                    return element.nombre.toLowerCase().includes(nombreMedico.toLowerCase());

                }

            });

            doctoresBuscados.length>0 ? listarDoctores(doctoresBuscados) : window.alert('No se encontraron resultados');

        }

        

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
                            <button type="button" className="btn btn-primary rounded-pill" id="btnBuscar" onClick={()=>{buscadorMedico()}}>Buscar</button>
                        </div>     
                    </div>  
                </section>
                
                <section className="doctors">
                    <div className="doctors-container text">

                        <div className="row g-2 mx-auto container col-12"  id="doctoresContenedor">

                        {doctores.map((doctor)=>{
                            return (
                                <div className="col-md-3">
                                    <article className="card">
                                        <img src={doctor.imagen} className="card-img-top" alt="Imagen doctor"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{doctor.nombre}</h5>
                                            <a href="#" className="btn btn-primary rounded-pill">Ver horarios</a>
                                        </div>
                                    </article>
                                </div>
                            )
                            })}

                        </div>

                    </div>
                </section>

                <section className="pagination" style={{justifyContent:'center'}}>
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
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
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