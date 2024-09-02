import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { RegisterPage } from './pages/RegisterPage/RegisterPage'
import { LoginPage } from './pages/LoginPage/LoginPage'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        {/* <Route path="/**" element={<NotFound/>} /> */}

      </Routes>
    </Router>
  )
}

export default App
