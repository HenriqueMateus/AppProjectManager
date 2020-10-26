import logo from './logo.svg';
import './App.css';


function App() {
  return (

<div className="rows">
  <h1>Cadastro</h1>
    <div className='row'>Nome</div>
    <input type="text" />
    <div className='row'>SobreNome</div>
    <input type="text"  />
    <div className='row'>Senha</div>
    <input type="text"  />
    <div className='row'>Confirme sua Senha</div>
    <input type="text"  />
    <div className='row'>Email</div>
    <input type="text"  />
    <div className='row'>Link Curriculum</div>
    <input type="text" />
</div>
  );
}

export default App;

