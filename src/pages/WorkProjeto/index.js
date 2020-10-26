import React from 'react'
import './style.css'
import iconAdd from '../../Icon/icon-content-add_24px.png'
export default function WorkProjeto() {
    return (
        <>
            <div className='projetobarr'>
                <div className='esquerdaBarr'>
                    <h4>Em Aprovação</h4>
                </div>
                <div className='centroBarr'>
                    <h4>Pesquisador: Rachel </h4>
                    <button>Membros</button>
                </div>
                <div className='direitaBarr'>
                    <h4>Inicio: 10/05/2020 </h4>
                    <h4> Fim: </h4>
                </div>
            </div>
            <div className='cards'>
                <div className='card' id='afazer'>
                    <h5>A fazer</h5>
                    <div className='scroll'>
                    <div className='cardTask'>
                        <div className='cardColor' style={{ background: 'green' }} />

                        <h6>Exemplo tarefa</h6>
                    </div>
                    <div className='cardTask'>
                        <div className='cardColor' style={{ background: 'green' }} />

                        <h6>Exemplo tarefa</h6>
                    </div>
                    <div className='cardTask'>
                        <div className='cardColor' style={{ background: 'green' }} />

                        <h6>Exemplo tarefa</h6>
                    </div>
                    <div className='cardTask'>
                        <div className='cardColor' style={{ background: 'green' }} />

                        <h6>Exemplo tarefa</h6>
                    </div>
                    <div className='cardTask'>
                        <div className='cardColor' style={{ background: 'green' }} />

                        <h6>Exemplo tarefa</h6>
                    </div>
                    <div className='cardTask'>
                        <div className='cardColor' style={{ background: 'green' }} />

                        <h6>Exemplo tarefa</h6>
                    </div>
                    </div>
                    <div className='adicionarCard'>
                        <button><img src={iconAdd}/>Adicionar novo card</button>
                    </div>
                </div>
                <div className='card' id='andamento'>
                    <h5>Em Andamento</h5>
                    <div className='cardTask'>
                        <div className='cardColor' style={{ background: 'green' }} />

                        <h6>Exemplo tarefa</h6>
                    </div>
                    <div className='adicionarCard'>
                        <button><img src={iconAdd}/>Adicionar novo card</button>
                    </div>
                </div>
                <div className='card' id='concluido'>
                    <h5>Concluido</h5>
                    <div className='adicionarCard'>
                        <button><img src={iconAdd}/>Adicionar novo card</button>
                    </div>
                </div>
            </div>
        </>

    )
}