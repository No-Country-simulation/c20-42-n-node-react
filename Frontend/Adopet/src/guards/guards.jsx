import { Navigate, Outlet } from 'react-router-dom';

const IsAuthenticated = () => {
  const isAuth = !!localStorage.getItem('token');
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default IsAuthenticated;