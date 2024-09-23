import {api} from './api';

export const addMascota = async(data)=>{

    try {
        const token = sessionStorage.getItem('token');
        const response = await api.post('/api/mascotas/',data,{
            headers:{
                Authorization: `Bearer ${token}`,
                ContentType:'multipart/form-data'
            }
        });

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getAllMascotas = async()=>{
    
    try {
        const token = sessionStorage.getItem('token');
        const response = await api.get('/api/mascotas/',{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}


export const getMascota = async(id)=>{
    const token = sessionStorage.getItem('token');
    try { 
        const response = await api.get(`/api/mascotas/${id}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const updateMascota = async(id,data)=>{
    try {
        const token = sessionStorage.getItem('token');
        const response = await api.put('/api/mascotas/${id}',data,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}


