import axios from "axios";

const API = axios.create({
  baseURL: "https://dev-api.beloz.com/api",  
});

API.interceptors.request.use((req:any) => {
  const token = localStorage.getItem("token");

  if(token){
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;
