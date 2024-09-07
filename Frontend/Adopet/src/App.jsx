
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar/Navbar';
import Banner from "./components/navbar/Banner";


function App() {


  return (
    <>
     <Navbar/>
    <Banner/>
   
      <div class="main">
        <div className="container-fluid">
          <div className="row">
          <div class="col-md-6 col-sm-12 section1-login">
            <h2> Login</h2>
            <p>Login or register from here to access.</p>
         </div>
         <div class="col-md-6 col-sm-12" >
            <div class="login-form">
               <form>
                  <div class="form-group">
                     <label>User Name</label>
                     <input type="text" class="form-control" placeholder="User Name"/>
                  </div>
                  <div class="form-group">
                     <label>Password</label>
                     <input type="password" class="form-control" placeholder="Password"/>
                  </div>
                  <button type="submit" class="btn btn-black">Login</button>
                  <button type="submit" class="btn btn-secondary">Register</button>
               </form>
            </div>
         </div>

          </div>
        </div>

      </div>

    </>
  )
}

export default App
