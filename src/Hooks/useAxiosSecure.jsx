import axios from "axios";

 const axiosSecure = axios.create({
    baseURL: "https://pet-adoption-server-three.vercel.app"
 })
 const useAxiosSecure = ()=>{
    return axiosSecure

 }
 export default useAxiosSecure;