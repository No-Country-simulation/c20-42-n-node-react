import { Link, Outlet } from "react-router-dom";

const MascotaPage =()=>{
    return(
        <div className="container">
            <div className="row">
                <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="position-sticky">
                    <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link className="nav-link" to="/mascotas/create">Crear</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/mascotas/">Listar</Link>
                    </li>
                    </ul>
                </div>
                </nav>

                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <h2>Mascotas</h2>
                <br/>
                    <Outlet /> 
                </main>
            </div>
            </div>
        
    );
}

export default MascotaPage;