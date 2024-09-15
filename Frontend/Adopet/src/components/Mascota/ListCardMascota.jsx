import React from "react";
import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { getAllMascotas } from "../../service/mascotaService";
import { Link } from "react-router-dom";

const ListCardMacota = ()=>{
    const [mascotas, setMascotas] = useState([]);
    
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await getAllMascotas(); 
                setMascotas(response); 
            } catch (error) {
                console.error('Erro ao buscar centros de adopción:', error);
            }
        };

        fetchData();
    },[])

    return(
        <>
            <div className="container mt-4">
            <div className="row">
                {mascotas.map((mascota) => (
                <div className="col-md-4 mb-4" key={mascota.id}>
                    <div className="card h-100">
                    <img 
                        src={`${api.defaults.baseURL}/uploads/${mascota.foto}`} 
                        className="card-img-top" 
                        alt={mascota.nombre} 
                    />
                    <div className="card-body">
                        <h5 className="card-title">{mascota.nombre}</h5>
                        <p className="card-text">
                        <strong>Raza:</strong> {mascota.raza}<br />
                        <strong>Edad:</strong> {mascota.edad} años<br />
                        <strong>Descripción:</strong> {mascota.descripcion}
                        <Link className="btn btn-primary" to={`mascotas/${mascota.id}`}>Detalhes</Link>
                        </p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </>
    );
}

export default ListCardMacota;