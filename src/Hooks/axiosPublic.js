import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://pet-adoption-server-three.vercel.app',
});
export default axiosPublic;