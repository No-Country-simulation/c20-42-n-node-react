import { useState } from 'react';
import './register.css';

export const Register = () => {
  const [isChecked, setChecked] = useState(false);
  const checkedClassName = isChecked 
  ? 'appearance-none h-4 w-4 border border-gray-300 rounded-md bg-custom-purple focus:outline-none relative' 
  : 'appearance-none h-4 w-4 border border-gray-300 rounded-md bg-white focus:outline-none relative';

  const HandleClick = () => {
    setChecked(!isChecked)
  };

    return(
    <form className='register flex flex-col justify-center items-center'>
      <div className='second-div max-w-[800px]'>
        <div>
          <span className='text-custom-size font-bold' >Crear cuenta</span>
        </div>  
        <div>
          <label htmlFor="firstName">Nombre:</label>
          <input type="text" id='firstName' name='firstName' pattern='[A-Za-z\s]+' placeholder='Ingresa tu nombre' required />
        </div>
        <div>
          <label htmlFor="lastName">Apellido:</label>
          <input type="text" id='lastName' name='lastName' pattern='[A-Za-z\s]+' placeholder='Ingresa tu apellido' required />
        </div>
        <div>
          <label htmlFor="email">Correo:</label>
          <input type="email" id='email' name='email' placeholder='mail@abc.com' required />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id='password' name='password' placeholder='Ingresa tu contraseña' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).{6,}" required />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
          <input type="password" id='confirmPassword' name='confirmPassword' placeholder='Confirma tu contraseña' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).{6,}" required />
        </div>
      </div>
      <label className='checkbox flex items-center'>
        <input className={checkedClassName} onChange={HandleClick} type="checkbox" required />
        <p className='text-checkbox'>Acepto los <a href="#" target="_blank" rel="noopener noreferrer">términos y condiciones</a> y las 
        <a href="#" target="_blank" rel="noopener noreferrer"> políticas de privacidad</a>.</p> 
      </label>
      <button className='max-w-[420px] w-full bg-custom-purple text-white' type="submit">Registrarte</button>
      <p>¿Ya tienes una cuenta? <a className='text-custom-purple' href="#">Iniciar Sesión</a></p>  
    </form>
    );
};