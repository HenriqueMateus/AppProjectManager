import React, { useState } from 'react'
import { ViewList } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './style.css';


function Cadastro() {
  const [openBarr, setOpenBarr] = useState()
  const viewBar = () => {
    if (openBarr) {
      setOpenBarr(false)
    } else {
      setOpenBarr(true)
    }
  }
  return (
    <div>
      <div className='appbar'>
        <ViewList style={{ marginRight: 'auto', marginLeft: '10px' }} onClick={() => viewBar()} />
      </div>
      <div className='contentCadastro'>
        <div className='barListRow'>
          {openBarr &&
            <div className='barListContent'>
              <ul>
                <Link to='/'><li>Login</li></Link>
              </ul>
            </div>

          }
        </div>
        <div className='contentForm'>

          <div className="rows">
            <h2>Cadastro</h2>
            <div className='row'>Nome</div>
            <input type="text" />
            <div className='row'>SobreNome</div>
            <input type="text" />
            <div className='row'>Senha</div>
            <input type="text" />
            <div className='row'>Confirme sua Senha</div>
            <input type="text" />
            <div className='row'>Email</div>
            <input type="text" />
            <div className='row'>Link Curriculum</div>
            <input type="text" />
          </div>
          <div className='overCadastro'>
            <button>Cadastrar</button>
          </div>

        </div>
      </div>

    </div>


  );
}

export default Cadastro