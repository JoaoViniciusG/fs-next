export const loginAsync = async (user, password) => {
  const payload = {
    user: user,
    password: password
  }

  const response = await fetch("https://estotech.dev.vilhena.ifro.edu.br/api/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })
  
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
      'Access-Control-Allow-Credentials': true
    }
  })
  
  return response;
};