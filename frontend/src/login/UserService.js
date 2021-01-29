import axios from 'axios';

const BOARD_API_BASE_URL = "http://localhost:8080/user";

class BoardService {
    getBoards() {
       return axios.get(BOARD_API_BASE_URL);
    }

    createUser(user) {
        return axios.post(BOARD_API_BASE_URL, user);
    }

}

export default new BoardService();