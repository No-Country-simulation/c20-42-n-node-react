import { Register } from '../../components/register/Register';
import './RegisterPage.css'

export const RegisterPage = () => {
    
  return (
    <div className='flex items-center justify-center h-full register-page-container'>
        <div className='w-1/2 flex items-center flex-col left-Section'>
          <div className='paw'>
            <img src="/src/assets/paw.png" alt="paw" />
          </div>
          <Register />
        </div>
        <div className='w-1/2 h-screen bg-[url(/src/assets/bg-register.png)] bg-cover bg-center right-section'>
          <div>
            <img src="/src/assets/register-img.png" alt="img-register" />
            <span className='xl:text-custom-size lg:text-3xl md:text-2xl font-extrabold'>Encuentra tu compañero ideal</span>
            <p className='xl:text-xl lg:text-lg font-semibold'>Comienza hoy y adopta a una mascota que busca un hogar</p>
          </div>
        </div>
    </div>
  )
}


