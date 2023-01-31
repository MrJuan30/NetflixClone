import { useEffect } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Components/HomePage';
import { AuthContextProvider } from './context/AuthContext';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Account from './Components/Account/Account';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';

function App() {
  /*SE UTILIZA PARA QUE CUANDO SE CAMBIE DE RUTA INICIE DESDE LA PARTE DE ARRIBA*/
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    onTop()
  }, [routePath]);

  return (
    <>
      <AuthContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>}/>
        </Routes>  
      </AuthContextProvider>
      
    </>
  )
}

export default App
