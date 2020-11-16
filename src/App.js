import React, { useState } from 'react';
import './App.css';



function App({ history }) {
  const [usuario, setUsuario] = useState({ usuario: '', senha: '' })
  const consultaCredenciais = () => {
    console.log(usuario)
    const consultaAxio = [{ usuario: 'mateus', senha: '12345' }]
    const usuarioInput = { ...usuario }
    let encontrarUsuario = false
    for (let usuarioReg of consultaAxio) {
      if (usuarioReg.usuario === usuarioInput.usuario
        && usuarioReg.senha === usuarioInput.senha) {
        encontrarUsuario = true

      }
    }
    if (encontrarUsuario) {
      history.push('/Projetos')
    } else {
      alert('Usuário ou senha inválidos')
    }
  }

  const setUsuarioNome = (e) => {
    let pessoa = { ...usuario }
    pessoa.usuario = e.target.value
    setUsuario(pessoa)
  }
  const setUsuarioSenha = (e) => {
    let pessoa = { ...usuario }
    pessoa.senha = e.target.value
    setUsuario(pessoa)
  }
  return (
    <div >
      <label>Login</label>
      <input name="Usuario" value={usuario.usuario} onChange={(e) => setUsuarioNome(e)}></input>
      <input name="Senha" value={usuario.senha} onChange={(e) => setUsuarioSenha(e)}></input>
      <button onClick={consultaCredenciais}>Entrar</button>
      <div>
        <button></button>
      </div>
    </div>
  );
}

export default App;
