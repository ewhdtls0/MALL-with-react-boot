import axios from 'axios';

const BOARD_API_BASE_URL = "http://localhost:8080/";

class BoardService {
    getUser(user) {
       return axios.post(BOARD_API_BASE_URL+'login', user);
    }

    createUser(user) {
        return axios.post(BOARD_API_BASE_URL+'user', user);
    }

}

export default new BoardService();