import React, { useState, useEffect } from 'react'
import './style.css'
import iconAdd from '../../Icon/icon-content-add_24px.png'
import PopUpNewCard from '../../components/PopUpNewCard'
import { format } from 'date-fns'


export default function WorkProjeto() {
    const [listTarefas, setListTarefas] = useState({ andamento: [], afazer: [], concluido: [] })
    const [statusModal, setStatusModal] = useState({ status: false, categoria: '' })
    useEffect(() => {
        function getTarefas() {
            // let tarefas = { ...listTarefas }
            // let tarefaExemplo = { ...tarefa }
            // tarefaExemplo.nome = 'Criar Pagina'
            // tarefaExemplo.descricao = 'The sunset filled the entire sky with the deep color of rubies, setting the clouds ablaze. The waves crashed and danced along the shore, moving up and down in a graceful and gentle rhythm like they were dancing.'
            // tarefaExemplo.status = 'afazer'
            // tarefaExemplo.dataEntrega = '3 Nov 02:54'
            // tarefas[tarefaExemplo.status].push(tarefaExemplo)
            // setListTarefas(tarefas)
        }
        getTarefas()
        console.log('ok')
    }, []);
    useEffect(() => {
        let novoCard = sessionStorage.getItem('card')
        if (novoCard) {
            let tarefa = JSON.parse(novoCard)
            let registrotarefas = { ...listTarefas }
            let novaDateFormato = format(new Date(tarefa?.dataEntrega), 'd MMM hh:mm')
            // let dia = format(new Date(tarefa?.dataEntrega), 'd')
            // let mes = format(new Date(tarefa?.dataEntrega), 'M')
            // let ano = format(new Date(tarefa?.dataEntrega), 'yyyy')
            // let hora = format(new Date(tarefa?.dataEntrega), 'hh')
            // let minutos = format(new Date(tarefa?.dataEntrega), 'mm')
            // let segundos = format(new Date(tarefa?.dataEntrega), 'ss')
            tarefa.dataEntrega = novaDateFormato
            // let atraso = compareDesc(new Date(ano, mes, dia, hora, minutos, segundos), new Date())
            // console.log(isPast(new Date(ano, mes, dia, hora, minutos, segundos)))
            // console.log(hora)
            // console.log(atraso)
            // if(atraso === -1){
            //     tarefa.color = '#ff000075'
            // }
            registrotarefas[tarefa.categoria].push(tarefa)
            setListTarefas(registrotarefas)
            sessionStorage.removeItem('card')
        }

    }, [statusModal])

    function adicionarCard(status) {
        let modalStt = { ...statusModal }
        modalStt.status = modalStt.status ? false : true
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
                            <div key={index} className='cardTask'>
                                <div className='cardColor' style={{ background: 'green' }} />
                                <div className='cardBody'>
                                    <h6>{tarefa.nome}</h6>
                                    <p style={{background: tarefa.color}}>{tarefa.dataEntrega}</p>
                                </div>

                            </div>
                        )
                        }

                    </div>
                    <div className='adicionarCard'>
                        <button onClick={function () { adicionarCard('afazer') }}><img alt='imgAdd' src={iconAdd} />Adicionar novo card</button>
                    </div>
                </div>
                <div className='card' id='andamento'>
                    <h5>Em Andamento</h5>
                    <div className='scroll'>
                        {listTarefas.andamento.map((tarefa) =>
                            <div className='cardTask'>
                                <div className='cardColor' style={{ background: 'green' }} />

                                <div className='cardBody'>
                                    <h6>{tarefa.nome}</h6>
                                    <p style={{background: tarefa.color}}>{tarefa.dataEntrega}</p>
                                </div>
                            </div>
                        )
                        }

                    </div>
                    <div className='adicionarCard'>
                        <button onClick={() => adicionarCard('andamento')}><img alt='imgAdd' src={iconAdd} />Adicionar novo card</button>
                    </div>

                </div>
                <div className='card' id='concluido'>
                    <h5>Concluido</h5>
                    <div className='scroll'>
                        {listTarefas.concluido.map((tarefa) =>
                            <div className='cardTask'>
                                <div className='cardColor' style={{ background: 'green' }} />

                                <div className='cardBody'>
                                    <h6>{tarefa.nome}</h6>
                                    <p style={{background: tarefa.color}}>{tarefa.dataEntrega}</p>
                                </div>
                            </div>
                        )
                        }
                    </div>

                    <div className='adicionarCard'>
                        <button onClick={() => adicionarCard('concluido')}><img alt='imgAdd' src={iconAdd} />Adicionar novo card</button>
                    </div>
                </div>
            </div>
            <PopUpNewCard status={statusModal.status} categoria={statusModal.categoria} setState={setStatusModal}>
            </PopUpNewCard>
        </>

    )
}