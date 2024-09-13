
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import IsAuthenticated from "./guards/guards";
import Navbar from './components/navbar/Navbar';
import MascotaPage from "./pages/Mascota/MascotaPage";
import CentroPage from "./pages/CentroAdopcion/CentroPage";
import FormCentroAdopcion from "./components/CentroAdopcion/FormCentroAdopcion";
import ListCentroAdopion from "./components/CentroAdopcion/ListCentroAdopcion";
import ShowCentroAdopcion from "./components/CentroAdopcion/ShowCentroAdopcion";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./utils/PrivateRoute";


function App() {
  
  
  return (
   <AuthProvider> 
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route  element={<PrivateRoute/>} > 
          <Route path="/dashboard" element={<DashboardPage/>} />
          <Route path="/mascotas" element={<MascotaPage/>} />
          <Route path="/centro-adopcion" element={<CentroPage/>} >
            <Route path="create" element={<FormCentroAdopcion/>} />
            <Route path="" element={<ListCentroAdopion/>} />
            <Route path=":id" element={<ShowCentroAdopcion/>}/>
          </Route>
        </Route>
      </Routes>
    </Router>
    </AuthProvider>
  )
}

export default App
