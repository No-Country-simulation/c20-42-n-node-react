import { Link, useParams } from "react-router-dom";
import { api } from "../../service/api";

import { getMascota } from "../../service/mascotaService";
import { useEffect, useState } from "react";

const ShowMascota = ()=>{

    const {id} = useParams();
    const [mascota, setMascota] = useState({});

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await getMascota(id); 
                setMascota(response); 
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
                    <img 
                        src={`${api.defaults.baseURL}/uploads/${mascota.foto}`} 
                        className="card-img-top" 
                        alt={mascota.nombre} 
                    />
                    <h2>{mascota.nombre}</h2>
                    <p>Raza: {mascota.raza}</p>
                    <p>Descripcion: {mascota.descripcion}</p>
                    <p>Edad: {mascota.edad} </p>
                    <p>Peso: {mascota.peso} </p>
                    <p>Salud: {mascota.estado_salud}</p>
                    <br />
                    <Link className="btn btn-primary" to="/">Voltar</Link>
                </div>
            </div>
        </>
    );
}

export default ShowMascota;