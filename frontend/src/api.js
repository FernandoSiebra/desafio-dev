import axios from "axios";

const api = axios.create({
    baseURL : 'http://localhost:3001'
});

export async function apiGet(uri) {
  try{
      const response = await api.get(uri);
      return response;
  }
  catch( error )
  {
      return console.log(error);
  }
}


export async function apiPost(uri,data) {
    try{
        const response = await api.post(uri,data);
        return response;
    }
    catch( error )
    {
        return console.log(error);
    }
}


  
