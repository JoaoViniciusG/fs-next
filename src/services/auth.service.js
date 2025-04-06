import axios from "axios";

const instance = axios.create({
  timeout: 5000,
  baseURL: process.env.BASE_URL
})

export const loginAsync = async (user, password) => {
  try {
    const payload = {
      user: user,
      password: password
    }
  
    const response = await instance.post("/auth", payload, {withCredentials: true})
    
    return response;
  }
  catch (error) {
    if (error.response) console.log(error);
    return false
  }
};

export const logoutAsync = async () => {
  try {  
    return await instance.post("/auth/logout", null, {withCredentials: true});
  }
  catch (error) {
    if (error.response) console.log(error);
    return false
  }
};