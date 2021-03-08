import axios from 'axios';

const instance=axios.create({
    // baseURL:'http://localhost:5001/clone-2cc1c/us-central1/api'
    baseURL:'http://localhost:5000'
});

export default instance;