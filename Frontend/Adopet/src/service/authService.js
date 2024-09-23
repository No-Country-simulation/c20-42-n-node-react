import {api} from './api';


const login = async(credentials)=>{

    try {
        
        const response = await api.post('/api/auth/login',credentials);
        const token = await response.data.token;
        if(token){
            const arrayToken = token.split('.');
            sessionStorage.setItem('user',JSON.stringify(atob(arrayToken[1])));
            sessionStorage.setItem('token', token);
            return true;
        }else{
            return false;
        }   
      
    } catch (error) {
        throw error;
    }
}

const logout = () =>{
    sessionStorage.removeItem('user');
}

const getCurrentUser =()=>{
    return JSON.parse(sessionStorage.getItem('user'));
}

const getUserLogged = ()=>{
    const user = getCurrentUser();
    return user ? user : null;
}

export default{
    login,
    logout,
    getUserLogged,
}