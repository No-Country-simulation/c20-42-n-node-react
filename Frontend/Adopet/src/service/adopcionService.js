import {api} from './api';

export const pedido = async(data)=>{
    try {
        const response = await api.post('/api/adoption/pedido/',data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const aprobar = async(data)=>{
    try {
        const response = await api.get('/api/adoption/aprobar/',data);
        return response.data;
    } catch (error) {
        throw error;
    }
}
