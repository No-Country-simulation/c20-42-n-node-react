import React, { useState } from "react";

import {addCentroAdopcion} from '../../service/centroAdopcionService'

const FormCentroAdopcion = ()=>{

    const [nombre, setNombre] = useState("");
    const [direccion, setDireccion] = useState("");
    const [telefono, setTelefono] = useState("");
    const [horario,setHorario] = useState("");

    const handleSubmit = (event)=>{
        event.preventDefault();
        addCentroAdopcion({
            nombre_centro: nombre,
            direccion: direccion,
            telefono: telefono,
            horario_atencion: horario
        })

    }
    return(
        <form onSubmit={handleSubmit}>
            <div className="col-7">
            <div className="form-group">
                <label >Nombre</label>
                <input type="text" onChange={(e)=>setNombre(e.target.value)} className="form-control" name="nombre_centro" id="nombre" aria-describedby="nombreHelp" placeholder="Enter nombre"/>
            </div>
            </div>
            <div className="col-7">
                <div className="form-group">
                    <label >Direccion</label>
                    <input type="text" onChange={(e)=>setDireccion(e.target.value)} name="direccion" className="form-control" id="direccion" aria-describedby="direccionHelp" placeholder="Enter Direccion"/>
                </div>
            </div>
            <div className="col-7">
                <div className="form-group">
                    <label >Telefono</label>
                    <input type="text" onChange={(e)=>setTelefono(e.target.value)} name="telefono"   className="form-control" id="telefono" placeholder="(00) 9999-9999"/>
                </div>             
            </div> 
            <div className="col-1">
                <div className="form-group">
                    <label >Horario</label>
                    <input type="text" onChange={(e)=>setHorario(e.target.value)} className="form-control" id="horario_atencion" name="horario_atencion "aria-describedby="HorarioHelp" placeholder="00:00"/>
                </div>
            </div>
            <br/>
            <button type="submit" className="btn btn-primary">Crear</button>
        </form>
    );
}

export default FormCentroAdopcion;