import {api} from './api';

export const addUsuario = async(data)=>{
    try {
        const response = await api.post('/api/usuarios/new',data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

