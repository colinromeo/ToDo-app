import axios from "axios";

 const PORTAL_API_URL ="https://fakestoreapi.com/";


export const getAxiosInstance = async () => {
  
  try {
    
  } catch (e) {
    
  } finally {
    const instance = axios.create({
      baseURL: PORTAL_API_URL,
      headers: {
        Accept: "application/json",
        
      },
    });
    instance.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        console.log("error",error)
        return Promise.reject(error);
      }
    );
    return instance;
  }
};


