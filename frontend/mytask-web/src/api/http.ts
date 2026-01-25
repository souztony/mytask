import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Ajustar se a porta for diferente
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;
