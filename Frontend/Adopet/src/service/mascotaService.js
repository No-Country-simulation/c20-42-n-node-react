import {api} from './api';

export const addMascota = async(data)=>{
    try {
        const response = await api.post('/api/mascotas/',data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getAllMascotas = async()=>{
    try {
        const response = await api.get('/api/mascotas/');
        return response.data;
    } catch (error) {
        throw error;
    }
}


export const getMascota = async(id)=>{
    try {
        const response = await api.get('/api/mascotas/${id}');
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const updateMascota = async(id,data)=>{
    try {
        const response = await api.put('/api/mascotas/${id}',data);
        return response.data;
    } catch (error) {
        throw error;
    }
}


