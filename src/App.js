import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div >
      <label>Login</label>
      <input name="Usuario"></input>
      <input name="Senha"></input>
      <Link to="/Projetos"><button>Entrar</button></Link>
      <div>
        <button></button>
      </div>
    </div>
  );
}

export default App;
