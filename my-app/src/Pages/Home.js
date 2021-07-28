import React, {useState} from "react";
import Header from "../Header";
import logo from "../logo.svg";
import {Link} from 'react-router-dom';

function Home(){
  const [contador,setContador] = useState(0);
  function increment() {
    setContador(contador+1)
  }

  return(
    <div className="Home">
      <Header title='Header Param' />
      <img src={logo} className='App-logo' alt = 'logo' />
      <p>
        <input type='button' value = 'clique' onClick={increment} />
      </p>
      <p>{contador} Cliques!</p>
      
      <p>
        <Link to="/cadastro">Acessar Cadastro</Link>
      </p>
    </div>
  );
}

export default Home;