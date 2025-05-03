import axios from "axios";

const instance = axios.create({
  timeout: 5000,
  baseURL: process.env.BASE_URL
})

export const loginAsync = async (email, senha) => {
  try {
    const payload = {
      email: email,
      senha: senha
    }
  
    const response = await instance.post("/auth", payload, {withCredentials: true})
    
    return response;
  }
  catch (error) {
    if (error.response) console.error(error);
    return false
  }
};

export const logoutAsync = async () => {
  try {
    return await instance.post("/auth/logout", null, {withCredentials: true});
  }
  catch (error) {
    if (error.response) console.error(error);
    return false
  }
};