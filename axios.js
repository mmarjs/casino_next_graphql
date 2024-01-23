import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_WEB_API_URL
});

/*
let promise;
if (typeof window !== "undefined") {

  const calme = (async () => {
    const session = await getSession();
    console.log("session",session)
    if(session){
      return session.jwt
    }else{
      return null
    }
  })()

  const getToken = (value) => {
    return new Promise((resolve, reject) => {
      resolve(calme)
    })
  }
  
}

instance.defaults.headers.common['Authorization'] = 'Bearer ' + getToken();
*/

export default instance;
