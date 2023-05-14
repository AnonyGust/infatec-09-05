import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import infatecFetch from '../../axios/config';



export async function loginUser(ra, password, navigate) {
  
  try {
    const data = {
      ra: ra,
      password: password,
    };

    const response = await infatecFetch.post('/api/Login/LoginUser', data);
    const token = response.data.bearer; // obter o token a partir da resposta da API
    sessionStorage.setItem('bearer', token); // armazenar o token na sessionStorage
    console.log(sessionStorage)
    toast.success('Login realizado com sucesso');
    console.log(response.data);
    
    navigate('/adm')
    



  } catch (error) {
    console.error(error);
    // Trate os erros adequadamente
    toast.error('Não foi possível realizar login');
  }
}
