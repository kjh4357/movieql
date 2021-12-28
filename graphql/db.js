import axios from "axios";
const API_URL = "https://yts.mx/api/v2/list_movies.json";


export const getMovies = async (limit, rating) => {
    const response = await axios.get(`${API_URL}`);
    if(response.status === 200){
        return response.data.data.movies    
    }
    return response
};

