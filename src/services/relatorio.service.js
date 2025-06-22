import axios from "axios";

const instance = axios.create({
  timeout: 5000,
  baseURL: process.env.BASE_URL,
  withCredentials: true
})

export async function getRelatorios(start, end, startRef, endRef) {
  try {
    const response = await instance.get(
      `/relatorio?dataInicio=${start}&dataFim=${end}&dataRefInicio=${startRef}&dataRefFim=${endRef}`, 
      {validateStatus: () => true}
    );

    return response
  } 
  catch {
    console.error(ex);
    return false;
  }
}