import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-clone-d8d62.cloudfunctions.net/api' 
    // baseURL: 'http://127.0.0.1:5001/clone-d8d62/us-central1/api' 
});

export default instance;