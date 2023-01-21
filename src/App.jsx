import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';

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
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
