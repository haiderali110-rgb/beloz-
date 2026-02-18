 import React, {createContext,useContext,useState} from "react";
import { signupAPI, loginAPI } from "../services/authService";

const AuthContext = createContext<any>(null);

export const AuthProvider = ({children}:any)=>{

const [user,setUser] = useState(null);

const signup = async(data:any)=>{
 try{
   const res = await signupAPI(data);

   if(res.data.token){
     localStorage.setItem("token",res.data.token);
     setUser(res.data.user);
   }

   return res;
 }catch(err:any){
   throw new Error(err.response?.data?.message);
 }
};

const login = async(email:string,password:string)=>{
 try{
   const res = await loginAPI(email,password);

   if(res.data.token){
     localStorage.setItem("token",res.data.token);
     setUser(res.data.user);
   }

   return res;
 }catch(err:any){
   throw new Error(err.response?.data?.message);
 }
};

return(
<AuthContext.Provider value={{signup,login,user}}>
 {children}
</AuthContext.Provider>
)
};

export const useAuth = ()=> useContext(AuthContext);
