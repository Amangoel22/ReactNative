import axios from "axios";


async function authenticateUser(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;
  return token;
}

export function createUser(email, password) {
    return authenticateUser('signUp',email, password);
}

export function login(){
    return authenticateUser('signInWithPassword', email, password);
}

