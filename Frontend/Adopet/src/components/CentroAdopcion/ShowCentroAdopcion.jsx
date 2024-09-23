import { Link, useParams } from "react-router-dom";

import { getCentroAdopcion } from "../../service/centroAdopcionService";
import { useEffect, useState } from "react";

const ShowCentroAdopcion = ()=>{

    const {id} = useParams();
    const [centroAdopcion, setCentroAdopcion] = useState({})
    
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await getCentroAdopcion(id); 
                setCentroAdopcion(response); 
            } catch (error) {
                console.error('Erro ao buscar centro de adopción:', error);
            }
        };

        fetchData();
    },[]);
    return(
        <>
            <div className="card">
                <div className="card-body">
                    <h2>{centroAdopcion.nombre_centro}</h2>
                    <p>Direccion: {centroAdopcion.direccion}</p>
                    <p>Telefono: {centroAdopcion.telefono}</p>
                    <p>Horario: {centroAdopcion.horario_atencion}</p>
                    <br />
                    <Link className="btn btn-primary" to="/centro-adopcion/">Voltar</Link>
                </div>
            </div>

        
        </>
    );
}

export default ShowCentroAdopcion;

