import axios from 'axios';

const instance = axios.create({
    baseURL:'https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/',
})

export default instance;