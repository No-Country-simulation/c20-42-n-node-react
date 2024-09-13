
const FormMascota = ()=>{
    return(
        <form >
            <div className="col-7">
            <div className="form-group">
                <label >Nombre</label>
                <input type="text" className="form-control" name="nombre" id="nombre" aria-describedby="nombreHelp" placeholder="Enter nombre"/>
            </div>
            </div>
            <div className="col-7">
                <div className="form-group">
                    <label >Raza</label>
                    <input type="text" name="raza" className="form-control" id="raza" aria-describedby="razaHelp" placeholder="Enter raza"/>
                </div>
            </div>
            <div className="col-7">
                <div className="form-group">
                    <label >Descripcion</label>
                    <textarea className="form-control" name="descripcion" rows="5" id="descripcion"></textarea>
                </div>             
            </div> 
            <div className="col-1">
                <div className="form-group">
                <label >Sexo</label>
                <select className="form-select" name="sexo" aria-label="Default select example">
                    <option value="1">M</option>
                    <option value="2">F</option>
                </select>
                </div>
                <div className="form-group">
                    <label >Edad</label>
                    <input type="number" className="form-control" id="edad" name="edad "aria-describedby="edadHelp" placeholder="0"/>
                </div>
                <div className="form-group">
                    <label >Peso</label>
                    <input type="number" className="form-control" id="peso" name="peso" aria-describedby="pesoHelp" placeholder="2"/>
                </div>
            </div>
            

            <div className="form-check">
                <input type="checkbox" className="form-check-input" name="estarelizada" id="check1"/>
                <label className="form-check-label" >Esterilizada</label>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" name="vacuna" id="check2"/>
                <label className="form-check-label" >Vacuna</label>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default FormMascota;