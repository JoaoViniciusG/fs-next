// import axios from "axios";

// const instance = axios.create({
//   timeout: 5000,
//   baseURL: process.env.BASE_URL
// })

// export const getPedidos = async () => {
//     try {
//         const response = await instance.get("/pedidos", { withCredentials: true });

//         return response;
//     }
//     catch {
//         return false;
//     }
// };

import axios from "axios";

const instance = axios.create({
  timeout: 5000,
  baseURL: process.env.BASE_URL,
});

// Criar um novo pedido
export const criarPedidoAsync = async (dadosPedido) => {
  try {
    const response = await instance.post("/pedidos", dadosPedido, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};

// Consultar pedidos com filtros (como nome do cliente, ordem, etc.)
export const consultarPedidosAsync = async (filtros) => {
  try {
    const response = await instance.get("/pedidos", {
      params: filtros,
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};

// Excluir pedido pelo ID
export const excluirPedidoAsync = async (idPedido) => {
  try {
    const response = await instance.delete(`/pedidos/delete/${idPedido}`, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};

// Atualizar o status de um pedido (ex: "Em andamento", "Concluído", etc.)
export const atualizarStatusPedidoAsync = async (idPedido, status) => {
  try {
    const response = await instance.patch(
      `/pedidos/status/${idPedido}`,
      { status },
      {
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};
