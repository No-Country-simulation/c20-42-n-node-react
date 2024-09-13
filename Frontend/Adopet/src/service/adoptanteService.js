import {api} from './api';

export const addAdoptante = async(data)=>{
    try {
        const response = await api.post('/api/adoptantes/',data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getAllAdoptante = async ()=>{
    try {
        const response = await api.get('/api/adoptantes/');
        return response.data;
    } catch (error) {
        throw error;
    }
}


export const getAdoptante = async(id)=>{
    try {
        const response = await api.get('/api/adoptantes/${id}');
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const updateAdoptante = async(id,data)=>{
    try {
        const response = await api.put('/api/adoptates/${id}',data);
        return response.data;
    } catch (error) {
        throw error;
    }
}


