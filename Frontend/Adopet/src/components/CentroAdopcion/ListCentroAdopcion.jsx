import { useEffect } from "react";
import { useState } from "react";
import {getAllCentrosAdopcion} from '../../service/centroAdopcionService'
import { Link } from "react-router-dom";

const ListCentroAdopion = ()=>{

    const [centrosAdopcion, setCentroAdopcion] = useState([]);
    
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await getAllCentrosAdopcion(); // Aguarde a resposta da função
                setCentroAdopcion(response); // Defina o estado com os dados retornados
            } catch (error) {
                console.error('Erro ao buscar centros de adopción:', error);
            }
        };

        fetchData();
    },[]);

    return(
        <>
            <form className="form-inline ">
                <div className="form-group">
                    <input className="form-control my-2 " type="search" placeholder="Centro Adopcion ..." aria-label="Search"/>
                </div>
                <button className="btn btn-outline-success my-2" type="submit">Buscar</button>
            </form>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Direccion</th>
                    <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    
                     {
                        centrosAdopcion.map((centroAdopcion)=>(
                        <tr key={centroAdopcion.id}>    
                            <th scope="row">{centroAdopcion.id}</th>   
                            <td>{centroAdopcion.nombre_centro}</td>
                            <td>{centroAdopcion.direccion}</td>
                            <td><Link className="btn btn-primary" to={`${centroAdopcion.id}`}>Detalhes</Link>
                            <i className="fa fa-info-circle" aria-hidden="true"></i>

                            </td>
                        </tr>
                        ))
                     }   
                        
                </tbody>
            </table>
        </>
    );
}

export default ListCentroAdopion;