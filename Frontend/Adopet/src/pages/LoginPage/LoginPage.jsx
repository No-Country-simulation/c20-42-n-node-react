import {Login} from '../../components/Login/Login';
import './LoginPage.css';

export const LoginPage = () => {

  return (
    <div className='min-h-screen w-screen bg-[url(/src/assets/bg-login.png)] bg-cover bg-center flex items-center justify-center'>
      <div className='bg2 bg-cover bg-[url(/src/assets/bg2-login.png)] rounded-3xl bg-center'>
        <Login />
      </div>
    </div>      
  );
};
// className='bg-[url(/src/assets/bg2-login.png)]'