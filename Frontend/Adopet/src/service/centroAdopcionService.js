import {api} from './api';


export const addCentroAdopcion = async(data)=>{
    try {
        const token = sessionStorage.getItem('token')
        const response = await api.post('/api/centro-adopcion/',data,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });

    } catch (error) {
        throw error;
    }
}

export const getAllCentrosAdopcion = async ()=>{
    const token = sessionStorage.getItem('token')
    try {
        const response = await api.get('/api/centro-adopcion/',{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}


export const getCentroAdopcion = async(id)=>{
    const token = sessionStorage.getItem('token')
    try {
        const response = await api.get(`/api/centro-adopcion/${id}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const updateCentroAdopcion = async(id,data)=>{
    const token = sessionStorage.getItem('token')

    try {
        const response = await api.put(`/api/centro-adopcion/${id}`,data);
        return response.data;
    } catch (error) {
        throw error;
    }
}


