import { useState } from 'react';
import './Login.css'

export const Login = () => {
  const [isChecked, setChecked] = useState(false);
  const checkedClassName = isChecked 
  ? 'appearance-none h-4 w-4 border border-gray-300 rounded-md bg-white focus:outline-none relative' 
  : 'appearance-none h-4 w-4 border border-gray-300 rounded-md bg-white focus:outline-none relative';

  const HandleClick = () => {
    setChecked(!isChecked)
  };

    return(
    <form className='login flex flex-col justify-center items-center'>
      <div className='container'>
        <div className='flex items-center justify-center'>
          <span className='text-custom-size font-bold' >Iniciar Sesión</span>
        </div>  
        <div>
          <label htmlFor="email">Correo:</label>
          <input type="email" id='email' name='email' placeholder='Ingresa tu correo' required />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id='password' name='password' placeholder='Ingresa tu contraseña' required />
        </div>
      </div>
      <label className='checkbox flex justify-between'>
        <div className='flex flex-row items-center'> 
          <input className={checkedClassName} onChange={HandleClick} type="checkbox" /><p className='p-check'>Recordarme</p>
        </div>
        <a href="#" target="_blank" rel="noopener noreferrer">¿Olvidaste tu contraseña?</a>
      </label>
      <button className='max-w-[420px] w-full bg-custom-purple text-white' type="submit">Ingresar</button>
      <p>¿No tienes una cuenta? <a className='text-white' href="#">Regístrate aqui</a></p>  
    </form>
    );


}