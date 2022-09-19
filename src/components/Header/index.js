import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import  './styles.css'


const Header = () => {

    const [active, setActive] = useState('Home')
    const location = useLocation();

    useEffect(() => {
        if(location === pathname('/')){
            setActive("Home")
        }else if(location === pathname('/add')){
            setActive("addContact")
        }

    }, [location])

  return (
    <div className='header'>
        <p className='logotipo'>Lucas de Souza | DEV</p>
        <div className='content'>

            <Link to="/">
                <p 
                className={`${active === "Home" ? "ative" : ""}`} 
                onClick={()=> setActive("Home")}>Acessar Home</p>
            </Link>

            <Link to="/add">
              <p 
              className={`${active === "addContact" ? "ative" : ""}`}
              onClick={()=> setActive("Adicionar contato")}
              >
              Adicionar
              </p>
            </Link>

        </div>
      
    </div>

  );
  
}

export default Header;
