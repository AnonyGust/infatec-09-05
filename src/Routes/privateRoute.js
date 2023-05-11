import { Navigate } from 'react-router-dom';


export function PrivateRoute({children}){

    const user = false;

    return user ? children : <Navigate to="/login" />
}




// export function PrivateRoute({ children, loginFunction }){

//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     useEffect(() => {
//         const authenticate = async () => {
//             try {
//                 // Chama a função de login
//                 await loginFunction();
//                 setIsAuthenticated(true);
//             } catch (error) {
//                 console.log(error);
//             }
//         };
//         authenticate();
//     }, [loginFunction]);

//     return isAuthenticated ? children : <Navigate to="/login" />;
// }
