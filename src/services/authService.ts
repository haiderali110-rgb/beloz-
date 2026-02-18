import API from "./api";  
export const signupAPI = (data: any) => 
  API.post("/auth/signup", data);

 
export const loginAPI = (email: string, password: string) => 
  API.post("/auth/login", { email, password });

 
export const logoutAPI = () =>
  API.post("/auth/logout");
