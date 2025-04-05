import axios from "axios";

const instance = axios.create({
  timeout: 5000,
  // baseURL: "http://localhost:3000"
  baseURL: "https://estotech.dev.vilhena.ifro.edu.br/api"
})

export const loginAsync = async (user, password) => {
  try {
    const payload = {
      user: user,
      password: password
    }
  
    const response = await instance.post("/auth", payload, {withCredentials: true})
    // const response = await fetch("https://estotech.dev.vilhena.ifro.edu.br/api/auth/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Credentials": true
    //   },
    //   body: JSON.stringify(payload)
    // })
    
    return response;
  }
  catch (error) {
    if (error.response) console.log(error);
    return false
  }
};

export const verifyAsync = async (user, password) => {
  try {
    const payload = {
      user: user,
      password: password
    }
  
    const response = await instance.get("/auth/verify", {withCredentials: true});
    
    return response;
  }
  catch (error) {
    if (error.response) console.log(error);
    return false
  }
};