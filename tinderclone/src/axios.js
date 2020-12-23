import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tindertutorialbackend.herokuapp.com/',
});

export default instance;