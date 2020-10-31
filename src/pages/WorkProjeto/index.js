import React, { useState, useEffect } from 'react'
import './style.css'
import iconAdd from '../../Icon/icon-content-add_24px.png'
import PopUpNewCard from '../../components/PopUpNewCard'


export default function WorkProjeto() {
    const [tarefa, setTarefa] = useState({ nome: '', descricao: '', status: '' })
    const [listTarefas, setListTarefas] = useState({ andamento: [], afazer: [], concluido: [] })
    const [statusModal, setStatusModal] = useState({status: false, categoria: ''})
    useEffect(() => {
        function getTarefas() {
            let tarefas = { andamento: [], afazer: [], concluido: [] }
            let tarefaExemplo = { nome: '', descricao: '', status: '' }
            tarefaExemplo.nome = 'Criar Pagina'
            tarefaExemplo.descricao = 'The sunset filled the entire sky with the deep color of rubies, setting the clouds ablaze. The waves crashed and danced along the shore, moving up and down in a graceful and gentle rhythm like they were dancing.'
            tarefaExemplo.status = 'afazer'
            tarefas[tarefaExemplo.status].push(tarefaExemplo)
            setListTarefas(tarefas)
        }
        getTarefas()
        console.log('ok')
    }, []);
    useEffect(()=>{
        let novoCard = sessionStorage.getItem('card')
        if (novoCard){
            let tarefa = JSON.parse(novoCard)
            console.log(tarefa)
            let registrotarefas = {...listTarefas} 
            registrotarefas[tarefa.categoria].push(tarefa)
            setListTarefas(registrotarefas)
            sessionStorage.removeItem('card')
        }
        
    }, [statusModal])

    function adicionarCard(status) {
        let modalStt = {...statusModal}
        modalStt.status = modalStt.status? false: true
        modalStt.categoria = status
        setStatusModal(modalStt)
    }
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
                        {listTarefas.afazer.map((tarefa, index) =>
                            <div key={index}className='cardTask'>
                                <div className='cardColor' style={{ background: 'green' }} />

                                <h6>{tarefa.nome}</h6>
                            </div>
                        )
                        }

                    </div>
                    <div className='adicionarCard'>
                        <button onClick={function(){adicionarCard('afazer')}}><img alt='imgAdd' src={iconAdd}  />Adicionar novo card</button>
                    </div>
                </div>
                <div className='card' id='andamento'>
                    <h5>Em Andamento</h5>
                    <div className='scroll'>
                        {listTarefas.andamento.map((tarefa) =>
                            <div className='cardTask'>
                                <div className='cardColor' style={{ background: 'green' }} />

                                <h6>{tarefa.nome}</h6>
                            </div>
                        )
                        }

                    </div>
                    <div className='adicionarCard'>
                        <button onClick={() => adicionarCard('andamento')}><img alt='imgAdd' src={iconAdd}  />Adicionar novo card</button>
                    </div>

                </div>
                <div className='card' id='concluido'>
                    <h5>Concluido</h5>
                    <div className='scroll'>
                        {listTarefas.concluido.map((tarefa) =>
                            <div className='cardTask'>
                                <div className='cardColor' style={{ background: 'green' }} />

                                <h6>{tarefa.nome}</h6>
                            </div>
                        )
                        }
                    </div>

                    <div className='adicionarCard'>
                        <button onClick={() => adicionarCard('concluido')}><img alt='imgAdd' src={iconAdd} />Adicionar novo card</button>
                    </div>
                </div>
            </div>
            <PopUpNewCard  status={statusModal.status} categoria={statusModal.categoria} setState={setStatusModal}>
            </PopUpNewCard>              
        </>

    )
}