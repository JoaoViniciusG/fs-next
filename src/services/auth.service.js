import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://estotech.dev.vilhena.ifro.edu.br/api"
})

export const loginAsync = async (user, password) => {
  const payload = {
    user: user,
    password: password
  }

  const response = await instance.post("/auth", payload)
  
  return response;
};

export const verifyAsync = async (user, password) => {
  const payload = {
    user: user,
    password: password
  }

  const response = await fetch("https://estotech.dev.vilhena.ifro.edu.br/api/auth/verify", {
    method: "GET",
    mode: 'no-cors',
    credentials:'include',
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    }
  })
  
  return response;
};