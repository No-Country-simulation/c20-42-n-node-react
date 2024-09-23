import React, {useState,useEffect} from "react";
import { addMascota} from '../../service/mascotaService';
import MessageAlert from '../MessageAlert/MessageAlert'

const FormMascota = ()=>{
    const [showMessage, setShowMessage] = useState(false);
    const [response, setResponse] = useState({});
    const [nombre, setNombre] = useState('');
    const [raza, setRaza] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [sexo, setSexo] = useState('M');
    const [edad,setEdad] = useState(0);
    const [peso,setPeso] = useState(0);
    const [estadoSalud, setEstadoSalud] = useState('');
    const [vacuna, setVacuna] = useState(false);
    const [esterelizada, setEsterelizada] = useState(false);
    const [foto, setFoto] = useState(null);
    
    useEffect(()=>{
        console.log('resp ',response);
       if(response.success == true){ 
            setShowMessage(true);

       } 
       if(response.success == false){
           setShowMessage(true);
       }

    },[response]);

    const handleSubmit = async (event) =>{
        event.preventDefault();
        const formData = new FormData();
        formData.append('nombre',nombre);
        formData.append('raza',raza);
        formData.append('descripcion',descripcion);
        formData.append('sexo',sexo);
        formData.append('edad',edad);
        formData.append('peso',peso);
        formData.append('estado_salud',estadoSalud);
        formData.append('vacuna',vacuna === "on" ? true : false);
        formData.append('esterelizada',esterelizada ==="on" ? true : false);
        formData.append('foto',foto);
        
        const result = await addMascota(formData);
        setResponse(result);

        setNombre('');
        setRaza('');
        setDescripcion('');
        setSexo('');
        setEdad(0);
        setPeso(0);
        setEstadoSalud('');
        setVacuna(false)
        setEsterelizada(false);
        
    }
    const toastStyle ={
        position: 'absolute',
        top: 0,
        right: 0
    }
    const containerToastStyle={
        position: 'relative',
        minHeight:'200px'
    }

    return(
    <>
        { showMessage && <MessageAlert
         success={response.success}
         message={response.message}
        /> }
        

        <form onSubmit={handleSubmit}>


            <div className="col-7">
            <div className="form-group">
                <label >Nombre</label>
                <input type="text"
                onChange={(e)=>setNombre(e.target.value)}
                className="form-control" 
                value={nombre}
                id="nombre" 
                aria-describedby="nombreHelp" 
                placeholder="Enter nombre"/>
            </div>
            </div>
            <div className="col-7">
                <div className="form-group">
                    <label >Raza</label>
                    <input type="text" 
                    value={raza}
                    onChange={(e)=>setRaza(e.target.value)}
                    className="form-control" 
                    id="raza" aria-describedby="razaHelp" 
                    placeholder="Enter raza"/>
                </div>
            </div>
            <div className="col-7">
                <div className="form-group">
                    <label >Estado Salud</label>
                    <input type="text" 
                    value={estadoSalud}
                    onChange={(e)=>setEstadoSalud(e.target.value)}
                    className="form-control" 
                    id="raza" aria-describedby="razaHelp" 
                    placeholder="Enter estado salud"/>
                </div>
            </div>
            <div className="col-7">
                <div className="form-group">
                    <label >Descripcion</label>
                    <textarea className="form-control"
                    value={descripcion} 
                    onChange={(e)=>setDescripcion(e.target.value)}
                    name="descripcion" rows="5" id="descripcion"></textarea>
                </div>             
            </div>

            <div className="col-1">
                <div className="form-group">
                <label >Sexo</label>
                <select className="form-select"
                value={sexo}
                onChange={(e)=>setSexo(e.target.value)} 
                value={sexo} 
                aria-label="Default select example">
                    <option value="1">M</option>
                    <option value="2">F</option>
                </select>
                </div>
                <div className="form-group">
                    <label >Edad</label>
                    <input type="number"
                    value={edad}
                    onChange={(e)=>setEdad(e.target.value)} 
                    className="form-control" 
                    id="edad" 
                    aria-describedby="edadHelp" 
                    placeholder="0"/>
                </div>
                <div className="form-group">
                    <label >Peso</label>
                    <input type="number"
                    value={peso} 
                    onChange={(e)=>setPeso(e.target.value)} 
                    className="form-control" 
                    id="peso" 
                    aria-describedby="pesoHelp" 
                    placeholder="2"/>
                </div>
               
            </div>
            <div className="form-check">
                <input type="checkbox"
                onChange={(e)=>setEsterelizada(e.target.value)} 
                className="form-check-input"  
                id="esterelizada"/>
                <label className="form-check-label" >Esterelizada</label>
            </div>
            <div className="form-check">
                <input type="checkbox"
                onChange={(e)=>setVacuna(e.target.value)} 
                className="form-check-input" 
                id="vacuna"/>
                <label className="form-check-label" >Vacuna</label>
            </div>
            <div className="col-7">
            <div className="form-group">
                <label>Foto</label>
                <input type="file"

                onChange={(e)=>setFoto(e.target.files[0])}
                className="form-control" 
                id="foto"/>
                
            </div>
            </div>

            <button type="submit" className="btn btn-primary">Salvar</button>
        </form>
        </>
    );
}

export default FormMascota;